import { aiFeatures } from '../data';
import { joinHtml } from './html';

export const renderAiLabSection = () => `
  <section class="section ai-lab-section" id="ai-lab" aria-labelledby="ai-lab-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">AI fitness 2026</p>
        <h2 id="ai-lab-title">One coach that reads form, recovery, food, and mood.</h2>
      </div>
      <span class="ai-year-pill">Multimodal coach</span>
    </div>
    <div class="ai-lab-layout">
      <div class="ai-console" aria-label="AI coach intelligence console">
        <span class="console-status">Live signals</span>
        <div class="ai-core" aria-hidden="true"><span></span><i></i></div>
        <div class="ai-signal-grid">
          ${joinHtml(
            aiFeatures,
            (feature) => `
              <span>
                <b>${feature.tag}</b>
                ${feature.signal}
              </span>
            `,
          )}
        </div>
      </div>
      <div class="ai-feature-grid">
        ${joinHtml(
          aiFeatures,
          (feature) => `
            <article class="ai-feature-card">
              <span>${feature.tag}</span>
              <h3>${feature.title}</h3>
              <p>${feature.copy}</p>
            </article>
          `,
        )}
      </div>
    </div>
  </section>
`;
