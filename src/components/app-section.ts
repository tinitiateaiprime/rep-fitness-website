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
        <form class="routine-setter" data-routine-form>
          <div class="routine-setter-heading">
            <span>Routine setter</span>
            <strong>Set Routine</strong>
          </div>
          <label class="routine-field">
            <span>Routine text</span>
            <input name="text" type="text" value="Drink Water" maxlength="72" required />
          </label>
          <div class="routine-field-row">
            <label class="routine-field">
              <span>Duration</span>
              <select name="duration">
                <option value="30 Secs">30 Secs</option>
                <option value="1 Min" selected>1 Min</option>
                <option value="10 Mins">10 Mins</option>
                <option value="15 Mins">15 Mins</option>
                <option value="1 Hr">1 Hr</option>
              </select>
            </label>
            <label class="routine-field">
              <span>Preset</span>
              <select name="preset">
                <option value="water">Water</option>
                <option value="standup">Standup</option>
                <option value="stretch">Stretch</option>
              </select>
            </label>
          </div>
          <fieldset class="routine-trigger-group">
            <legend>Notify</legend>
            <label>
              <input type="radio" name="trigger" value="start" checked />
              <span>At start</span>
            </label>
            <label>
              <input type="radio" name="trigger" value="end" />
              <span>At end</span>
            </label>
          </fieldset>
          <button class="button button-primary" type="submit">Set Routine</button>
          <p class="routine-status" data-routine-status role="status">Routine notifications are ready.</p>
        </form>
      </div>
    </div>
  </section>
`;
