import {
  setRoutineNotifications,
  type NotificationPreset,
  type NotificationTrigger,
} from './notifications';

export const attachComparisonSlider = () => {
  const comparisonSlider = document.querySelector<HTMLInputElement>('[data-comparison-slider]');
  const comparisonAfter = document.querySelector<HTMLElement>('[data-comparison-after]');
  const comparison = document.querySelector<HTMLElement>('.comparison');

  comparisonSlider?.addEventListener('input', () => {
    const reveal = `${comparisonSlider.value}%`;
    comparison?.style.setProperty('--reveal', reveal);
    comparisonAfter?.style.setProperty('--reveal', reveal);
  });
};

const getRoutineFieldValue = (form: HTMLFormElement, name: string) => {
  const field = form.elements.namedItem(name);

  if (field instanceof RadioNodeList) {
    return String(field.value);
  }

  if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement) {
    return field.value;
  }

  return '';
};

export const attachRoutineSetter = () => {
  const form = document.querySelector<HTMLFormElement>('[data-routine-form]');
  const status = document.querySelector<HTMLElement>('[data-routine-status]');

  if (!form || !status) {
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const text = getRoutineFieldValue(form, 'text').trim();
    const duration = getRoutineFieldValue(form, 'duration');
    const preset = getRoutineFieldValue(form, 'preset') as NotificationPreset;
    const trigger = getRoutineFieldValue(form, 'trigger') as NotificationTrigger;

    if (!text) {
      status.textContent = 'Routine text is required.';
      return;
    }

    status.textContent = 'Setting routine...';

    const result = await setRoutineNotifications(
      [
        {
          duration,
          preset,
          text,
          trigger,
        },
      ],
      {
        channel: 'pwa',
        replaceExisting: true,
      },
    );

    if (result.permission !== 'granted') {
      status.textContent = `Notification permission is ${result.permission}.`;
      return;
    }

    status.textContent =
      trigger === 'start'
        ? `${text} routine set. Notification sent now.`
        : `${text} routine set. Notification scheduled after ${duration}.`;
  });
};