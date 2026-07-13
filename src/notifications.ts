export type NotificationChannel = 'browser' | 'pwa';
export type NotificationPreset = 'water' | 'standup' | 'stretch';
export type NotificationTrigger = 'start' | 'end';

export type RoutineReminderInput = {
  channel?: NotificationChannel;
  duration?: number | string;
  durationSeconds?: number;
  icon?: string;
  id?: string;
  image?: string;
  preset?: NotificationPreset;
  routineId?: string;
  text: string;
  trigger?: NotificationTrigger;
};

export type RoutineNotificationSetOptions = {
  channel?: NotificationChannel;
  replaceExisting?: boolean;
};

type StoredRoutineReminder = {
  channel: NotificationChannel;
  createdAt: number;
  durationSeconds: number;
  icon: string;
  id: string;
  image: string;
  notifyAt: number;
  preset: NotificationPreset;
  routineId?: string;
  text: string;
  trigger: NotificationTrigger;
};

type PresetDetails = {
  accent: string;
  background: string;
  body: string;
  label: string;
  shortLabel: string;
};

type RichNotificationOptions = NotificationOptions & {
  badge?: string;
  data?: unknown;
  image?: string;
};

const STORAGE_KEY = 'pulsefit.routineReminders';
const activeTimers = new Map<string, number>();
let bridgeAttached = false;

const presets: Record<NotificationPreset, PresetDetails> = {
  water: {
    accent: '#0f6b5f',
    background: '#d8f4ee',
    body: 'Hydration check: take a few steady sips.',
    label: 'Water reminder',
    shortLabel: 'WA',
  },
  standup: {
    accent: '#e6533f',
    background: '#ffe2dc',
    body: 'Stand up, reset your posture, and move for a moment.',
    label: 'Standup reminder',
    shortLabel: 'ST',
  },
  stretch: {
    accent: '#5b3e91',
    background: '#efe8ff',
    body: 'Loosen your shoulders, hips, and back.',
    label: 'Stretch reminder',
    shortLabel: 'SX',
  },
};

const isNotificationPreset = (value: unknown): value is NotificationPreset =>
  value === 'water' || value === 'standup' || value === 'stretch';

const normalizePreset = (value: unknown, text: string): NotificationPreset => {
  if (isNotificationPreset(value)) {
    return value;
  }

  const lowerText = text.toLowerCase();

  if (lowerText.includes('stand')) {
    return 'standup';
  }

  if (lowerText.includes('stretch')) {
    return 'stretch';
  }

  return 'water';
};

const normalizeChannel = (value: unknown): NotificationChannel => (value === 'browser' ? 'browser' : 'pwa');

const normalizeTrigger = (value: unknown): NotificationTrigger => (value === 'end' ? 'end' : 'start');

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[character];
  });

export const parseReminderDuration = (duration?: number | string, durationSeconds?: number) => {
  if (typeof durationSeconds === 'number') {
    return Math.max(0, durationSeconds);
  }

  if (typeof duration === 'number') {
    return Math.max(0, duration);
  }

  if (!duration) {
    return 0;
  }

  const match = duration
    .trim()
    .toLowerCase()
    .match(/^(\d+(?:\.\d+)?)\s*(s|sec|secs|second|seconds|m|min|mins|minute|minutes|h|hr|hrs|hour|hours)$/);

  if (!match) {
    throw new Error(`Invalid reminder duration: ${duration}`);
  }

  const amount = Number(match[1]);
  const unit = match[2];

  if (unit.startsWith('h')) {
    return amount * 3600;
  }

  if (unit.startsWith('m') && unit !== 'ms') {
    return amount * 60;
  }

  return amount;
};

