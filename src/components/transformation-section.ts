import { transformationImage } from '../media';

export const renderTransformationSection = () => `
  <section class="section transformation-section" aria-labelledby="transformation-title">
    <div class="section-heading">
      <p class="eyebrow">Before and after</p>
      <h2 id="transformation-title">Show the transformation story clearly.</h2>
    </div>
    <div class="comparison-layout">
      <div class="comparison" style="--reveal: 52%" aria-label="Before and after transformation comparison">
        <img src="${transformationImage('before')}" alt="Before gym transformation illustration" loading="lazy">
        <div class="comparison-after" data-comparison-after>
          <img src="${transformationImage('after')}" alt="After gym transformation illustration" loading="lazy">
        </div>
        <span class="comparison-handle" aria-hidden="true"></span>
      </div>
      <div class="comparison-copy">
        <h3>Gundula, Patric, and every member get their own milestone view.</h3>
        <p>
          The section works as a testimonial block, progress proof, and a visual
          nudge toward starting the plan.
        </p>
        <label class="slider-label" for="comparison-slider">Transformation view</label>
        <input id="comparison-slider" data-comparison-slider type="range" min="8" max="92" value="52">
      </div>
    </div>
  </section>
`;
