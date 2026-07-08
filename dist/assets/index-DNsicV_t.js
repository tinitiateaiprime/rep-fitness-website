(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const l="/assets/hero-fitness-Dru9kjEU.png",c=[{value:"30+",label:"weekly classes"},{value:"12",label:"beginner plans"},{value:"24/7",label:"progress access"}],d=[{title:"Train anywhere",copy:"Short bodyweight, strength, yoga, and cardio sessions built for home or gym days."},{title:"Track the basics",copy:"Log workouts, streaks, calories burned, and personal bests without a complicated dashboard."},{title:"Stay consistent",copy:"Simple weekly plans, reminders, and milestone badges keep your routine moving."}],p=[{name:"Morning Mobility",duration:"18 min",level:"Beginner",focus:"Flexibility"},{name:"Full Body Strength",duration:"35 min",level:"Intermediate",focus:"Dumbbells"},{name:"Core Burn",duration:"22 min",level:"All levels",focus:"Abs"},{name:"Power HIIT",duration:"28 min",level:"Advanced",focus:"Cardio"}],u=[{name:"Starter",price:"Free",description:"For building your first weekly routine.",perks:["5 saved workouts","Basic progress log","Beginner plans"]},{name:"Plus",price:"$9/mo",description:"For tracking strength and staying accountable.",perks:["Unlimited routines","Progress charts","Weekly challenges"]}],n=document.querySelector("#app");if(!n)throw new Error("App root not found");n.innerHTML=`
  <header class="site-header" aria-label="Main navigation">
    <a class="brand" href="#top" aria-label="PulseFit home">
      <span class="brand-mark" aria-hidden="true">P</span>
      <span>PulseFit</span>
    </a>
    <nav class="nav-links" aria-label="Site links">
      <a href="#workouts">Workouts</a>
      <a href="#progress">Progress</a>
      <a href="#pricing">Pricing</a>
    </nav>
    <a class="header-cta" href="#pricing">Join Free</a>
  </header>

  <main id="top">
    <section class="hero" style="--hero-image: url('${l}')">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="eyebrow">Fitness, wellness, and workout tracking</p>
        <h1>PulseFit</h1>
        <p class="hero-copy">
          A clean, beginner-friendly fitness platform for home workouts, gym plans,
          and everyday progress tracking.
        </p>
        <div class="hero-actions" aria-label="Primary actions">
          <a class="button button-primary" href="#workouts">Start Training</a>
          <a class="button button-secondary" href="#progress">View Progress</a>
        </div>
      </div>
      <div class="hero-panel" aria-label="Today's workout summary">
        <span class="panel-label">Today</span>
        <strong>Full Body Strength</strong>
        <span>35 min • 8 exercises • dumbbells</span>
        <div class="progress-bar" aria-hidden="true"><span></span></div>
      </div>
    </section>

    <section class="stats-strip" aria-label="PulseFit highlights">
      ${c.map(e=>`
            <div class="stat-item">
              <strong>${e.value}</strong>
              <span>${e.label}</span>
            </div>
          `).join("")}
    </section>

    <section class="section feature-section" aria-labelledby="features-title">
      <div class="section-heading">
        <p class="eyebrow">Simple tools</p>
        <h2 id="features-title">Everything needed to begin</h2>
      </div>
      <div class="feature-grid">
        ${d.map((e,r)=>`
              <article class="feature-card">
                <span class="feature-number">0${r+1}</span>
                <h3>${e.title}</h3>
                <p>${e.copy}</p>
              </article>
            `).join("")}
      </div>
    </section>

    <section class="section workouts-section" id="workouts" aria-labelledby="workouts-title">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">Workout library</p>
          <h2 id="workouts-title">Pick a session and move</h2>
        </div>
        <a class="text-link" href="#pricing">Get weekly plans</a>
      </div>
      <div class="workout-grid">
        ${p.map(e=>`
              <article class="workout-card">
                <div>
                  <span class="tag">${e.level}</span>
                  <h3>${e.name}</h3>
                  <p>${e.focus}</p>
                </div>
                <strong>${e.duration}</strong>
              </article>
            `).join("")}
      </div>
    </section>

    <section class="section progress-section" id="progress" aria-labelledby="progress-title">
      <div class="progress-copy">
        <p class="eyebrow">Progress tracking</p>
        <h2 id="progress-title">See the habit taking shape</h2>
        <p>
          PulseFit keeps the dashboard focused: completed sessions, streaks,
          weekly volume, and personal bests are easy to scan after every workout.
        </p>
      </div>
      <div class="dashboard-preview" aria-label="Progress dashboard preview">
        <div class="dashboard-topline">
          <span>Weekly activity</span>
          <strong>82%</strong>
        </div>
        <div class="chart-bars" aria-hidden="true">
          <span style="height: 48%"></span>
          <span style="height: 72%"></span>
          <span style="height: 55%"></span>
          <span style="height: 88%"></span>
          <span style="height: 64%"></span>
          <span style="height: 96%"></span>
          <span style="height: 78%"></span>
        </div>
        <div class="dashboard-metrics">
          <span><strong>14</strong> workouts</span>
          <span><strong>6</strong> day streak</span>
          <span><strong>3</strong> new bests</span>
        </div>
      </div>
    </section>

    <section class="section pricing-section" id="pricing" aria-labelledby="pricing-title">
      <div class="section-heading">
        <p class="eyebrow">Membership</p>
        <h2 id="pricing-title">Start small, upgrade when ready</h2>
      </div>
      <div class="pricing-grid">
        ${u.map(e=>`
              <article class="plan-card">
                <div>
                  <h3>${e.name}</h3>
                  <strong>${e.price}</strong>
                  <p>${e.description}</p>
                </div>
                <ul>
                  ${e.perks.map(r=>`<li>${r}</li>`).join("")}
                </ul>
                <a class="button ${e.name==="Plus"?"button-primary":"button-outline"}" href="mailto:hello@pulsefit.example">
                  Choose ${e.name}
                </a>
              </article>
            `).join("")}
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <span>PulseFit</span>
    <p>Basic fitness website built with TypeScript.</p>
  </footer>
`;