const formatDuration = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds} Secs`;
  }

  if (seconds < 3600) {
    const minutes = seconds / 60;
    return `${minutes} ${minutes === 1 ? 'Min' : 'Mins'}`;
  }

  const hours = seconds / 3600;
  return `${hours} ${hours === 1 ? 'Hr' : 'Hrs'}`;
};

const createSvgDataUri = (title: string, detail: string, accent: string, background: string) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="720" height="360" viewBox="0 0 720 360">
      <rect width="720" height="360" rx="32" fill="${background}" />
      <circle cx="116" cy="124" r="58" fill="${accent}" opacity="0.18" />
      <circle cx="602" cy="255" r="86" fill="${accent}" opacity="0.14" />
      <rect x="56" y="208" width="608" height="20" rx="10" fill="${accent}" opacity="0.22" />
      <rect x="56" y="238" width="390" height="20" rx="10" fill="${accent}" opacity="0.16" />
      <text x="56" y="138" fill="#101416" font-family="Arial, sans-serif" font-size="46" font-weight="800">${escapeHtml(title)}</text>
      <text x="56" y="184" fill="#5b6467" font-family="Arial, sans-serif" font-size="24" font-weight="700">${escapeHtml(detail)}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const createPresetIcon = (preset: NotificationPreset) => {
  const details = presets[preset];

  return createSvgDataUri(details.shortLabel, details.label, details.accent, details.background);
};

const createPresetImage = (text: string, preset: NotificationPreset, durationSeconds: number) => {
  const details = presets[preset];

  return createSvgDataUri(text, `${details.label} - ${formatDuration(durationSeconds)}`, details.accent, details.background);
};

const getStoredReminders = (): StoredRoutineReminder[] => {
  try {
    const rawValue = localStorage.getItem(STORAGE_KEY);
    const parsedValue = rawValue ? JSON.parse(rawValue) : [];

    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch {
    return [];
  }
};

const saveStoredReminders = (reminders: StoredRoutineReminder[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
};

const clearTimer = (id: string) => {
  window.clearTimeout(activeTimers.get(id));
  activeTimers.delete(id);
};

const removeReminder = (id: string) => {
  clearTimer(id);
  saveStoredReminders(getStoredReminders().filter((reminder) => reminder.id !== id));
};

const createNotificationOptions = (reminder: StoredRoutineReminder): RichNotificationOptions => {
  const details = presets[reminder.preset];
  const scheduleLabel =
    reminder.trigger === 'start'
      ? 'Started now'
      : `Duration complete after ${formatDuration(reminder.durationSeconds)}`;

  return {
    badge: reminder.icon,
    body: `${details.body} ${scheduleLabel}.`,
    data: {
      reminderId: reminder.id,
      routineId: reminder.routineId,
    },
    icon: reminder.icon,
    image: reminder.image,
    requireInteraction: false,
    tag: `pulsefit-routine-${reminder.id}`,
  };
};

const getCurrentNotificationPermission = (): NotificationPermission | 'unsupported' => {
  if (!('Notification' in window)) {
    return 'unsupported';
  }

  return Notification.permission;
};

export const requestRoutineNotificationPermission = async (): Promise<NotificationPermission | 'unsupported'> => {
  const currentPermission = getCurrentNotificationPermission();

  if (currentPermission === 'granted' || currentPermission === 'denied' || currentPermission === 'unsupported') {
    return currentPermission;
  }

  return Notification.requestPermission();
};

const showBrowserNotification = (reminder: StoredRoutineReminder) => {
  const notification = new Notification(reminder.text, createNotificationOptions(reminder));
  notification.onclick = () => window.focus();
};

const showPwaNotification = async (reminder: StoredRoutineReminder) => {
  if (!('serviceWorker' in navigator)) {
    showBrowserNotification(reminder);
    return;
  }

  const registration = await navigator.serviceWorker.ready;
  await registration.showNotification(reminder.text, createNotificationOptions(reminder));
};

const triggerReminder = async (reminder: StoredRoutineReminder) => {
  if (getCurrentNotificationPermission() !== 'granted') {
    return;
  }

  if (reminder.channel === 'pwa') {
    await showPwaNotification(reminder);
  } else {
    showBrowserNotification(reminder);
  }

  removeReminder(reminder.id);
};

const scheduleReminder = (reminder: StoredRoutineReminder) => {
  clearTimer(reminder.id);

  const delay = Math.max(0, reminder.notifyAt - Date.now());
  const timerId = window.setTimeout(() => {
    void triggerReminder(reminder);
  }, delay);

  activeTimers.set(reminder.id, timerId);
};

const normalizeReminder = (
  reminder: RoutineReminderInput,
  options: RoutineNotificationSetOptions,
): StoredRoutineReminder => {
  const text = reminder.text.trim();

  if (!text) {
    throw new Error('Routine reminder text is required.');
  }

  const durationSeconds = parseReminderDuration(reminder.duration, reminder.durationSeconds);
  const preset = normalizePreset(reminder.preset, text);
  const trigger = normalizeTrigger(reminder.trigger);
  const now = Date.now();

  return {
    channel: normalizeChannel(reminder.channel ?? options.channel),
    createdAt: now,
    durationSeconds,
    icon: reminder.icon ?? createPresetIcon(preset),
    id: reminder.id ?? globalThis.crypto?.randomUUID?.() ?? `${now}-${Math.random().toString(16).slice(2)}`,
    image: reminder.image ?? createPresetImage(text, preset, durationSeconds),
    notifyAt: now + (trigger === 'end' ? durationSeconds * 1000 : 0),
    preset,
    routineId: reminder.routineId,
    text,
    trigger,
  };
};

export const clearRoutineNotifications = () => {
  getStoredReminders().forEach((reminder) => clearTimer(reminder.id));
  saveStoredReminders([]);
};

export const setRoutineNotifications = async (
  reminders: RoutineReminderInput[],
  options: RoutineNotificationSetOptions = {},
) => {
  const permission = await requestRoutineNotificationPermission();

  if (permission !== 'granted') {
    return {
      permission,
      reminders: [] as StoredRoutineReminder[],
      scheduled: 0,
    };
  }

  const replaceExisting = options.replaceExisting ?? true;
  const normalizedReminders = reminders.map((reminder) => normalizeReminder(reminder, options));

  if (replaceExisting) {
    clearRoutineNotifications();
  }

  saveStoredReminders([...getStoredReminders(), ...normalizedReminders]);
  normalizedReminders.forEach(scheduleReminder);

  return {
    permission,
    reminders: normalizedReminders,
    scheduled: normalizedReminders.length,
  };
};

export const restoreScheduledRoutineNotifications = () => {
  const reminders = getStoredReminders();

  reminders.forEach(scheduleReminder);

  return reminders.length;
};

export const registerNotificationWorker = async () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  try {
    await navigator.serviceWorker.register('/notification-worker.js');
  } catch {
    // Browser notifications still work when service-worker registration is unavailable.
  }
};

declare global {
  interface Window {
    tinitiateNotifications?: {
      clearRoutineNotifications: typeof clearRoutineNotifications;
      requestPermission: typeof requestRoutineNotificationPermission;
      restoreScheduledRoutineNotifications: typeof restoreScheduledRoutineNotifications;
      setRoutineNotifications: typeof setRoutineNotifications;
    };
  }
}

const readReminderEvent = (event: Event) => {
  const detail = event instanceof CustomEvent ? event.detail : undefined;

  if (Array.isArray(detail)) {
    return {
      options: {},
      reminders: detail as RoutineReminderInput[],
    };
  }

  if (detail && Array.isArray(detail.reminders)) {
    return {
      options: {
        channel: detail.channel,
        replaceExisting: detail.replaceExisting,
      } as RoutineNotificationSetOptions,
      reminders: detail.reminders as RoutineReminderInput[],
    };
  }

  return undefined;
};

export const attachRoutineNotificationBridge = () => {
  if (bridgeAttached) {
    return;
  }

  bridgeAttached = true;
  restoreScheduledRoutineNotifications();

  window.tinitiateNotifications = {
    clearRoutineNotifications,
    requestPermission: requestRoutineNotificationPermission,
    restoreScheduledRoutineNotifications,
    setRoutineNotifications,
  };

  window.addEventListener('routine-notifications:set', (event) => {
    const payload = readReminderEvent(event);

    if (!payload) {
      return;
    }

    void setRoutineNotifications(payload.reminders, payload.options);
  });
};