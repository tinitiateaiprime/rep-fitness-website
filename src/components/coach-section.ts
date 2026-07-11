export const renderCoachSection = () => `
  <section class="section coach-section" id="coach" aria-labelledby="coach-title">
    <div class="coach-copy">
      <p class="eyebrow">Personal coach</p>
      <h2 id="coach-title">Say hello to your fitness coach videos.</h2>
      <p>
        A coach check-in area can combine short video messages, weekly plan
        adjustments, and accountability notes.
      </p>
    </div>
    <div class="coach-video-stack" aria-label="Coach video messages">
      <article class="coach-video main-video">
        <span class="play-icon" aria-hidden="true"></span>
        <strong>Coach Andrew</strong>
        <p>Nice lift. Your recovery between sets is improving.</p>
      </article>
      <article class="coach-video small-video">
        <span class="play-icon" aria-hidden="true"></span>
        <strong>Mobility check</strong>
      </article>
      <article class="coach-message">
        <span>Today</span>
        <p>Swap heavy squats for goblet squats and keep Zone 2 work on Friday.</p>
      </article>
    </div>
  </section>
`;
