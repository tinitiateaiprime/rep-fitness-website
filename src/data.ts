import type {
  ClassType,
  Equipment,
  Faq,
  FooterGroup,
  Guide,
  LinkItem,
  Step,
  Trainer,
  WellnessCourse,
} from './types';
import { equipmentImage, portrait } from './media';

export const articleLinks: LinkItem[] = [
  {
    label: 'Training',
    href: '#articles',
    copy: 'Strength plans, form cues, and progressive overload ideas.',
  },
  {
    label: 'Nutrition',
    href: '#how-it-works',
    copy: 'Meal tracking, protein targets, and recovery basics.',
  },
  {
    label: 'Cardio',
    href: '#classes',
    copy: 'Intervals, Zone 2 work, conditioning, and running plans.',
  },
  {
    label: 'Product',
    href: '#app',
    copy: 'App updates, coaching tools, and member workflow notes.',
  },
];

export const equipmentLinks: Equipment[] = [
  { label: 'Bike', href: '#classes', copy: 'Cycling intervals and endurance rides.', image: equipmentImage('bike') },
  { label: 'Tread', href: '#classes', copy: 'Run, walk, and incline workouts.', image: equipmentImage('tread') },
  { label: 'Row', href: '#classes', copy: 'Full-body power with guided pacing.', image: equipmentImage('row') },
  { label: 'Dumbbells', href: '#classes', copy: 'Strength blocks for home or gym.', image: equipmentImage('dumbbell') },
  { label: 'Mat', href: '#classes', copy: 'Yoga, mobility, pilates, and core.', image: equipmentImage('mat') },
];

export const trainers: Trainer[] = [
  {
    name: 'Maya Singh',
    role: 'Strength coach',
    bio: 'Measured reps, clean tempo, and calm coaching for heavy days.',
    image: portrait('#cdeee6', '#111820', '#19120e'),
  },
  {
    name: 'Andre Cole',
    role: 'HIIT specialist',
    bio: 'Short bursts, clear regressions, and conditioning that scales.',
    image: portrait('#f6d26f', '#e6533f', '#1b130f'),
  },
  {
    name: 'Elena Brooks',
    role: 'Yoga and mobility',
    bio: 'Flow sessions for recovery, breath, posture, and range.',
    image: portrait('#d8e6ff', '#3956a3', '#322019'),
  },
  {
    name: 'Ravi Mehta',
    role: 'Cardio coach',
    bio: 'Endurance, pacing, and practical plans for busy weeks.',
    image: portrait('#ffd6c9', '#0f6b5f', '#211511'),
  },
  {
    name: 'Nora Fields',
    role: 'Nutrition guide',
    bio: 'Simple food logs, balanced macros, and habits that last.',
    image: portrait('#e9e0ff', '#5b3e91', '#19120e'),
  },
];

export const appMetrics = [
  { value: '91%', label: 'recovery readiness' },
  { value: '7h 42m', label: 'sleep target' },
  { value: '14.8', label: 'strain score' },
];

export const aiFeatures = [
  {
    title: 'Adaptive plan generator',
    tag: 'LLM + recovery',
    copy: 'Rebuilds the next workout from readiness, soreness, schedule, and missed sessions.',
    signal: 'Plan updated in 8 sec',
  },
  {
    title: 'Computer vision form coach',
    tag: 'Pose AI',
    copy: 'Reads key movement angles and gives simple corrections while the set is still fresh.',
    signal: 'Knee path improved',
  },
  {
    title: 'Meal photo macro scan',
    tag: 'Vision nutrition',
    copy: 'Turns a plate photo into portions, protein estimates, hydration nudges, and grocery ideas.',
    signal: 'Protein gap found',
  },
  {
    title: 'AI accountability buddy',
    tag: 'Agent support',
    copy: 'Keeps the tone low-pressure with check-ins, swaps, reminders, and weekly reflection prompts.',
    signal: 'Friday run moved',
  },
];

export const formMetrics = [
  { label: 'Squat depth', value: '94%', status: 'Good range' },
  { label: 'Knee travel', value: '7 deg', status: 'Aligned' },
  { label: 'Tempo drift', value: '0.4s', status: 'Steady' },
  { label: 'Back angle', value: '82%', status: 'Brace cue' },
];

export const mealInsights = [
  { label: 'Protein estimate', value: '38g', copy: 'Add yogurt or tofu if this is a heavy training day.' },
  { label: 'Carb timing', value: '62g', copy: 'Best placed before intervals or after strength work.' },
  { label: 'Hydration cue', value: '+600ml', copy: 'Recovery score suggests adding electrolytes today.' },
];

export const recoverySignals = [
  { label: 'Sleep debt', value: '-42m' },
  { label: 'HRV trend', value: '+6%' },
  { label: 'Joint load', value: 'High' },
  { label: 'Stress tone', value: 'Calm' },
];

export const agentMessages = [
  { from: 'AI coach', copy: 'Your legs look loaded. I swapped sprints for Zone 2 and kept upper body strength.' },
  { from: 'Training buddy', copy: 'I can join the 20-minute core session at 6:30. Keep it simple today.' },
  { from: 'Nutrition agent', copy: 'Dinner is low in protein. Want a 5-minute grocery list for tomorrow?' },
];

