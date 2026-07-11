import { howItWorks } from '../data';
import { joinHtml } from './html';

export const renderHowSection = () => `
  <section class="section how-section" id="how-it-works" aria-labelledby="how-title">
    <div class="section-heading">
      <p class="eyebrow">How it works</p>
      <h2 id="how-title">Plan, track, adjust, repeat.</h2>
    </div>
    <div class="steps-grid">
      ${joinHtml(
        howItWorks,
        (step, index) => `
          <article class="step-card">
            <span>0${index + 1}</span>
            <h3>${step.title}</h3>
            <p>${step.copy}</p>
          </article>
        `,
      )}
    </div>
  </section>
`;
