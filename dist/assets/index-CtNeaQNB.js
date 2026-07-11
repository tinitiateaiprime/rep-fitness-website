(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(i){if(i.ep)return;i.ep=!0;const t=o(i);fetch(i.href,t)}})();const g="/assets/hero-fitness-Dru9kjEU.png",d=e=>`data:image/svg+xml,${encodeURIComponent(e)}`,r=(e,s,o)=>d(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 440">
      <rect width="360" height="440" fill="${e}"/>
      <circle cx="180" cy="130" r="70" fill="#f0ba8f"/>
      <path d="M104 143c5-74 48-102 90-96 48 7 76 44 68 112-33-16-69-22-158-16z" fill="${o}"/>
      <path d="M76 420c13-108 57-167 104-167s91 59 104 167H76z" fill="${s}"/>
      <path d="M118 319c31 30 94 30 125 0" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" opacity=".7"/>
    </svg>
  `),l=e=>d(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240">
      <rect width="320" height="240" rx="24" fill="#f2f5ee"/>
      <path d="M0 211c65-27 120-32 184-12 49 16 89 12 136-9v50H0z" fill="#dce9de"/>
      ${{bike:'<circle cx="94" cy="146" r="39" fill="none" stroke="#0f1720" stroke-width="14"/><circle cx="230" cy="146" r="39" fill="none" stroke="#0f1720" stroke-width="14"/><path d="M94 146h62l34-62h-58l24 62 43-42" fill="none" stroke="#0f1720" stroke-width="14" stroke-linejoin="round" stroke-linecap="round"/><path d="M190 84h36" stroke="#e6533f" stroke-width="13" stroke-linecap="round"/>',tread:'<path d="M57 161h194c22 0 35 18 26 34H84c-26 0-43-11-47-26 4-5 10-8 20-8z" fill="#0f1720"/><path d="M229 158l-22-83h35l22 83" fill="none" stroke="#0f1720" stroke-width="15" stroke-linecap="round"/><rect x="192" y="48" width="70" height="42" rx="8" fill="#e6533f"/>',row:'<path d="M55 176h210" stroke="#0f1720" stroke-width="18" stroke-linecap="round"/><path d="M86 145h88l32 31" fill="none" stroke="#0f1720" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><circle cx="86" cy="176" r="22" fill="#e6533f"/><circle cx="244" cy="176" r="22" fill="#55b7a6"/>',dumbbell:'<path d="M72 122h176" stroke="#0f1720" stroke-width="24" stroke-linecap="round"/><rect x="40" y="87" width="45" height="92" rx="8" fill="#e6533f"/><rect x="235" y="87" width="45" height="92" rx="8" fill="#55b7a6"/><rect x="92" y="100" width="34" height="64" rx="8" fill="#0f1720"/><rect x="194" y="100" width="34" height="64" rx="8" fill="#0f1720"/>',mat:'<path d="M64 92h156c35 0 57 21 57 50s-22 50-57 50H64c22-26 22-74 0-100z" fill="#55b7a6"/><path d="M64 92c24 0 43 22 43 50s-19 50-43 50-43-22-43-50 19-50 43-50z" fill="#0f1720"/><path d="M147 122h70M147 160h70" stroke="#fff" stroke-width="10" stroke-linecap="round"/>'}[e]}
    </svg>
  `),p=e=>d(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 620">
      <rect width="520" height="620" fill="${e==="before"?"#f5efe0":"#e5f4ec"}"/>
      <rect x="50" y="70" width="420" height="460" rx="8" fill="#ffffff" opacity=".58"/>
      <circle cx="260" cy="175" r="57" fill="#ce8f69"/>
      <path d="${e==="before"?"M177 302c15-64 50-94 83-94s68 30 83 94l25 137H152z":"M187 304c12-63 43-96 73-96s61 33 73 96l18 136H169z"}" fill="${e==="before"?"#51606f":"#e6533f"}"/>
      <path d="${e==="before"?"M155 316c-32 46-39 92-23 139M365 316c32 46 39 92 23 139":"M178 312c-40 34-58 77-54 130M342 312c40 34 58 77 54 130"}" fill="none" stroke="#ce8f69" stroke-width="30" stroke-linecap="round"/>
      <path d="${e==="before"?"M220 439l-18 107M300 439l18 107":"M231 438l-32 108M289 438l32 108"}" fill="none" stroke="#ce8f69" stroke-width="32" stroke-linecap="round"/>
      <path d="M197 164c12-62 119-66 130 0-28-25-76-30-130 0z" fill="#241b18"/>
      <text x="260" y="585" text-anchor="middle" font-family="Arial, sans-serif" font-size="38" font-weight="800" fill="#0f1720">${e==="before"?"BEFORE":"AFTER"}</text>
    </svg>
  `),v=[{label:"Training",href:"#articles",copy:"Strength plans, form cues, and progressive overload ideas."},{label:"Nutrition",href:"#how-it-works",copy:"Meal tracking, protein targets, and recovery basics."},{label:"Cardio",href:"#classes",copy:"Intervals, Zone 2 work, conditioning, and running plans."},{label:"Product",href:"#app",copy:"App updates, coaching tools, and member workflow notes."}],u=[{label:"Bike",href:"#classes",copy:"Cycling intervals and endurance rides.",image:l("bike")},{label:"Tread",href:"#classes",copy:"Run, walk, and incline workouts.",image:l("tread")},{label:"Row",href:"#classes",copy:"Full-body power with guided pacing.",image:l("row")},{label:"Dumbbells",href:"#classes",copy:"Strength blocks for home or gym.",image:l("dumbbell")},{label:"Mat",href:"#classes",copy:"Yoga, mobility, pilates, and core.",image:l("mat")}],m=[{name:"Maya Singh",role:"Strength coach",bio:"Measured reps, clean tempo, and calm coaching for heavy days.",image:r("#cdeee6","#111820","#19120e")},{name:"Andre Cole",role:"HIIT specialist",bio:"Short bursts, clear regressions, and conditioning that scales.",image:r("#f6d26f","#e6533f","#1b130f")},{name:"Elena Brooks",role:"Yoga and mobility",bio:"Flow sessions for recovery, breath, posture, and range.",image:r("#d8e6ff","#3956a3","#322019")},{name:"Ravi Mehta",role:"Cardio coach",bio:"Endurance, pacing, and practical plans for busy weeks.",image:r("#ffd6c9","#0f6b5f","#211511")},{name:"Nora Fields",role:"Nutrition guide",bio:"Simple food logs, balanced macros, and habits that last.",image:r("#e9e0ff","#5b3e91","#19120e")}],y=[{value:"91%",label:"recovery readiness"},{value:"7h 42m",label:"sleep target"},{value:"14.8",label:"strain score"}],h=[{title:"Adaptive plan generator",tag:"LLM + recovery",copy:"Rebuilds the next workout from readiness, soreness, schedule, and missed sessions.",signal:"Plan updated in 8 sec"},{title:"Computer vision form coach",tag:"Pose AI",copy:"Reads key movement angles and gives simple corrections while the set is still fresh.",signal:"Knee path improved"},{title:"Meal photo macro scan",tag:"Vision nutrition",copy:"Turns a plate photo into portions, protein estimates, hydration nudges, and grocery ideas.",signal:"Protein gap found"},{title:"AI accountability buddy",tag:"Agent support",copy:"Keeps the tone low-pressure with check-ins, swaps, reminders, and weekly reflection prompts.",signal:"Friday run moved"}],f=[{label:"Squat depth",value:"94%",status:"Good range"},{label:"Knee travel",value:"7 deg",status:"Aligned"},{label:"Tempo drift",value:"0.4s",status:"Steady"},{label:"Back angle",value:"82%",status:"Brace cue"}],b=[{label:"Protein estimate",value:"38g",copy:"Add yogurt or tofu if this is a heavy training day."},{label:"Carb timing",value:"62g",copy:"Best placed before intervals or after strength work."},{label:"Hydration cue",value:"+600ml",copy:"Recovery score suggests adding electrolytes today."}],w=[{label:"Sleep debt",value:"-42m"},{label:"HRV trend",value:"+6%"},{label:"Joint load",value:"High"},{label:"Stress tone",value:"Calm"}],k=[{from:"AI coach",copy:"Your legs look loaded. I swapped sprints for Zone 2 and kept upper body strength."},{from:"Training buddy",copy:"I can join the 20-minute core session at 6:30. Keep it simple today."},{from:"Nutrition agent",copy:"Dinner is low in protein. Want a 5-minute grocery list for tomorrow?"}],$=[{title:"Total Shred Reset",focus:"Strength + cardio",duration:"30 days",copy:"A progressive course with short classes, recovery days, and weekly trainer check-ins."},{title:"Mindful Energy",focus:"Yoga + meditation",duration:"14 days",copy:"Breath-led flows, sleep resets, and low-impact movement for stressful weeks."},{title:"Heart Smart Habits",focus:"Nutrition + walking",duration:"21 days",copy:"Meal-planning prompts, hydration goals, and steady cardio for long-term wellness."}],S=[{title:"Fitness",copy:"No-equipment classes, strength blocks, cardio, pilates, and mobility."},{title:"Mindfulness",copy:"Meditation, stretch breaks, sleep wind-downs, and breath sessions."},{title:"Nutrition",copy:"Recipe ideas, meal plans, macro support, and grocery nudges."},{title:"Motivation",copy:"Friend challenges, streak rewards, group goals, and community wins."}],M=[{title:"Routine planner",copy:"Build gym days with supersets, warmups, drop sets, notes, and target RPE."},{title:"Set-by-set logging",copy:"Track weight, reps, rest, failure sets, and personal notes without leaving the workout."},{title:"Progress charts",copy:"See volume, estimated one-rep max, personal records, and exercise history."},{title:"Social routines",copy:"Save member routines, compare progress, react to workouts, and stay accountable."}],x=["Warmup","Working","Drop","Failure"],T=[{label:"Bench 1RM",value:"102kg"},{label:"Weekly volume",value:"18.4k"},{label:"Rest timer",value:"01:25"}],A=["Phone logger","Watch offline","Desktop planner"],C=[{title:"Choose your goal",copy:"Pick strength, fat loss, endurance, mobility, or a balanced weekly routine."},{title:"Log meals and movement",copy:"Track workouts, calories, macros, streaks, and personal bests in one clean view."},{title:"Get the next session",copy:"Your plan adapts around schedule, soreness, equipment, and recent progress."}],q=[{name:"Strength",count:"320+",copy:"Dumbbells, machines, bodyweight, and progressive blocks."},{name:"HIIT",count:"190+",copy:"Intervals that balance effort, rest, and repeatable intensity."},{name:"Yoga",count:"160+",copy:"Mobility, recovery, breath, and flexibility sessions."},{name:"Cycling",count:"120+",copy:"Cadence rides, climbs, endurance, and power work."},{name:"Running",count:"140+",copy:"Treadmill, outdoor pace plans, and beginner run-walks."},{name:"Meditation",count:"80+",copy:"Cooldowns, sleep resets, and short focus sessions."}],F=[{title:"HIIT guide",copy:"Timed intervals, warmups, cooldowns, and recovery rules for high-output days.",level:"All levels"},{title:"Functional training",copy:"Squat, hinge, push, pull, carry, and rotate with cleaner mechanics.",level:"Beginner"},{title:"Progressive overload",copy:"Add load, reps, sets, tempo, or density without jumping too fast.",level:"Intermediate"},{title:"Fat loss training",copy:"Pair sustainable conditioning with strength, steps, protein, and sleep.",level:"Balanced"}],I=[{title:"Front angle",copy:"Check knee path, shoulder height, grip width, and foot stance."},{title:"Side angle",copy:"Review spine position, hip depth, bar path, and tempo."},{title:"Top set",copy:"Compare your strongest set with the target rep range."},{title:"Recovery map",copy:"Use recent muscle load to decide what to train next."}],P=[{question:"Can beginners use the plans?",answer:"Yes. Every workout includes beginner targets, lighter alternatives, and simple progress rules."},{question:"Can I train without equipment?",answer:"Yes. Bodyweight, band, mat, and home dumbbell paths are included alongside gym plans."},{question:"Does nutrition tracking replace coaching?",answer:"No. It gives you a clearer picture of calories, protein, hydration, and habits so coaching decisions are easier."},{question:"How often does the plan change?",answer:"The weekly plan updates as you complete sessions, skip days, log recovery, or change equipment."}],R=[{title:"Train",links:["Strength","Cardio","Yoga","Mobility"]},{title:"Tools",links:["Workout planner","Meal log","Progress chart","Coach chat"]},{title:"Company",links:["About","Stories","Careers","Press"]},{title:"Support",links:["Help center","Contact","Privacy","Terms"]}],H=["Strength","Yoga","HIIT","Run","Cycle","Core"],a=(e,s)=>e.map(s).join(""),B=()=>`
  <section class="section ai-lab-section" id="ai-lab" aria-labelledby="ai-lab-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">AI fitness 2026</p>
        <h2 id="ai-lab-title">One coach that reads form, recovery, food, and mood.</h2>
      </div>
      <span class="ai-year-pill">Multimodal coach</span>
    </div>
    <div class="ai-lab-layout">
      <div class="ai-console" aria-label="AI coach intelligence console">
        <span class="console-status">Live signals</span>
        <div class="ai-core" aria-hidden="true"><span></span><i></i></div>
        <div class="ai-signal-grid">
          ${a(h,e=>`
              <span>
                <b>${e.tag}</b>
                ${e.signal}
              </span>
            `)}
        </div>
      </div>
      <div class="ai-feature-grid">
        ${a(h,e=>`
            <article class="ai-feature-card">
              <span>${e.tag}</span>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
            </article>
          `)}
      </div>
    </div>
  </section>
`,L=()=>`
  <section class="section angles-section" id="articles" aria-labelledby="angles-title">
    <div class="angle-copy">
      <p class="eyebrow">Exercise angles</p>
      <h2 id="angles-title">Form checks from every useful view.</h2>
      <p>
        Keep the exercise library practical with camera angles, set notes,
        recovery signals, and simple article paths for training, cardio, and product updates.
      </p>
    </div>
    <div class="angle-grid">
      ${a(I,(e,s)=>`
          <article class="angle-card">
            <div class="angle-visual angle-${s+1}" aria-hidden="true">
              <span></span>
              <i></i>
            </div>
            <h3>${e.title}</h3>
            <p>${e.copy}</p>
          </article>
        `)}
    </div>
  </section>
`,E=()=>Array.from({length:49},(e,s)=>`<span class="${s%3===0||s%8===0?"is-dark":""}"></span>`).join(""),j=()=>`
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
            ${a(y,e=>`
                <span>
                  <b>${e.value}</b>
                  ${e.label}
                </span>
              `)}
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
          <div class="qr-code" aria-hidden="true">${E()}</div>
          <div>
            <strong>Scan to unlock a 7-day starter plan</strong>
            <span>Workouts, meal logging, reminders, and coach notes.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
`,z=()=>`
  <section class="section classes-section" id="classes" aria-labelledby="classes-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">Workout library</p>
        <h2 id="classes-title">How many exercises do we provide?</h2>
      </div>
      <span class="library-total">1,010+ total sessions</span>
    </div>
    <div class="class-grid">
      ${a(q,e=>`
          <article class="class-card">
            <strong>${e.count}</strong>
            <h3>${e.name}</h3>
            <p>${e.copy}</p>
          </article>
        `)}
    </div>
  </section>
`,D=()=>`
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
`,N=()=>`
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
        ${a($,(e,s)=>`
            <article class="course-card course-card-${s+1}">
              <span>${e.focus}</span>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
              <strong>${e.duration}</strong>
            </article>
          `)}
      </div>
      <div class="wellness-pillar-grid">
        ${a(S,e=>`
            <article class="pillar-card">
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
            </article>
          `)}
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
`,Y=()=>`
  <section class="section faq-section" id="faq" aria-labelledby="faq-title">
    <div class="section-heading">
      <p class="eyebrow">Q&A</p>
      <h2 id="faq-title">Common questions before starting.</h2>
    </div>
    <div class="faq-list">
      ${a(P,(e,s)=>`
          <details ${s===0?"open":""}>
            <summary>${e.question}</summary>
            <p>${e.answer}</p>
          </details>
        `)}
    </div>
  </section>
`,W=()=>`
  <footer class="site-footer">
    <div class="footer-brand">
      <a class="brand" href="#top" aria-label="Tinitiate Fitness home">
        <span class="brand-mark" aria-hidden="true">TF</span>
        <span>Tinitiate Fitness</span>
      </a>
      <p>Fitness plans, app tracking, coach videos, guides, and community support.</p>
    </div>
    <div class="footer-grid">
      ${a(R,e=>`
          <div>
            <h3>${e.title}</h3>
            ${a(e.links,s=>`<a href="#top">${s}</a>`)}
          </div>
        `)}
    </div>
    <div class="footer-bottom">
      <span>Built for Tinitiate Fitness</span>
      <a href="mailto:hello@tinitiatefitness.example">hello@tinitiatefitness.example</a>
    </div>
  </footer>
`,G=()=>`
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
          ${a(f,e=>`
              <article>
                <span>${e.label}</span>
                <strong>${e.value}</strong>
                <small>${e.status}</small>
              </article>
            `)}
        </div>
      </div>
    </div>
  </section>
`,O=()=>`
  <section class="section guides-section" aria-labelledby="guides-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">Training guides</p>
        <h2 id="guides-title">Explore specialized training guides.</h2>
      </div>
      <a class="text-link" href="#faq">Open Q&A</a>
    </div>
    <div class="guide-grid">
      ${a(F,e=>`
          <article class="guide-card">
            <span>${e.level}</span>
            <h3>${e.title}</h3>
            <p>${e.copy}</p>
          </article>
        `)}
    </div>
  </section>
`,K=()=>`
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
        <div class="set-type-row">${a(x,e=>`<span>${e}</span>`)}</div>
        <div class="set-table">
          <span>Bench press</span><b>80kg x 8</b><i>PR</i>
          <span>Incline DB</span><b>28kg x 10</b><i>RPE 8</i>
          <span>Triceps rope</span><b>32kg x 12</b><i>Drop</i>
        </div>
        <div class="rest-timer" aria-label="Rest timer"><span></span>Rest 01:25</div>
      </div>
      <div class="logger-feature-grid">
        ${a(M,e=>`
            <article>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
            </article>
          `)}
      </div>
    </div>
    <div class="progress-device-row">
      <div class="progress-stat-row">
        ${a(T,e=>`
            <span>
              <b>${e.value}</b>
              ${e.label}
            </span>
          `)}
      </div>
      <div class="device-mode-row">${a(A,e=>`<span>${e}</span>`)}</div>
    </div>
  </section>
`,Q=()=>`
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
          ${a(v,e=>`
              <a href="${e.href}">
                <strong>${e.label}</strong>
                <span>${e.copy}</span>
              </a>
            `)}
        </div>
      </div>
      <a href="#trainers">Trainers</a>
      <a href="#classes">Classes</a>
      <a href="#gym-logger">Logger</a>
      <a href="#meal-ai">Meal AI</a>
      <div class="nav-item">
        <button class="nav-trigger" type="button">Equipment</button>
        <div class="dropdown equipment-menu">
          ${a(u,e=>`
              <a href="${e.href}">
                <img src="${e.image}" alt="" loading="lazy">
                <span>
                  <strong>${e.label}</strong>
                  <small>${e.copy}</small>
                </span>
              </a>
            `)}
        </div>
      </div>
      <a href="#faq">Q&A</a>
    </nav>

    <a class="header-cta" href="#coach">Meet Coach</a>
  </header>
`,U=e=>`
  <section class="hero" style="--hero-image: url('${e}')">
    <div class="hero-media" aria-hidden="true">
      <div class="scanner-wall">
        ${a(H,s=>`<div class="video-tile"><span>${s}</span><i></i></div>`)}
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
`,V=()=>`
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
`,Z=()=>`
  <section class="section how-section" id="how-it-works" aria-labelledby="how-title">
    <div class="section-heading">
      <p class="eyebrow">How it works</p>
      <h2 id="how-title">Plan, track, adjust, repeat.</h2>
    </div>
    <div class="steps-grid">
      ${a(C,(e,s)=>`
          <article class="step-card">
            <span>0${s+1}</span>
            <h3>${e.title}</h3>
            <p>${e.copy}</p>
          </article>
        `)}
    </div>
  </section>
`,J=()=>`
  <section class="section meal-ai-section" id="meal-ai" aria-labelledby="meal-ai-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">Meal lens</p>
        <h2 id="meal-ai-title">Scan a plate and turn it into a training decision.</h2>
      </div>
      <span class="library-total">Photo to macros</span>
    </div>
    <div class="meal-layout">
      <div class="meal-camera" aria-label="AI meal scanner preview">
        <div class="plate" aria-hidden="true">
          <span class="protein"></span>
          <span class="greens"></span>
          <span class="carbs"></span>
          <span class="sauce"></span>
        </div>
        <b class="meal-scan-line" aria-hidden="true"></b>
        <div class="macro-strip">
          <span>Protein 38g</span>
          <span>Fiber 9g</span>
          <span>Hydration +600ml</span>
        </div>
      </div>
      <div class="meal-insights">
        ${a(b,e=>`
            <article>
              <span>${e.label}</span>
              <strong>${e.value}</strong>
              <p>${e.copy}</p>
            </article>
          `)}
      </div>
    </div>
  </section>
`,_=()=>`
  <section class="section recovery-agent-section" id="recovery-agent" aria-labelledby="recovery-agent-title">
    <div class="section-heading">
      <p class="eyebrow">Digital twin and agents</p>
      <h2 id="recovery-agent-title">Predict readiness, then let agents handle the tiny decisions.</h2>
    </div>
    <div class="recovery-agent-layout">
      <div class="digital-twin-card" aria-label="Digital recovery twin preview">
        <div class="twin-orbit" aria-hidden="true"><span></span><i></i></div>
        <div class="recovery-signal-grid">
          ${a(w,e=>`
              <span>
                <b>${e.value}</b>
                ${e.label}
              </span>
            `)}
        </div>
      </div>
      <div class="agent-chat" aria-label="AI accountability messages">
        ${a(k,e=>`
            <article>
              <span>${e.from}</span>
              <p>${e.copy}</p>
            </article>
          `)}
      </div>
    </div>
  </section>
`,X=()=>`
  <section class="section trainers-section" id="trainers" aria-labelledby="trainers-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">Trainer team</p>
        <h2 id="trainers-title">Scroll through coaches for every training style.</h2>
      </div>
      <a class="text-link" href="#coach">Say hello</a>
    </div>
    <div class="trainer-rail" aria-label="Trainer carousel">
      ${a(m,e=>`
          <article class="trainer-card">
            <img src="${e.image}" alt="${e.name}, ${e.role}" loading="lazy">
            <div>
              <span>${e.role}</span>
              <h3>${e.name}</h3>
              <p>${e.bio}</p>
            </div>
          </article>
        `)}
    </div>
  </section>
`,ee=()=>`
  <section class="section transformation-section" aria-labelledby="transformation-title">
    <div class="section-heading">
      <p class="eyebrow">Before and after</p>
      <h2 id="transformation-title">Show the transformation story clearly.</h2>
    </div>
    <div class="comparison-layout">
      <div class="comparison" style="--reveal: 52%" aria-label="Before and after transformation comparison">
        <img src="${p("before")}" alt="Before gym transformation illustration" loading="lazy">
        <div class="comparison-after" data-comparison-after>
          <img src="${p("after")}" alt="After gym transformation illustration" loading="lazy">
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
`,se=e=>`
  <main id="top">
    ${U(e)}
    ${V()}
    ${j()}
    ${N()}
    ${B()}
    ${X()}
    ${G()}
    ${Z()}
    ${z()}
    ${K()}
    ${J()}
    ${L()}
    ${ee()}
    ${O()}
    ${_()}
    ${D()}
    ${Y()}
  </main>
`,ae=e=>`
  ${Q()}
  ${se(e)}
  ${W()}
`,ie=e=>{const s=document.querySelector("#app");if(!s)throw new Error("App root not found");s.innerHTML=ae(e)},te=()=>{const e=document.querySelector("[data-comparison-slider]"),s=document.querySelector("[data-comparison-after]"),o=document.querySelector(".comparison");e==null||e.addEventListener("input",()=>{const n=`${e.value}%`;o==null||o.style.setProperty("--reveal",n),s==null||s.style.setProperty("--reveal",n)})};ie(g);te();
