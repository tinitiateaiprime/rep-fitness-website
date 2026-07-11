import { footerGroups } from '../data';
import { joinHtml } from './html';

export const renderFooter = () => `
  <footer class="site-footer">
    <div class="footer-brand">
      <a class="brand" href="#top" aria-label="Tinitiate Fitness home">
        <span class="brand-mark" aria-hidden="true">TF</span>
        <span>Tinitiate Fitness</span>
      </a>
      <p>Fitness plans, app tracking, coach videos, guides, and community support.</p>
    </div>
    <div class="footer-grid">
      ${joinHtml(
        footerGroups,
        (group) => `
          <div>
            <h3>${group.title}</h3>
            ${joinHtml(group.links, (link) => `<a href="#top">${link}</a>`)}
          </div>
        `,
      )}
    </div>
    <div class="footer-bottom">
      <span>Built for Tinitiate Fitness</span>
      <a href="mailto:hello@tinitiatefitness.example">hello@tinitiatefitness.example</a>
    </div>
  </footer>
`;
