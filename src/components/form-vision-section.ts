import { formMetrics } from '../data';
import { joinHtml } from './html';

export const renderFormVisionSection = () => `
  <section class="section form-vision-section" id="form-vision" aria-labelledby="form-vision-title">
    <div class="form-vision-layout">
      <div class="vision-panel" aria-label="AI form correction preview">
        <div class="pose-frame">
          <span class="joint head"></span>
          <span class="joint shoulder"></span>
          <span class="joint hip"></span>
          <span class="joint knee"></span>
          <span class="joint ankle"></span>
          <i class="limb torso"></i>
          <i class="limb thigh"></i>
          <i class="limb shin"></i>
          <b class="scan-line"></b>
        </div>
        <div class="vision-note">
          <strong>Form score 92</strong>
          <span>Slow the eccentric by 0.5 sec and keep pressure through mid-foot.</span>
        </div>
      </div>
      <div class="form-copy">
        <p class="eyebrow">AI form correction</p>
        <h2 id="form-vision-title">A camera coach for safer reps.</h2>
        <p>
          The form lab adds real-time movement feedback for squats, hinges,
          presses, rows, cycling posture, and mobility flows.
        </p>
        <div class="form-metrics">
          ${joinHtml(
            formMetrics,
            (metric) => `
              <article>
                <span>${metric.label}</span>
                <strong>${metric.value}</strong>
                <small>${metric.status}</small>
              </article>
            `,
          )}
        </div>
      </div>
    </div>
  </section>
`;
