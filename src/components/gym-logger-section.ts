import { deviceModes, loggerFeatures, progressStats, setTypes } from '../data';
import { joinHtml } from './html';

export const renderGymLoggerSection = () => `
  <section class="section gym-logger-section" id="gym-logger" aria-labelledby="gym-logger-title">
    <div class="logger-copy">
      <p class="eyebrow">Gym logger and planner</p>
      <h2 id="gym-logger-title">Log workouts, measure strength, and plan the next routine.</h2>
      <p>
        A Hevy-style strength tracker gives serious lifters the practical pieces:
        set labels, rest timers, personal records, wearable logging, and desktop planning.
      </p>
    </div>
    <div class="logger-layout">
      <div class="workout-log-phone" aria-label="Workout logging preview">
        <div class="log-header"><span>Push day</span><strong>42:18</strong></div>
        <div class="set-type-row">${joinHtml(setTypes, (type) => `<span>${type}</span>`)}</div>
        <div class="set-table">
          <span>Bench press</span><b>80kg x 8</b><i>PR</i>
          <span>Incline DB</span><b>28kg x 10</b><i>RPE 8</i>
          <span>Triceps rope</span><b>32kg x 12</b><i>Drop</i>
        </div>
        <div class="rest-timer" aria-label="Rest timer"><span></span>Rest 01:25</div>
      </div>
      <div class="logger-feature-grid">
        ${joinHtml(
          loggerFeatures,
          (feature) => `
            <article>
              <h3>${feature.title}</h3>
              <p>${feature.copy}</p>
            </article>
          `,
        )}
      </div>
    </div>
    <div class="progress-device-row">
      <div class="progress-stat-row">
        ${joinHtml(
          progressStats,
          (stat) => `
            <span>
              <b>${stat.value}</b>
              ${stat.label}
            </span>
          `,
        )}
      </div>
      <div class="device-mode-row">${joinHtml(deviceModes, (mode) => `<span>${mode}</span>`)}</div>
    </div>
  </section>
`;
