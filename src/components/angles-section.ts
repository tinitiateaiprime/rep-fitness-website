import { angleCards } from '../data';
import { joinHtml } from './html';

export const renderAnglesSection = () => `
  <section class="section angles-section" id="articles" aria-labelledby="angles-title">
    <div class="angle-copy">
      <p class="eyebrow">Exercise angles</p>
      <h2 id="angles-title">Form checks from every useful view.</h2>
      <p>
        Keep the exercise library practical with camera angles, set notes,
        recovery signals, and simple article paths for training, cardio, and product updates.
      </p>
    </div>
    <div class="angle-grid">
      ${joinHtml(
        angleCards,
        (card, index) => `
          <article class="angle-card">
            <div class="angle-visual angle-${index + 1}" aria-hidden="true">
              <span></span>
              <i></i>
            </div>
            <h3>${card.title}</h3>
            <p>${card.copy}</p>
          </article>
        `,
      )}
    </div>
  </section>
`;