export const wellnessCourses: WellnessCourse[] = [
  {
    title: 'Total Shred Reset',
    focus: 'Strength + cardio',
    duration: '30 days',
    copy: 'A progressive course with short classes, recovery days, and weekly trainer check-ins.',
  },
  {
    title: 'Mindful Energy',
    focus: 'Yoga + meditation',
    duration: '14 days',
    copy: 'Breath-led flows, sleep resets, and low-impact movement for stressful weeks.',
  },
  {
    title: 'Heart Smart Habits',
    focus: 'Nutrition + walking',
    duration: '21 days',
    copy: 'Meal-planning prompts, hydration goals, and steady cardio for long-term wellness.',
  },
];

export const wellnessPillars = [
  { title: 'Fitness', copy: 'No-equipment classes, strength blocks, cardio, pilates, and mobility.' },
  { title: 'Mindfulness', copy: 'Meditation, stretch breaks, sleep wind-downs, and breath sessions.' },
  { title: 'Nutrition', copy: 'Recipe ideas, meal plans, macro support, and grocery nudges.' },
  { title: 'Motivation', copy: 'Friend challenges, streak rewards, group goals, and community wins.' },
];

export const loggerFeatures = [
  { title: 'Routine planner', copy: 'Build gym days with supersets, warmups, drop sets, notes, and target RPE.' },
  { title: 'Set-by-set logging', copy: 'Track weight, reps, rest, failure sets, and personal notes without leaving the workout.' },
  { title: 'Progress charts', copy: 'See volume, estimated one-rep max, personal records, and exercise history.' },
  { title: 'Social routines', copy: 'Save member routines, compare progress, react to workouts, and stay accountable.' },
];

export const setTypes = ['Warmup', 'Working', 'Drop', 'Failure'];

export const progressStats = [
  { label: 'Bench 1RM', value: '102kg' },
  { label: 'Weekly volume', value: '18.4k' },
  { label: 'Rest timer', value: '01:25' },
];

export const deviceModes = ['Phone logger', 'Watch offline', 'Desktop planner'];

export const howItWorks: Step[] = [
  {
    title: 'Choose your goal',
    copy: 'Pick strength, fat loss, endurance, mobility, or a balanced weekly routine.',
  },
  {
    title: 'Log meals and movement',
    copy: 'Track workouts, calories, macros, streaks, and personal bests in one clean view.',
  },
  {
    title: 'Get the next session',
    copy: 'Your plan adapts around schedule, soreness, equipment, and recent progress.',
  },
];

export const classTypes: ClassType[] = [
  { name: 'Strength', count: '320+', copy: 'Dumbbells, machines, bodyweight, and progressive blocks.' },
  { name: 'HIIT', count: '190+', copy: 'Intervals that balance effort, rest, and repeatable intensity.' },
  { name: 'Yoga', count: '160+', copy: 'Mobility, recovery, breath, and flexibility sessions.' },
  { name: 'Cycling', count: '120+', copy: 'Cadence rides, climbs, endurance, and power work.' },
  { name: 'Running', count: '140+', copy: 'Treadmill, outdoor pace plans, and beginner run-walks.' },
  { name: 'Meditation', count: '80+', copy: 'Cooldowns, sleep resets, and short focus sessions.' },
];

export const guides: Guide[] = [
  {
    title: 'HIIT guide',
    copy: 'Timed intervals, warmups, cooldowns, and recovery rules for high-output days.',
    level: 'All levels',
  },
  {
    title: 'Functional training',
    copy: 'Squat, hinge, push, pull, carry, and rotate with cleaner mechanics.',
    level: 'Beginner',
  },
  {
    title: 'Progressive overload',
    copy: 'Add load, reps, sets, tempo, or density without jumping too fast.',
    level: 'Intermediate',
  },
  {
    title: 'Fat loss training',
    copy: 'Pair sustainable conditioning with strength, steps, protein, and sleep.',
    level: 'Balanced',
  },
];

export const angleCards = [
  { title: 'Front angle', copy: 'Check knee path, shoulder height, grip width, and foot stance.' },
  { title: 'Side angle', copy: 'Review spine position, hip depth, bar path, and tempo.' },
  { title: 'Top set', copy: 'Compare your strongest set with the target rep range.' },
  { title: 'Recovery map', copy: 'Use recent muscle load to decide what to train next.' },
];

export const faqs: Faq[] = [
  {
    question: 'Can beginners use the plans?',
    answer: 'Yes. Every workout includes beginner targets, lighter alternatives, and simple progress rules.',
  },
  {
    question: 'Can I train without equipment?',
    answer: 'Yes. Bodyweight, band, mat, and home dumbbell paths are included alongside gym plans.',
  },
  {
    question: 'Does nutrition tracking replace coaching?',
    answer: 'No. It gives you a clearer picture of calories, protein, hydration, and habits so coaching decisions are easier.',
  },
  {
    question: 'How often does the plan change?',
    answer: 'The weekly plan updates as you complete sessions, skip days, log recovery, or change equipment.',
  },
];

export const footerGroups: FooterGroup[] = [
  { title: 'Train', links: ['Strength', 'Cardio', 'Yoga', 'Mobility'] },
  { title: 'Tools', links: ['Workout planner', 'Meal log', 'Progress chart', 'Coach chat'] },
  { title: 'Company', links: ['About', 'Stories', 'Careers', 'Press'] },
  { title: 'Support', links: ['Help center', 'Contact', 'Privacy', 'Terms'] },
];

export const videoTiles = ['Strength', 'Yoga', 'HIIT', 'Run', 'Cycle', 'Core'];
