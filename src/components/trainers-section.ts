import { trainers } from '../data';
import { joinHtml } from './html';

export const renderTrainersSection = () => `
  <section class="section trainers-section" id="trainers" aria-labelledby="trainers-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">Trainer team</p>
        <h2 id="trainers-title">Scroll through coaches for every training style.</h2>
      </div>
      <a class="text-link" href="#coach">Say hello</a>
    </div>
    <div class="trainer-rail" aria-label="Trainer carousel">
      ${joinHtml(
        trainers,
        (trainer) => `
          <article class="trainer-card">
            <img src="${trainer.image}" alt="${trainer.name}, ${trainer.role}" loading="lazy">
            <div>
              <span>${trainer.role}</span>
              <h3>${trainer.name}</h3>
              <p>${trainer.bio}</p>
            </div>
          </article>
        `,
      )}
    </div>
  </section>
`;
