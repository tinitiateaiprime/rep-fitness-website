import { guides } from '../data';
import { joinHtml } from './html';

export const renderGuidesSection = () => `
  <section class="section guides-section" aria-labelledby="guides-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">Training guides</p>
        <h2 id="guides-title">Explore specialized training guides.</h2>
      </div>
      <a class="text-link" href="#faq">Open Q&A</a>
    </div>
    <div class="guide-grid">
      ${joinHtml(
        guides,
        (guide) => `
          <article class="guide-card">
            <span>${guide.level}</span>
            <h3>${guide.title}</h3>
            <p>${guide.copy}</p>
          </article>
        `,
      )}
    </div>
  </section>
`;
