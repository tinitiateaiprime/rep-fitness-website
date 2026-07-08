# PulseFit Basic Fitness Website

PulseFit is a clean, responsive fitness website built from scratch with TypeScript and Vite. It is a simple single-page website for presenting workouts, progress tracking, membership plans, and a strong fitness-focused hero section.

The design takes light inspiration from modern fitness platforms such as cult.fit, FitOn, and Hevy, but it uses original branding, copy, layout, and assets.

## Table of Contents

1. Project Overview
2. Features
3. Tech Stack
4. Folder Structure
5. Requirements
6. Installation
7. How to Run
8. Available Scripts
9. How the Website Works
10. Main Files Explained
11. How to Edit Content
12. How to Edit Styling
13. Assets
14. Responsive Design
15. Build and Preview
16. Deployment
17. Troubleshooting
18. Future Improvements

## Project Overview

This project is a beginner-friendly fitness website named **PulseFit**.

It includes:

- A full-screen hero section with a fitness image
- Navigation links
- Workout highlights
- Simple stats section
- Feature cards
- Workout library cards
- Progress dashboard preview
- Pricing or membership section
- Responsive mobile layout
- TypeScript-rendered page content

This is not a copied website. The reference websites were used only for general ideas such as fitness class sections, progress tracking, short call-to-action buttons, and modern fitness app presentation.

## Features

- **Hero section:** Big first screen with brand name, short fitness message, and action buttons.
- **Generated visual asset:** Local hero image stored in the project.
- **Stats strip:** Quick numbers for classes, beginner plans, and progress access.
- **Feature cards:** Explains training, tracking, and consistency benefits.
- **Workout library:** Shows sample workout sessions with duration, level, and focus.
- **Progress preview:** Simple dashboard-style section with weekly activity bars.
- **Pricing cards:** Starter and Plus membership options.
- **Responsive design:** Works on desktop, tablet, and mobile.
- **TypeScript structure:** Content is stored in typed arrays and rendered into the page.
- **Vite setup:** Fast local development and production build support.

## Tech Stack

- **HTML:** Base page entry point.
- **CSS:** Full responsive styling.
- **TypeScript:** Site content and DOM rendering.
- **Vite:** Development server and production build tool.
- **Node.js / npm:** Dependency installation and scripts.

## Folder Structure

```text
fitness_wesite/
├── dist/
│   └── Production build output. Created after running npm run build.
├── node_modules/
│   └── Installed npm dependencies. Created after running npm install.
├── src/
│   ├── assets/
│   │   └── hero-fitness.png
│   ├── main.ts
│   ├── styles.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

## Requirements

Install these before running the project:

- Node.js
- npm

Recommended:

- Node.js 18 or newer
- A modern browser such as Chrome, Edge, Firefox, or Safari

Check your installed versions:

```bash
node --version
npm --version
```

## Installation

From the project folder:

```bash
npm install
```

This installs the dependencies listed in `package.json`.

## How to Run

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://127.0.0.1:5173/
```

If port `5173` is busy, Vite may choose another port. Check the terminal output for the exact local URL.

## Available Scripts

### Start Development Server

```bash
npm run dev
```

Runs the site locally with Vite.

### Build for Production

```bash
npm run build
```

Runs TypeScript checks and creates the production files in `dist/`.

### Preview Production Build

```bash
npm run preview
```

Serves the built `dist/` folder locally so you can test the production version.

## How the Website Works

The app starts from `index.html`.

Inside `index.html`, this line loads the TypeScript entry file:

```html
<script type="module" src="/src/main.ts"></script>
```

The `src/main.ts` file:

- Imports the CSS file
- Imports the hero image
- Defines TypeScript types
- Stores website content in arrays
- Finds the `#app` element
- Renders the complete page into the browser

The `src/styles.css` file controls the full visual design:

- Colors
- Layout
- Typography
- Cards
- Buttons
- Hero image overlay
- Responsive breakpoints

## Main Files Explained

### `index.html`

This is the main HTML file. It contains:

- Page metadata
- SEO description
- Browser title
- Root element: `<div id="app"></div>`
- Script link to `src/main.ts`

### `src/main.ts`

This is the main TypeScript file.

It contains:

- Type definitions:
  - `Stat`
  - `Feature`
  - `Workout`
  - `Plan`
- Data arrays:
  - `stats`
  - `features`
  - `workouts`
  - `plans`
- Page rendering logic

To change website text, workout names, pricing, or features, edit this file.

### `src/styles.css`

This is the main styling file.

It controls:

