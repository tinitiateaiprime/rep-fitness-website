import { classTypes } from '../data';
import { joinHtml } from './html';

export const renderClassesSection = () => `
  <section class="section classes-section" id="classes" aria-labelledby="classes-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">Workout library</p>
        <h2 id="classes-title">How many exercises do we provide?</h2>
      </div>
      <span class="library-total">1,010+ total sessions</span>
    </div>
    <div class="class-grid">
      ${joinHtml(
        classTypes,
        (item) => `
          <article class="class-card">
            <strong>${item.count}</strong>
            <h3>${item.name}</h3>
            <p>${item.copy}</p>
          </article>
        `,
      )}
    </div>
  </section>
`;
