import { articleLinks, equipmentLinks } from '../data';
import { joinHtml } from './html';

export const renderHeader = () => `
  <header class="site-header" aria-label="Main navigation">
    <a class="brand" href="#top" aria-label="Repo Fitness home">
      <span class="brand-mark" aria-hidden="true">TF</span>
      <span>Repo Fitness</span>
    </a>

    <nav class="nav-links" aria-label="Site links">
      <a href="#app">App</a>
      <a href="#ai-lab">AI Lab</a>
      <a href="#fiton-courses">Courses</a>
      <div class="nav-item">
        <button class="nav-trigger" type="button">Articles</button>
        <div class="dropdown article-menu">
          ${joinHtml(
            articleLinks,
            (item) => `
              <a href="${item.href}">
                <strong>${item.label}</strong>
                <span>${item.copy}</span>
              </a>
            `,
          )}
        </div>
      </div>
      <a href="#trainers">Trainers</a>
      <a href="#classes">Classes</a>
      <a href="#gym-logger">Logger</a>
      <a href="#meal-ai">Meal AI</a>
      <div class="nav-item">
        <button class="nav-trigger" type="button">Equipment</button>
        <div class="dropdown equipment-menu">
          ${joinHtml(
            equipmentLinks,
            (item) => `
              <a href="${item.href}">
                <img src="${item.image}" alt="" loading="lazy">
                <span>
                  <strong>${item.label}</strong>
                  <small>${item.copy}</small>
                </span>
              </a>
            `,
          )}
        </div>
      </div>
      <a href="#faq">Q&A</a>
    </nav>

    <a class="header-cta" href="#coach">Meet Coach</a>
  </header>
`;