- Header
- Hero section
- Buttons
- Feature cards
- Workout cards
- Progress dashboard
- Pricing cards
- Footer
- Mobile and tablet layouts

### `src/assets/hero-fitness.png`

This is the local hero image used at the top of the website.

It is imported in `src/main.ts`:

```ts
import heroImage from './assets/hero-fitness.png';
```

### `src/vite-env.d.ts`

This file gives TypeScript support for Vite-specific imports such as images and other assets.

### `package.json`

This file stores:

- Project name
- Version
- npm scripts
- Development dependencies

### `tsconfig.json`

This file stores TypeScript compiler settings.

## How to Edit Content

Open:

```text
src/main.ts
```

### Change Stats

Edit this array:

```ts
const stats: Stat[] = [
  { value: '30+', label: 'weekly classes' },
  { value: '12', label: 'beginner plans' },
  { value: '24/7', label: 'progress access' },
];
```

### Change Features

Edit this array:

```ts
const features: Feature[] = [
  {
    title: 'Train anywhere',
    copy: 'Short bodyweight, strength, yoga, and cardio sessions built for home or gym days.',
  },
];
```

### Change Workouts

Edit this array:

```ts
const workouts: Workout[] = [
  { name: 'Morning Mobility', duration: '18 min', level: 'Beginner', focus: 'Flexibility' },
];
```

### Change Pricing

Edit this array:

```ts
const plans: Plan[] = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For building your first weekly routine.',
    perks: ['5 saved workouts', 'Basic progress log', 'Beginner plans'],
  },
];
```

## How to Edit Styling

Open:

```text
src/styles.css
```

### Change Colors

The main colors are stored at the top:

```css
:root {
  --ink: #171717;
  --muted: #5c625f;
  --paper: #f7f9f6;
  --surface: #ffffff;
  --line: #dfe6df;
  --mint: #27d6a3;
  --teal: #087e75;
  --coral: #ff6b57;
  --lime: #d7f75b;
}
```

Change these variables to update the full color theme.

### Change Hero Height

Find:

```css
.hero {
  min-height: 86vh;
}
```

Increase or decrease the `min-height` value.

### Change Mobile Layout

Mobile styles are inside:

```css
@media (max-width: 680px) {
}
```

Tablet styles are inside:

```css
@media (max-width: 980px) {
}
```

## Assets

Current asset:

```text
src/assets/hero-fitness.png
```

The hero image was generated for this project and copied into the workspace. It is used as the background image in the hero section.

To replace it:

1. Add a new image inside `src/assets/`.
2. Update the import in `src/main.ts`.

Example:

```ts
import heroImage from './assets/new-image.png';
```

## Responsive Design

The website is responsive across:

- Desktop
- Tablet
- Mobile

Important responsive behavior:

- Navigation links hide on smaller screens.
- Cards switch from multiple columns to one column on mobile.
- Hero content stacks neatly.
- Buttons become full width on mobile.
- Chart bars resize for smaller screens.

## Build and Preview

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The final production files will be inside:

```text
dist/
```

## Deployment

You can deploy the `dist/` folder to most static hosting platforms.

Common options:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- Any static web server

General deployment steps:

1. Run `npm run build`.
2. Upload the `dist/` folder.
3. Configure the hosting platform to serve `dist/index.html`.

For Vercel or Netlify:

- Build command: `npm run build`
- Output folder: `dist`

## Troubleshooting

### `npm install` fails

Try:

```bash
npm cache verify
npm install
```

Also confirm Node.js and npm are installed.

### Development server does not start

Try another port:

```bash
npm run dev -- --port 5174
```

### Browser does not open the site

Make sure the dev server is running and open the URL shown in the terminal.

Usually:

```text
http://127.0.0.1:5173/
```

### Image does not load

Check that this file exists:

```text
src/assets/hero-fitness.png
```

Also check that `src/main.ts` imports the correct filename.

### TypeScript build fails

Run:

```bash
npm run build
```

Read the TypeScript error message. Most errors will point to the exact file and line.

## Future Improvements

Possible next features:

- Add real login and signup pages
- Add workout detail pages
- Add trainer profiles
- Add exercise filtering by level or goal
- Add a contact form
- Add user dashboard page
- Add real progress data
- Add API backend
- Add animations
- Add dark mode
- Add blog or nutrition section

## Reference Websites

These websites were used only as general inspiration:

- https://www.cult.fit/
- https://fitonapp.com/
- https://www.hevyapp.com/

No content, branding, logo, or layout was copied from them.

## Current Status

The project has been created, dependencies were installed, and the production build has already passed successfully.

Last verified command:

```bash
npm run build
```
