import { faqs } from '../data';
import { joinHtml } from './html';

export const renderFaqSection = () => `
  <section class="section faq-section" id="faq" aria-labelledby="faq-title">
    <div class="section-heading">
      <p class="eyebrow">Q&A</p>
      <h2 id="faq-title">Common questions before starting.</h2>
    </div>
    <div class="faq-list">
      ${joinHtml(
        faqs,
        (faq, index) => `
          <details ${index === 0 ? 'open' : ''}>
            <summary>${faq.question}</summary>
            <p>${faq.answer}</p>
          </details>
        `,
      )}
    </div>
  </section>
`;
