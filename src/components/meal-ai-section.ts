import { mealInsights } from '../data';
import { joinHtml } from './html';

export const renderMealAiSection = () => `
  <section class="section meal-ai-section" id="meal-ai" aria-labelledby="meal-ai-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">Meal lens</p>
        <h2 id="meal-ai-title">Scan a plate and turn it into a training decision.</h2>
      </div>
      <span class="library-total">Photo to macros</span>
    </div>
    <div class="meal-layout">
      <div class="meal-camera" aria-label="AI meal scanner preview">
        <div class="plate" aria-hidden="true">
          <span class="protein"></span>
          <span class="greens"></span>
          <span class="carbs"></span>
          <span class="sauce"></span>
        </div>
        <b class="meal-scan-line" aria-hidden="true"></b>
        <div class="macro-strip">
          <span>Protein 38g</span>
          <span>Fiber 9g</span>
          <span>Hydration +600ml</span>
        </div>
      </div>
      <div class="meal-insights">
        ${joinHtml(
          mealInsights,
          (item) => `
            <article>
              <span>${item.label}</span>
              <strong>${item.value}</strong>
              <p>${item.copy}</p>
            </article>
          `,
        )}
      </div>
    </div>
  </section>
`;
