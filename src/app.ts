import { renderAiLabSection } from './components/ai-lab-section';
import { renderAnglesSection } from './components/angles-section';
import { renderAppSection } from './components/app-section';
import { renderClassesSection } from './components/classes-section';
import { renderCoachSection } from './components/coach-section';
import { renderCoursesSection } from './components/courses-section';
import { renderFaqSection } from './components/faq-section';
import { renderFooter } from './components/footer';
import { renderFormVisionSection } from './components/form-vision-section';
import { renderGuidesSection } from './components/guides-section';
import { renderGymLoggerSection } from './components/gym-logger-section';
import { renderHeader } from './components/header';
import { renderHero, renderStatsStrip } from './components/hero';
import { renderHowSection } from './components/how-section';
import { renderMealAiSection } from './components/meal-ai-section';
import { renderRecoveryAgentSection } from './components/recovery-agent-section';
import { renderTrainersSection } from './components/trainers-section';
import { renderTransformationSection } from './components/transformation-section';

const renderMain = (heroImage: string) => `
  <main id="top">
    ${renderHero(heroImage)}
    ${renderStatsStrip()}
    ${renderAppSection()}
    ${renderCoursesSection()}
    ${renderAiLabSection()}
    ${renderTrainersSection()}
    ${renderFormVisionSection()}
    ${renderHowSection()}
    ${renderClassesSection()}
    ${renderGymLoggerSection()}
    ${renderMealAiSection()}
    ${renderAnglesSection()}
    ${renderTransformationSection()}
    ${renderGuidesSection()}
    ${renderRecoveryAgentSection()}
    ${renderCoachSection()}
    ${renderFaqSection()}
  </main>
`;

export const renderPage = (heroImage: string) => `
  ${renderHeader()}
  ${renderMain(heroImage)}
  ${renderFooter()}
`;

export const mountApp = (heroImage: string) => {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) {
    throw new Error('App root not found');
  }

  app.innerHTML = renderPage(heroImage);
};
