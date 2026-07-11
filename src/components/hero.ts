import { videoTiles } from '../data';
import { joinHtml } from './html';

export const renderHero = (heroImage: string) => `
  <section class="hero" style="--hero-image: url('${heroImage}')">
    <div class="hero-media" aria-hidden="true">
      <div class="scanner-wall">
        ${joinHtml(videoTiles, (tile) => `<div class="video-tile"><span>${tile}</span><i></i></div>`)}
      </div>
      <div class="scanner-frame">
        <span></span>
      </div>
    </div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p class="eyebrow">Fitness app, coaching, and workout library</p>
      <h1>Train smarter every day.</h1>
      <p class="hero-copy">
        Guided workouts, recovery-aware planning, meal tracking, trainer videos,
        and equipment-based programs in one fitness experience.
      </p>
      <div class="hero-actions" aria-label="Primary actions">
        <a class="button button-primary" href="#how-it-works">Start your plan</a>
        <a class="button button-secondary" href="#classes">Explore classes</a>
      </div>
    </div>
    <aside class="hero-panel" aria-label="Today's workout summary">
      <span class="panel-label">Today</span>
      <strong>Full body strength</strong>
      <span>35 min - 8 exercises - dumbbells</span>
      <div class="progress-bar" aria-hidden="true"><span></span></div>
    </aside>
  </section>
`;

export const renderStatsStrip = () => `
  <section class="stats-strip" aria-label="Program highlights">
    <div class="stat-item">
      <strong>1,000+</strong>
      <span>guided workouts</span>
    </div>
    <div class="stat-item">
      <strong>15+</strong>
      <span>training disciplines</span>
    </div>
    <div class="stat-item">
      <strong>24/7</strong>
      <span>app insights</span>
    </div>
    <div class="stat-item">
      <strong>5-45</strong>
      <span>minute sessions</span>
    </div>
  </section>
`;
