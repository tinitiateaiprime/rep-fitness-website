(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const N="/assets/hero-fitness-Dru9kjEU.png",v=e=>`data:image/svg+xml,${encodeURIComponent(e)}`,c=(e,t,s)=>v(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 440">
      <rect width="360" height="440" fill="${e}"/>
      <circle cx="180" cy="130" r="70" fill="#f0ba8f"/>
      <path d="M104 143c5-74 48-102 90-96 48 7 76 44 68 112-33-16-69-22-158-16z" fill="${s}"/>
      <path d="M76 420c13-108 57-167 104-167s91 59 104 167H76z" fill="${t}"/>
      <path d="M118 319c31 30 94 30 125 0" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" opacity=".7"/>
    </svg>
  `),d=e=>v(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240">
      <rect width="320" height="240" rx="24" fill="#f2f5ee"/>
      <path d="M0 211c65-27 120-32 184-12 49 16 89 12 136-9v50H0z" fill="#dce9de"/>
      ${{bike:'<circle cx="94" cy="146" r="39" fill="none" stroke="#0f1720" stroke-width="14"/><circle cx="230" cy="146" r="39" fill="none" stroke="#0f1720" stroke-width="14"/><path d="M94 146h62l34-62h-58l24 62 43-42" fill="none" stroke="#0f1720" stroke-width="14" stroke-linejoin="round" stroke-linecap="round"/><path d="M190 84h36" stroke="#e6533f" stroke-width="13" stroke-linecap="round"/>',tread:'<path d="M57 161h194c22 0 35 18 26 34H84c-26 0-43-11-47-26 4-5 10-8 20-8z" fill="#0f1720"/><path d="M229 158l-22-83h35l22 83" fill="none" stroke="#0f1720" stroke-width="15" stroke-linecap="round"/><rect x="192" y="48" width="70" height="42" rx="8" fill="#e6533f"/>',row:'<path d="M55 176h210" stroke="#0f1720" stroke-width="18" stroke-linecap="round"/><path d="M86 145h88l32 31" fill="none" stroke="#0f1720" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><circle cx="86" cy="176" r="22" fill="#e6533f"/><circle cx="244" cy="176" r="22" fill="#55b7a6"/>',dumbbell:'<path d="M72 122h176" stroke="#0f1720" stroke-width="24" stroke-linecap="round"/><rect x="40" y="87" width="45" height="92" rx="8" fill="#e6533f"/><rect x="235" y="87" width="45" height="92" rx="8" fill="#55b7a6"/><rect x="92" y="100" width="34" height="64" rx="8" fill="#0f1720"/><rect x="194" y="100" width="34" height="64" rx="8" fill="#0f1720"/>',mat:'<path d="M64 92h156c35 0 57 21 57 50s-22 50-57 50H64c22-26 22-74 0-100z" fill="#55b7a6"/><path d="M64 92c24 0 43 22 43 50s-19 50-43 50-43-22-43-50 19-50 43-50z" fill="#0f1720"/><path d="M147 122h70M147 160h70" stroke="#fff" stroke-width="10" stroke-linecap="round"/>'}[e]}
    </svg>
  `),w=e=>v(`
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
  `),E=[{label:"Training",href:"#articles",copy:"Strength plans, form cues, and progressive overload ideas."},{label:"Nutrition",href:"#how-it-works",copy:"Meal tracking, protein targets, and recovery basics."},{label:"Cardio",href:"#classes",copy:"Intervals, Zone 2 work, conditioning, and running plans."},{label:"Product",href:"#app",copy:"App updates, coaching tools, and member workflow notes."}],H=[{label:"Bike",href:"#classes",copy:"Cycling intervals and endurance rides.",image:d("bike")},{label:"Tread",href:"#classes",copy:"Run, walk, and incline workouts.",image:d("tread")},{label:"Row",href:"#classes",copy:"Full-body power with guided pacing.",image:d("row")},{label:"Dumbbells",href:"#classes",copy:"Strength blocks for home or gym.",image:d("dumbbell")},{label:"Mat",href:"#classes",copy:"Yoga, mobility, pilates, and core.",image:d("mat")}],L=[{name:"Maya Singh",role:"Strength coach",bio:"Measured reps, clean tempo, and calm coaching for heavy days.",image:c("#cdeee6","#111820","#19120e")},{name:"Andre Cole",role:"HIIT specialist",bio:"Short bursts, clear regressions, and conditioning that scales.",image:c("#f6d26f","#e6533f","#1b130f")},{name:"Elena Brooks",role:"Yoga and mobility",bio:"Flow sessions for recovery, breath, posture, and range.",image:c("#d8e6ff","#3956a3","#322019")},{name:"Ravi Mehta",role:"Cardio coach",bio:"Endurance, pacing, and practical plans for busy weeks.",image:c("#ffd6c9","#0f6b5f","#211511")},{name:"Nora Fields",role:"Nutrition guide",bio:"Simple food logs, balanced macros, and habits that last.",image:c("#e9e0ff","#5b3e91","#19120e")}],B=[{value:"91%",label:"recovery readiness"},{value:"7h 42m",label:"sleep target"},{value:"14.8",label:"strain score"}],k=[{title:"Adaptive plan generator",tag:"LLM + recovery",copy:"Rebuilds the next workout from readiness, soreness, schedule, and missed sessions.",signal:"Plan updated in 8 sec"},{title:"Computer vision form coach",tag:"Pose AI",copy:"Reads key movement angles and gives simple corrections while the set is still fresh.",signal:"Knee path improved"},{title:"Meal photo macro scan",tag:"Vision nutrition",copy:"Turns a plate photo into portions, protein estimates, hydration nudges, and grocery ideas.",signal:"Protein gap found"},{title:"AI accountability buddy",tag:"Agent support",copy:"Keeps the tone low-pressure with check-ins, swaps, reminders, and weekly reflection prompts.",signal:"Friday run moved"}],z=[{label:"Squat depth",value:"94%",status:"Good range"},{label:"Knee travel",value:"7 deg",status:"Aligned"},{label:"Tempo drift",value:"0.4s",status:"Steady"},{label:"Back angle",value:"82%",status:"Brace cue"}],D=[{label:"Protein estimate",value:"38g",copy:"Add yogurt or tofu if this is a heavy training day."},{label:"Carb timing",value:"62g",copy:"Best placed before intervals or after strength work."},{label:"Hydration cue",value:"+600ml",copy:"Recovery score suggests adding electrolytes today."}],W=[{label:"Sleep debt",value:"-42m"},{label:"HRV trend",value:"+6%"},{label:"Joint load",value:"High"},{label:"Stress tone",value:"Calm"}],j=[{from:"AI coach",copy:"Your legs look loaded. I swapped sprints for Zone 2 and kept upper body strength."},{from:"Training buddy",copy:"I can join the 20-minute core session at 6:30. Keep it simple today."},{from:"Nutrition agent",copy:"Dinner is low in protein. Want a 5-minute grocery list for tomorrow?"}],O=[{title:"Total Shred Reset",focus:"Strength + cardio",duration:"30 days",copy:"A progressive course with short classes, recovery days, and weekly trainer check-ins."},{title:"Mindful Energy",focus:"Yoga + meditation",duration:"14 days",copy:"Breath-led flows, sleep resets, and low-impact movement for stressful weeks."},{title:"Heart Smart Habits",focus:"Nutrition + walking",duration:"21 days",copy:"Meal-planning prompts, hydration goals, and steady cardio for long-term wellness."}],Y=[{title:"Fitness",copy:"No-equipment classes, strength blocks, cardio, pilates, and mobility."},{title:"Mindfulness",copy:"Meditation, stretch breaks, sleep wind-downs, and breath sessions."},{title:"Nutrition",copy:"Recipe ideas, meal plans, macro support, and grocery nudges."},{title:"Motivation",copy:"Friend challenges, streak rewards, group goals, and community wins."}],G=[{title:"Routine planner",copy:"Build gym days with supersets, warmups, drop sets, notes, and target RPE."},{title:"Set-by-set logging",copy:"Track weight, reps, rest, failure sets, and personal notes without leaving the workout."},{title:"Progress charts",copy:"See volume, estimated one-rep max, personal records, and exercise history."},{title:"Social routines",copy:"Save member routines, compare progress, react to workouts, and stay accountable."}],U=["Warmup","Working","Drop","Failure"],K=[{label:"Bench 1RM",value:"102kg"},{label:"Weekly volume",value:"18.4k"},{label:"Rest timer",value:"01:25"}],V=["Phone logger","Watch offline","Desktop planner"],J=[{title:"Choose your goal",copy:"Pick strength, fat loss, endurance, mobility, or a balanced weekly routine."},{title:"Log meals and movement",copy:"Track workouts, calories, macros, streaks, and personal bests in one clean view."},{title:"Get the next session",copy:"Your plan adapts around schedule, soreness, equipment, and recent progress."}],Q=[{name:"Strength",count:"320+",copy:"Dumbbells, machines, bodyweight, and progressive blocks."},{name:"HIIT",count:"190+",copy:"Intervals that balance effort, rest, and repeatable intensity."},{name:"Yoga",count:"160+",copy:"Mobility, recovery, breath, and flexibility sessions."},{name:"Cycling",count:"120+",copy:"Cadence rides, climbs, endurance, and power work."},{name:"Running",count:"140+",copy:"Treadmill, outdoor pace plans, and beginner run-walks."},{name:"Meditation",count:"80+",copy:"Cooldowns, sleep resets, and short focus sessions."}],Z=[{title:"HIIT guide",copy:"Timed intervals, warmups, cooldowns, and recovery rules for high-output days.",level:"All levels"},{title:"Functional training",copy:"Squat, hinge, push, pull, carry, and rotate with cleaner mechanics.",level:"Beginner"},{title:"Progressive overload",copy:"Add load, reps, sets, tempo, or density without jumping too fast.",level:"Intermediate"},{title:"Fat loss training",copy:"Pair sustainable conditioning with strength, steps, protein, and sleep.",level:"Balanced"}],_=[{title:"Front angle",copy:"Check knee path, shoulder height, grip width, and foot stance."},{title:"Side angle",copy:"Review spine position, hip depth, bar path, and tempo."},{title:"Top set",copy:"Compare your strongest set with the target rep range."},{title:"Recovery map",copy:"Use recent muscle load to decide what to train next."}],X=[{question:"Can beginners use the plans?",answer:"Yes. Every workout includes beginner targets, lighter alternatives, and simple progress rules."},{question:"Can I train without equipment?",answer:"Yes. Bodyweight, band, mat, and home dumbbell paths are included alongside gym plans."},{question:"Does nutrition tracking replace coaching?",answer:"No. It gives you a clearer picture of calories, protein, hydration, and habits so coaching decisions are easier."},{question:"How often does the plan change?",answer:"The weekly plan updates as you complete sessions, skip days, log recovery, or change equipment."}],ee=[{title:"Train",links:["Strength","Cardio","Yoga","Mobility"]},{title:"Tools",links:["Workout planner","Meal log","Progress chart","Coach chat"]},{title:"Company",links:["About","Stories","Careers","Press"]},{title:"Support",links:["Help center","Contact","Privacy","Terms"]}],te=["Strength","Yoga","HIIT","Run","Cycle","Core"],n=(e,t)=>e.map(t).join(""),se=()=>`
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
          ${n(k,e=>`
              <span>
                <b>${e.tag}</b>
                ${e.signal}
              </span>
            `)}
        </div>
      </div>
      <div class="ai-feature-grid">
        ${n(k,e=>`
            <article class="ai-feature-card">
              <span>${e.tag}</span>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
            </article>
          `)}
      </div>
    </div>
  </section>
`,ae=()=>`
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
      ${n(_,(e,t)=>`
          <article class="angle-card">
            <div class="angle-visual angle-${t+1}" aria-hidden="true">
              <span></span>
              <i></i>
            </div>
            <h3>${e.title}</h3>
            <p>${e.copy}</p>
          </article>
        `)}
    </div>
  </section>
`,ie=()=>Array.from({length:49},(e,t)=>`<span class="${t%3===0||t%8===0?"is-dark":""}"></span>`).join(""),ne=()=>`
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
            ${n(B,e=>`
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
          <div class="qr-code" aria-hidden="true">${ie()}</div>
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
`,oe=()=>`
  <section class="section classes-section" id="classes" aria-labelledby="classes-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">Workout library</p>
        <h2 id="classes-title">How many exercises do we provide?</h2>
      </div>
      <span class="library-total">1,010+ total sessions</span>
    </div>
    <div class="class-grid">
      ${n(Q,e=>`
          <article class="class-card">
            <strong>${e.count}</strong>
            <h3>${e.name}</h3>
            <p>${e.copy}</p>
          </article>
        `)}
    </div>
  </section>
`,re=()=>`
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
`,le=()=>`
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
        ${n(O,(e,t)=>`
            <article class="course-card course-card-${t+1}">
              <span>${e.focus}</span>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
              <strong>${e.duration}</strong>
            </article>
          `)}
      </div>
      <div class="wellness-pillar-grid">
        ${n(Y,e=>`
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
`,ce=()=>`
  <section class="section faq-section" id="faq" aria-labelledby="faq-title">
    <div class="section-heading">
      <p class="eyebrow">Q&A</p>
      <h2 id="faq-title">Common questions before starting.</h2>
    </div>
    <div class="faq-list">
      ${n(X,(e,t)=>`
          <details ${t===0?"open":""}>
            <summary>${e.question}</summary>
            <p>${e.answer}</p>
          </details>
        `)}
    </div>
  </section>
`,de=()=>`
  <footer class="site-footer">
    <div class="footer-brand">
      <a class="brand" href="#top" aria-label="Tinitiate Fitness home">
        <span class="brand-mark" aria-hidden="true">TF</span>
        <span>Tinitiate Fitness</span>
      </a>
      <p>Fitness plans, app tracking, coach videos, guides, and community support.</p>
    </div>
    <div class="footer-grid">
      ${n(ee,e=>`
          <div>
            <h3>${e.title}</h3>
            ${n(e.links,t=>`<a href="#top">${t}</a>`)}
          </div>
        `)}
    </div>
    <div class="footer-bottom">
      <span>Built for Tinitiate Fitness</span>
      <a href="mailto:hello@tinitiatefitness.example">hello@tinitiatefitness.example</a>
    </div>
  </footer>
`,pe=()=>`
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
          ${n(z,e=>`
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
`,ue=()=>`
  <section class="section guides-section" aria-labelledby="guides-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">Training guides</p>
        <h2 id="guides-title">Explore specialized training guides.</h2>
      </div>
      <a class="text-link" href="#faq">Open Q&A</a>
    </div>
    <div class="guide-grid">
      ${n(Z,e=>`
          <article class="guide-card">
            <span>${e.level}</span>
            <h3>${e.title}</h3>
            <p>${e.copy}</p>
          </article>
        `)}
    </div>
  </section>
`,he=()=>`
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
        <div class="set-type-row">${n(U,e=>`<span>${e}</span>`)}</div>
        <div class="set-table">
          <span>Bench press</span><b>80kg x 8</b><i>PR</i>
          <span>Incline DB</span><b>28kg x 10</b><i>RPE 8</i>
          <span>Triceps rope</span><b>32kg x 12</b><i>Drop</i>
        </div>
        <div class="rest-timer" aria-label="Rest timer"><span></span>Rest 01:25</div>
      </div>
      <div class="logger-feature-grid">
        ${n(G,e=>`
            <article>
              <h3>${e.title}</h3>
              <p>${e.copy}</p>
            </article>
          `)}
      </div>
    </div>
    <div class="progress-device-row">
      <div class="progress-stat-row">
        ${n(K,e=>`
            <span>
              <b>${e.value}</b>
              ${e.label}
            </span>
          `)}
      </div>
      <div class="device-mode-row">${n(V,e=>`<span>${e}</span>`)}</div>
    </div>
  </section>
`,ge=()=>`
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
          ${n(E,e=>`
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
          ${n(H,e=>`
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
`,ve=e=>`
  <section class="hero" style="--hero-image: url('${e}')">
    <div class="hero-media" aria-hidden="true">
      <div class="scanner-wall">
        ${n(te,t=>`<div class="video-tile"><span>${t}</span><i></i></div>`)}
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
`,fe=()=>`
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
`,me=()=>`
  <section class="section how-section" id="how-it-works" aria-labelledby="how-title">
    <div class="section-heading">
      <p class="eyebrow">How it works</p>
      <h2 id="how-title">Plan, track, adjust, repeat.</h2>
    </div>
    <div class="steps-grid">
      ${n(J,(e,t)=>`
          <article class="step-card">
            <span>0${t+1}</span>
            <h3>${e.title}</h3>
            <p>${e.copy}</p>
          </article>
        `)}
    </div>
  </section>
`,ye=()=>`
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
        ${n(D,e=>`
            <article>
              <span>${e.label}</span>
              <strong>${e.value}</strong>
              <p>${e.copy}</p>
            </article>
          `)}
      </div>
    </div>
  </section>
`,be=()=>`
  <section class="section recovery-agent-section" id="recovery-agent" aria-labelledby="recovery-agent-title">
    <div class="section-heading">
      <p class="eyebrow">Digital twin and agents</p>
      <h2 id="recovery-agent-title">Predict readiness, then let agents handle the tiny decisions.</h2>
    </div>
    <div class="recovery-agent-layout">
      <div class="digital-twin-card" aria-label="Digital recovery twin preview">
        <div class="twin-orbit" aria-hidden="true"><span></span><i></i></div>
        <div class="recovery-signal-grid">
          ${n(W,e=>`
              <span>
                <b>${e.value}</b>
                ${e.label}
              </span>
            `)}
        </div>
      </div>
      <div class="agent-chat" aria-label="AI accountability messages">
        ${n(j,e=>`
            <article>
              <span>${e.from}</span>
              <p>${e.copy}</p>
            </article>
          `)}
      </div>
    </div>
  </section>
`,we=()=>`
  <section class="section trainers-section" id="trainers" aria-labelledby="trainers-title">
    <div class="section-heading split-heading">
      <div>
        <p class="eyebrow">Trainer team</p>
        <h2 id="trainers-title">Scroll through coaches for every training style.</h2>
      </div>
      <a class="text-link" href="#coach">Say hello</a>
    </div>
    <div class="trainer-rail" aria-label="Trainer carousel">
      ${n(L,e=>`
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
`,ke=()=>`
  <section class="section transformation-section" aria-labelledby="transformation-title">
    <div class="section-heading">
      <p class="eyebrow">Before and after</p>
      <h2 id="transformation-title">Show the transformation story clearly.</h2>
    </div>
    <div class="comparison-layout">
      <div class="comparison" style="--reveal: 52%" aria-label="Before and after transformation comparison">
        <img src="${w("before")}" alt="Before gym transformation illustration" loading="lazy">
        <div class="comparison-after" data-comparison-after>
          <img src="${w("after")}" alt="After gym transformation illustration" loading="lazy">
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
`,$e=e=>`
  <main id="top">
    ${ve(e)}
    ${fe()}
    ${ne()}
    ${le()}
    ${se()}
    ${we()}
    ${pe()}
    ${me()}
    ${oe()}
    ${he()}
    ${ye()}
    ${ae()}
    ${ke()}
    ${ue()}
    ${be()}
    ${re()}
    ${ce()}
  </main>
`,xe=e=>`
  ${ge()}
  ${$e(e)}
  ${de()}
`,Se=e=>{const t=document.querySelector("#app");if(!t)throw new Error("App root not found");t.innerHTML=xe(e)},M="pulsefit.routineReminders",h=new Map;let $=!1;const f={water:{accent:"#0f6b5f",background:"#d8f4ee",body:"Hydration check: take a few steady sips.",label:"Water reminder",shortLabel:"WA"},standup:{accent:"#e6533f",background:"#ffe2dc",body:"Stand up, reset your posture, and move for a moment.",label:"Standup reminder",shortLabel:"ST"},stretch:{accent:"#5b3e91",background:"#efe8ff",body:"Loosen your shoulders, hips, and back.",label:"Stretch reminder",shortLabel:"SX"}},Me=e=>e==="water"||e==="standup"||e==="stretch",Ae=(e,t)=>{if(Me(e))return e;const s=t.toLowerCase();return s.includes("stand")?"standup":s.includes("stretch")?"stretch":"water"},Te=e=>e==="browser"?"browser":"pwa",Re=e=>e==="end"?"end":"start",x=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Ie=(e,t)=>{if(typeof t=="number")return Math.max(0,t);if(typeof e=="number")return Math.max(0,e);if(!e)return 0;const s=e.trim().toLowerCase().match(/^(\d+(?:\.\d+)?)\s*(s|sec|secs|second|seconds|m|min|mins|minute|minutes|h|hr|hrs|hour|hours)$/);if(!s)throw new Error(`Invalid reminder duration: ${e}`);const i=Number(s[1]),a=s[2];return a.startsWith("h")?i*3600:a.startsWith("m")&&a!=="ms"?i*60:i},A=e=>{if(e<60)return`${e} Secs`;if(e<3600){const s=e/60;return`${s} ${s===1?"Min":"Mins"}`}const t=e/3600;return`${t} ${t===1?"Hr":"Hrs"}`},T=(e,t,s,i)=>{const a=`
    <svg xmlns="http://www.w3.org/2000/svg" width="720" height="360" viewBox="0 0 720 360">
      <rect width="720" height="360" rx="32" fill="${i}" />
      <circle cx="116" cy="124" r="58" fill="${s}" opacity="0.18" />
      <circle cx="602" cy="255" r="86" fill="${s}" opacity="0.14" />
      <rect x="56" y="208" width="608" height="20" rx="10" fill="${s}" opacity="0.22" />
      <rect x="56" y="238" width="390" height="20" rx="10" fill="${s}" opacity="0.16" />
      <text x="56" y="138" fill="#101416" font-family="Arial, sans-serif" font-size="46" font-weight="800">${x(e)}</text>
      <text x="56" y="184" fill="#5b6467" font-family="Arial, sans-serif" font-size="24" font-weight="700">${x(t)}</text>
    </svg>
  `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(a)}`},Ce=e=>{const t=f[e];return T(t.shortLabel,t.label,t.accent,t.background)},qe=(e,t,s)=>{const i=f[t];return T(e,`${i.label} - ${A(s)}`,i.accent,i.background)},u=()=>{try{const e=localStorage.getItem(M),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}},m=e=>{localStorage.setItem(M,JSON.stringify(e))},y=e=>{window.clearTimeout(h.get(e)),h.delete(e)},Pe=e=>{y(e),m(u().filter(t=>t.id!==e))},R=e=>{const t=f[e.preset],s=e.trigger==="start"?"Started now":`Duration complete after ${A(e.durationSeconds)}`;return{badge:e.icon,body:`${t.body} ${s}.`,data:{reminderId:e.id,routineId:e.routineId},icon:e.icon,image:e.image,requireInteraction:!1,tag:`pulsefit-routine-${e.id}`}},I=()=>"Notification"in window?Notification.permission:"unsupported",C=async()=>{const e=I();return e==="granted"||e==="denied"||e==="unsupported"?e:Notification.requestPermission()},q=e=>{const t=new Notification(e.text,R(e));t.onclick=()=>window.focus()},Fe=async e=>{if(!("serviceWorker"in navigator)){q(e);return}await(await navigator.serviceWorker.ready).showNotification(e.text,R(e))},Ne=async e=>{I()==="granted"&&(e.channel==="pwa"?await Fe(e):q(e),Pe(e.id))},P=e=>{y(e.id);const t=Math.max(0,e.notifyAt-Date.now()),s=window.setTimeout(()=>{Ne(e)},t);h.set(e.id,s)},Ee=(e,t)=>{var l,b;const s=e.text.trim();if(!s)throw new Error("Routine reminder text is required.");const i=Ie(e.duration,e.durationSeconds),a=Ae(e.preset,s),o=Re(e.trigger),r=Date.now();return{channel:Te(e.channel??t.channel),createdAt:r,durationSeconds:i,icon:e.icon??Ce(a),id:e.id??((b=(l=globalThis.crypto)==null?void 0:l.randomUUID)==null?void 0:b.call(l))??`${r}-${Math.random().toString(16).slice(2)}`,image:e.image??qe(s,a,i),notifyAt:r+(o==="end"?i*1e3:0),preset:a,routineId:e.routineId,text:s,trigger:o}},F=()=>{u().forEach(e=>y(e.id)),m([])},g=async(e,t={})=>{const s=await C();if(s!=="granted")return{permission:s,reminders:[],scheduled:0};const i=t.replaceExisting??!0,a=e.map(o=>Ee(o,t));return i&&F(),m([...u(),...a]),a.forEach(P),{permission:s,reminders:a,scheduled:a.length}},S=()=>{const e=u();return e.forEach(P),e.length},He=async()=>{if("serviceWorker"in navigator)try{await navigator.serviceWorker.register("/notification-worker.js")}catch{}},Le=e=>{const t=e instanceof CustomEvent?e.detail:void 0;if(Array.isArray(t))return{options:{},reminders:t};if(t&&Array.isArray(t.reminders))return{options:{channel:t.channel,replaceExisting:t.replaceExisting},reminders:t.reminders}},Be=()=>{$||($=!0,S(),window.tinitiateNotifications={clearRoutineNotifications:F,requestPermission:C,restoreScheduledRoutineNotifications:S,setRoutineNotifications:g},window.addEventListener("routine-notifications:set",e=>{const t=Le(e);t&&g(t.reminders,t.options)}))},ze=()=>{const e=document.querySelector("[data-comparison-slider]"),t=document.querySelector("[data-comparison-after]"),s=document.querySelector(".comparison");e==null||e.addEventListener("input",()=>{const i=`${e.value}%`;s==null||s.style.setProperty("--reveal",i),t==null||t.style.setProperty("--reveal",i)})},p=(e,t)=>{const s=e.elements.namedItem(t);return s instanceof RadioNodeList?String(s.value):s instanceof HTMLInputElement||s instanceof HTMLSelectElement?s.value:""},De=()=>{const e=document.querySelector("[data-routine-form]"),t=document.querySelector("[data-routine-status]");!e||!t||e.addEventListener("submit",async s=>{s.preventDefault();const i=p(e,"text").trim(),a=p(e,"duration"),o=p(e,"preset"),r=p(e,"trigger");if(!i){t.textContent="Routine text is required.";return}t.textContent="Setting routine...";const l=await g([{duration:a,preset:o,text:i,trigger:r}],{channel:"pwa",replaceExisting:!0});if(l.permission!=="granted"){t.textContent=`Notification permission is ${l.permission}.`;return}t.textContent=r==="start"?`${i} routine set. Notification sent now.`:`${i} routine set. Notification scheduled after ${a}.`})};He();Se(N);ze();De();Be();
