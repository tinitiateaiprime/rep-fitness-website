import { wellnessCourses, wellnessPillars } from '../data';
import { joinHtml } from './html';

export const renderCoursesSection = () => `
  <section class="section fiton-courses-section" id="fiton-courses" aria-labelledby="fiton-courses-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">Guided wellness courses</p>
        <h2 id="fiton-courses-title">Course paths for fitness, mindfulness, nutrition, and motivation.</h2>
      </div>
      <span class="course-badge">15M+ style community</span>
    </div>
    <div class="fiton-layout">
      <div class="course-stack" aria-label="Featured wellness courses">
        ${joinHtml(
          wellnessCourses,
          (course, index) => `
            <article class="course-card course-card-${index + 1}">
              <span>${course.focus}</span>
              <h3>${course.title}</h3>
              <p>${course.copy}</p>
              <strong>${course.duration}</strong>
            </article>
          `,
        )}
      </div>
      <div class="wellness-pillar-grid">
        ${joinHtml(
          wellnessPillars,
          (pillar) => `
            <article class="pillar-card">
              <h3>${pillar.title}</h3>
              <p>${pillar.copy}</p>
            </article>
          `,
        )}
      </div>
    </div>
    <div class="challenge-band" aria-label="Friend challenge preview">
      <div>
        <span>Friend challenge</span>
        <strong>7-day movement streak</strong>
      </div>
      <div class="challenge-avatars" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
      <p>Invite friends, complete short workouts, and unlock group milestones together.</p>
    </div>
  </section>
`;
