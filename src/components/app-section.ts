import { appMetrics } from '../data';
import { joinHtml } from './html';

const qrCells = () =>
  Array.from(
    { length: 49 },
    (_, index) => `<span class="${index % 3 === 0 || index % 8 === 0 ? 'is-dark' : ''}"></span>`,
  ).join('');

export const renderAppSection = () => `
  <section class="section app-section" id="app" aria-labelledby="app-title">
    <div class="section-heading">
      <p class="eyebrow">App advertisement</p>
      <h2 id="app-title">A wearable-style dashboard without the noise.</h2>
    </div>
    <div class="app-layout">
      <div class="phone-shell" aria-label="Fitness app preview">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <span class="phone-label">Readiness</span>
          <strong>91</strong>
          <div class="ring" aria-hidden="true"></div>
          <div class="metric-list">
            ${joinHtml(
              appMetrics,
              (metric) => `
                <span>
                  <b>${metric.value}</b>
                  ${metric.label}
                </span>
              `,
            )}
          </div>
        </div>
      </div>
      <div class="app-copy">
        <p>
          Promote the app with live-feeling recovery, sleep, strain, and workout
          metrics. The layout mirrors performance dashboards while keeping the
          action focused on joining and scanning.
        </p>
        <div class="qr-promo" aria-label="Scan code to get the app">
          <div class="qr-code" aria-hidden="true">${qrCells()}</div>
          <div>
            <strong>Scan to unlock a 7-day starter plan</strong>
            <span>Workouts, meal logging, reminders, and coach notes.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
