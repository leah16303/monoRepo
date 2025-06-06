import{i as h,O as x,a as c,x as s,e as G,r as d,b as H,n as y,h as L,V as K,c as k,d as Q,_ as X,s as Z}from"./reset.css-B0Pr4NGF.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=a=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(a,t)}):customElements.define(a,t)};var V=Object.defineProperty,W=(a,t,e,i)=>{for(var r=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(r=n(t,e,r)||r);return r&&V(t,e,r),r};const I=class I extends h{constructor(){super(...arguments),this._authObserver=new x(this,"profile:auth"),this.loggedIn=!1}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;e&&e.authenticated?(this.loggedIn=!0,this.userid=e.username):(this.loggedIn=!1,this.userid=void 0)})}render(){return s`
    <header class="header">
      <h1>Health Planner</h1>
      <div class="header-bottom-row">
        <div class="user-info">
          ${this.loggedIn?s`<a>${this.userid}</a>`:s`<a>Guest</a>`}
          <svg class="profile-icon">
            <use href="/icons/all.svg#empty-profile"></use>
          </svg>
        </div>

        <div class="header-controls">
          ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}

          <label class="dark-mode-toggle">
            <input type="checkbox" id="dark-mode-toggle" autocomplete="off" />
            <p>Dark mode</p>
          </label>
        </div>
      </div>
    </header>
  `}renderSignOutButton(){return s`
    <button
      @click=${t=>{G.relay(t,"auth:message",["auth/signout"])}}
    >
      Sign Out
    </button>
  `}renderSignInButton(){return s`
    <a
      class="sign-in-btn"
      href="/login.html"
      @click=${t=>{t.preventDefault(),location.assign("/login.html")}}
      >Sign In</a
    >
  `}};I.styles=c`

  button, .sign-in-btn {
  padding: 0.5rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #8b2e2e; /* muted dark red */
  background: transparent;
  border: 2px solid #8b2e2e;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: none;
  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.15s ease;
  user-select: none;
  display: inline-block;
  text-align: center;
}

button:hover,
button:focus,
.sign-in-btn:hover,
.sign-in-btn:focus {
  background-color: rgba(139, 46, 46, 0.15); /* very light muted red */
  color: #5e1a1a; /* darker red on hover */
  box-shadow: 0 4px 12px rgba(139, 46, 46, 0.25);
  outline: none;
  transform: translateY(-1.5px);
}

button:active,
.sign-in-btn:active {
  transform: translateY(0);
  box-shadow: none;
  background-color: rgba(139, 46, 46, 0.25);
}




   .header-controls {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}


  header {
    font-family: var(--font-family-display);
    font-weight: var(--font-display-regular);
    color: var(--color-text);
   
  }

  .header {
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #ccc;
    padding-bottom: 0.5rem;
  
  }
  
  .header h1 {
    font-weight: var(--font-display-black);
    font-size: 3rem;
    color: var(--title-color);
    padding: var(--size-spacing-medium);
    border-radius: var(--size-radius-medium);
    margin: 0;
  }

    
  .user-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

    .header-bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem;
  }

 

    .dark-mode-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color : var(--dark-red);
  }

    svg.profile-icon {
    display: inline;
    height: 2em;
    width: 2em;
    vertical-align: top;
    fill: currentColor;
    font-size: 1rem;
    color: var(--dark-red);
  }

   `;let f=I;W([d()],f.prototype,"loggedIn");W([d()],f.prototype,"userid");var ee=Object.defineProperty,re=(a,t,e,i)=>{for(var r=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(r=n(t,e,r)||r);return r&&ee(t,e,r),r};const A=class A extends h{constructor(){super(...arguments),this._authObserver=new x(this,"profile:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;this.userid=e!=null&&e.authenticated?e.username:void 0})}render(){const t=new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"});return s`
      <div class="greeting">

      <p> Hello ${this.userid??"Guest"}! <p>
        
        <div class="date">${t}</div>
      </div>
    `}};A.styles=c`
    .greeting {
      padding: 1rem;
      font-size: 1.rem;
      color: var(--color-text);
    }

    .date {
      font-size: 1rem;
      color: var(--dark-black-text );;
    }
  `;let z=A;re([d()],z.prototype,"userid");var te=Object.defineProperty,ie=(a,t,e,i)=>{for(var r=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(r=n(t,e,r)||r);return r&&te(t,e,r),r};const D=class D extends h{render(){return s`
    <div class="card">
      <h2>${this.title}</h2>
      <div class="content">
        <!-- Your card content -->
      </div>
      
    </div>
  `}};D.styles=[H.styles,c`

    
      :host {
    display: block;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .card {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background-color: white;
  }

  .content {
    flex: 1;
    overflow: auto;
  }

.links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1; /* This makes the links section expand to fill available space */
  
  /* Add these properties to ensure uniform spacing */
  min-height: 120px; /* Minimum height for the links section */
  justify-content: flex-start; /* Align links to the top */
}

/* Optional: If you want to center the links when there's only one */
.links:has(::slotted(:only-child)) {
  justify-content: center;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .card {
    grid-column: span 6;
    padding: 1.5rem;
    min-height: 220px;
  }
  
  .links {
    min-height: 100px;
  }
}

@media (max-width: 600px) {
  .card {
    grid-column: span 12;
    padding: 1.25rem;
    min-height: 200px;
  }
  
  .links {
    min-height: 80px;
  }
}
    `];let _=D;ie([y({type:String})],_.prototype,"category");var ae=Object.defineProperty,q=(a,t,e,i)=>{for(var r=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(r=n(t,e,r)||r);return r&&ae(t,e,r),r};const T=class T extends h{constructor(){super(...arguments),this.loggedIn=!1,this._authObserver=new x(this,"profile:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;e!=null&&e.authenticated?(this.loggedIn=!0,this.userid=e.username):(this.loggedIn=!1,this.userid=void 0)})}render(){return!this.loggedIn||!this.userid?s`
        <section class="login-warning">
          <h1>Sign in to continue</h1>
          <p> click link below to sign in</p>
          ${this.renderSignInButton()}
        </section>
      `:s`
      <main class="main-grid">
        <health-planner-card class="card" category="Food">
          <a slot="link-1" class="card-link-food" href="/app/mealplan/${this.userid}">
            <svg class="icon"><use href="/icons/food.svg#mealplan" /></svg>
            Meal Plan
          </a>
          <a slot="link-2" class="card-link-food" href="/app/recipes/${this.userid}">
            <svg class="icon"><use href="/icons/food.svg#pot" /></svg>
            Recipes
          </a>
        </health-planner-card>

        <health-planner-card class="card" category="Fitness">
          <a slot="link-1" class="card-link-fitness" href="/app/workoutcalendar">
            <svg class="icon"><use href="/icons/fitness.svg#calendar" /></svg>
            Workout Calendar
          </a>
          <a slot="link-2" class="card-link-fitness" href="/app/exerciseoptions/${this.userid}">
            <svg class="icon"><use href="/icons/fitness.svg#weight" /></svg>
            Exercise Options
          </a>
        </health-planner-card>

        <health-planner-card class="card" category="Mental Health">
          <a slot="link-1" class="card-link" href="/app/journaling/${this.userid}">
            <svg class="icon"><use href="/icons/mental-health.svg#journal" /></svg>
            Journaling
          </a>
        </health-planner-card>
      </main>
    `}renderSignInButton(){return s`
      <a class="login-button" @click=${()=>location.assign("/login.html")}>
        Sign In
      </a>
    `}};T.styles=c`


health-planner-card {
  margin-left: -6%;
  grid-column: span 4; /* each card takes up 4 of 12 columns */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: var(--size-radius-medium);
  transition: transform 0.2s ease;
  background-color: #FFFFFF;
  background:#FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


    .login-button {
      display: inline-block;
      background: linear-gradient(135deg, var(--dark-red) 0%, var(--bright-red) 100%);
      color: white;
      padding: var(--size-spacing-large) var(--size-spacing-xlarge);
      border-radius: var(--size-radius-medium);
      text-decoration: none;
      font-family: var(--font-family-display);
      font-size: var(--size-type-large);
      font-weight: var(--font-display-bold);
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(115, 6, 12, 0.3);
      position: relative;
      overflow: hidden;
      cursor: pointer;
      border: none;
    }

    .login-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    .login-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(115, 6, 12, 0.4);
      background: linear-gradient(135deg, var(--bright-red) 0%, var(--dark-red) 100%);
    }

    .login-button:hover::before {
      left: 100%;
    }

    .login-button:active {
      transform: translateY(0);
    }

    .login-warning {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--color-card);
      min-height: 60vh;
      padding: var(--size-spacing-xlarge);
      border-radius: var(--size-radius-medium);
      box-shadow: 0 8px 32px rgba(115, 6, 12, 0.1);
      text-align: center;
      max-width: 500px;
      margin: var(--size-spacing-xlarge) auto;
      border: 1px solid rgba(115, 6, 12, 0.1);
    }

    .login-warning h1 {
      font-family: var(--font-family-display);
      font-size: var(--size-type-xxlarge);
      font-weight: var(--font-display-bold);
      color: var(--title-color);
      margin: 0 0 var(--size-spacing-medium) 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .login-warning p {
      font-family: var(--font-family-body);
      font-size: var(--size-type-mlarge);
      font-weight: var(--font-body-regular);
      color: var(--color-body-text);
      margin: 0 0 var(--size-spacing-xlarge) 0;
      opacity: 0.8;
      line-height: 1.5;
    }

    .card-link {
     height: 30%; 
      display: inline-block;
      background: #DCFCE7; /* Default green - for Mental Health */
      color: var(--color-text);
      padding: var(--size-spacing-large) var(--size-spacing-xlarge);
      border-radius: var(--size-radius-medium);
      text-decoration: none;
      font-family: var(--font-family-display);
      font-size: var(--size-type-large);
      font-weight: var(--font-display-bold);
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(115, 6, 12, 0.3);
      position: relative;
      overflow: hidden;
    }

    /* Food category links - Pink */
    .card-link-food {
      height: 30%; 
      display: inline-block;
      background: #FFE2E5;
      color: var(--color-text);
      padding: var(--size-spacing-large) var(--size-spacing-xlarge);
      border-radius: var(--size-radius-medium);
      text-decoration: none;
      font-family: var(--font-family-display);
      font-size: var(--size-type-large);
      font-weight: var(--font-display-bold);
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(115, 6, 12, 0.3);
      position: relative;
      overflow: hidden;
    }

    /* Fitness category links - Yellow */
    .card-link-fitness {
      height: 30%; 
      display: inline-block;
      background: #FFF4DE;
      color: var(--color-text);
      padding: var(--size-spacing-large) var(--size-spacing-xlarge);
      border-radius: var(--size-radius-medium);
      text-decoration: none;
      font-family: var(--font-family-display);
      font-size: var(--size-type-large);
      font-weight: var(--font-display-bold);
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(115, 6, 12, 0.3);
      position: relative;
      overflow: hidden;
    }

    .card-link::before,
    .card-link-food::before,
    .card-link-fitness::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      transition: left 0.5s;
    }

    .card-link:hover,
    .card-link-food:hover,
    .card-link-fitness:hover {
      box-shadow: 0 8px 25px rgba(115, 6, 12, 0.4);
      color: var(--color-text);
      font-size: var(--size-type-large-hover);
    }

    /* Specific hover effects for each category */
    .card-link:hover {
      background: linear-gradient(135deg,rgb(247, 253, 249) 0%, #DCFCE7 80%);
    }

    .card-link-food:hover {
      background: linear-gradient(135deg, #FFFFFF 0%, #FFE2E5);
    }

    .card-link-fitness:hover {
      background: linear-gradient(135deg, #FFFFFF 0%, #FFF4DE);
    }

    .card-link:hover::before,
    .card-link-food:hover::before,
    .card-link-fitness:hover::before {
      left: 100%;
    }

    .card-link:active,
    .card-link-food:active,
    .card-link-fitness:active {
      transform: translateY(0);
    }

    body.dark-mode .login-warning {
      background: linear-gradient(135deg, var(--color-background-page) 0%, rgba(163, 71, 74, 0.3) 100%);
      border: 1px solid rgba(255, 247, 243, 0.2);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    }

    body.dark-mode .card-link {
      box-shadow: 0 4px 15px rgba(255, 247, 243, 0.2);
    }

    body.dark-mode .card-link:hover {
      box-shadow: 0 8px 25px rgba(255, 247, 243, 0.3);
    }

    @media (max-width: 768px) {
      .login-warning {
        margin: var(--size-spacing-large);
        padding: var(--size-spacing-large);
        min-height: 50vh;
      }

      .login-warning h1 {
        font-size: var(--size-type-xlarge);
      }

      .login-warning p {
        font-size: var(--size-type-body);
      }

      .card-link {
        padding: var(--size-spacing-medium) var(--size-spacing-large);
        font-size: var(--size-type-mlarge);
      }
    }

    .page-title {
      padding: 1rem;
    }

   .main-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2.5rem;
  padding: var(--size-padding, 1rem);
  max-width: 1200px;
  margin: 0 auto;
}

    .card {
      grid-column: span 4;
      height: 300px;
      width: 100%;
    }

    .icon {
      width: 20px;
      height: 20px;
      fill: #0077cc;
    }

    svg.icon {
      width: 2em;
      height: 2em;
      fill: currentColor;
      vertical-align: middle;
      font-size: 1.5rem;
    }

    .links a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: var(--color-card-text);
      margin-top: 0.75rem;
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      border-radius: 8px;
      transition: background-color 0.3s ease, color 0.3s ease, font-size 0.3s ease;
      box-sizing: border-box;
    }

    .links a:hover {
      color: var(--color-text);
      font-size: 1.1rem;
    }

    .page {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem 1rem;
      font-family: var(--font-body);
    }
  `;let b=T;q([d()],b.prototype,"loggedIn");q([d()],b.prototype,"userid");var oe=Object.getOwnPropertyDescriptor,se=(a,t,e,i)=>{for(var r=i>1?void 0:i?oe(t,e):t,o=a.length-1,n;o>=0;o--)(n=a[o])&&(r=n(r)||r);return r};let F=class extends h{render(){return s`
      <button @click=${this.goBack}>← Back to Dashboard</button>
    `}goBack(){L.dispatch(this,"history/navigate",{href:"/app"})}};F.styles=c`
    button {
      background: none;
      border: none;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
      margin-bottom: 1rem;
      border-radius: 4px;
    }

    button:hover {
      
      color: var(--dark-red, #aa1f1f);
    }
  `;F=se([C("back-button")],F);const R=class R extends h{render(){return s`
    <back-button></back-button>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
              <th>Snack</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Sunday</td><td>Avocado toast</td><td>Hamburger</td><td>Salmon and potatoes</td><td></td></tr>
            <tr><td>Monday</td><td>Hashbrowns and eggs</td><td>Chicken tikka masala</td><td>Beef stew</td><td>Brownies</td></tr>
            <tr><td>Tuesday</td><td>Overnight oats</td><td>Burrito</td><td>Chicken salad</td><td></td></tr>
            <tr><td>Wednesday</td><td>Avocado toast</td><td>Pizza</td><td>Fried chicken and fries</td><td></td></tr>
            <tr><td>Thursday</td><td>Bacon and eggs</td><td>Hamburger</td><td>Tuna sandwich</td><td>Chocolate muffin</td></tr>
            <tr><td>Friday</td><td>Overnight oats</td><td>Chicken salad</td><td>Salmon and potatoes</td><td></td></tr>
            <tr><td>Saturday</td><td>Toast and eggs</td><td>Pot roast</td><td>Beef burrito</td><td></td></tr>
          </tbody>
        </table>
      </div>
    `}};R.styles=c`
    .table-wrapper {
      overflow-x: auto;
      margin: 1rem 0;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      font-family: Arial, sans-serif;
    }
    thead {
      background-color: #333;
      color: white;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 0.5rem 1rem;
      text-align: left;
    }
    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    tbody tr:hover {
      background-color: #f1f1f1;
    }
  `;let S=R;var ne=Object.defineProperty,de=Object.getOwnPropertyDescriptor,O=(a,t,e,i)=>{for(var r=i>1?void 0:i?de(t,e):t,o=a.length-1,n;o>=0;o--)(n=a[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&ne(t,e,r),r};let m=class extends h{constructor(){super(...arguments),this.entries=[]}updated(a){super.updated(a),a.has("src")&&this.src&&this.hydrate(this.src)}hydrate(a){fetch(a).then(t=>{if(!t.ok)throw new Error(`Failed to fetch: ${t.status} ${t.statusText}`);return t.json()}).then(t=>{t&&t.entries?(this.entries=t.entries,console.log("Loaded entries:",this.entries)):(console.warn("No entries found in workout week data"),this.entries=[])}).catch(t=>{console.error("Error loading JSON data:",t),this.entries=[]})}render(){return s`
      <div class="main-content">
        ${this.entries.length>0?s`
            <table class="exercise-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Exercise</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                ${this.entries.map(a=>s`
                    <tr>
                      <td>${a.day}</td>
                      <td>${a.activity}</td>
                      <td>${a.duration}</td>
                    </tr>
                  `)}
              </tbody>
            </table>
          `:s`
          <p>Your schedule is empty :(</p>
        <p>Add your first schedule item now</p>
        <button type="button" class = rbutton > + </button>`}
      </div>
    `}};m.styles=c`
    :host {
      display: block;
      padding: var(--size-spacing-large);
    }

    .main-content {
      display: grid;
      place-items: center;
    }

    .exercise-table {
      width: 100%;
      max-width: 800px;
      border-collapse: collapse;
      background-color: white;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }

    .exercise-table th,
    .exercise-table td {
      padding: 1rem;
      text-align: left;
      border: 1px solid #ddd;
    }

    .exercise-table th {
      background-color: var(--color-background-header);
      color: var(--dark-red);
      font-weight: var(--font-display-bold);
    }

    .exercise-table td {
      background-color: var( --color-card);
    }

    .rbutton {
      background-color: var(--dark-red);
      color: white;
      border: none;
      padding: 0.5rem 1rem; 
      transition: transform 0.5s;
    }

    .rbutton:hover {
      transform: scale(1.1);
    }

  `;O([y({type:Array})],m.prototype,"entries",2);O([y()],m.prototype,"src",2);m=O([C("workout-schedule")],m);var le=Object.defineProperty,P=(a,t,e,i)=>{for(var r=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(r=n(t,e,r)||r);return r&&le(t,e,r),r};const E=class E extends h{constructor(){super(...arguments),this.loading=!0,this._authObserver=new x(this,"profile:auth")}connectedCallback(){super.connectedCallback(),console.log("WorkoutScheduleView connected"),this._authObserver.observe(t=>{const{user:e}=t;console.log("Auth observer - user:",e),e!=null&&e.authenticated&&(console.log("User authenticated:",e.username),this.fetchUserObjectId(e.username))})}async fetchUserObjectId(t){var e;try{console.log("Fetching user ObjectId for:",t);const i=await fetch(`/api/user/${t}`,{credentials:"include",headers:{"Content-Type":"application/json"}});if(console.log("User fetch response:",i.status),!i.ok)throw new Error(`HTTP ${i.status}: ${i.statusText}`);const r=await i.json();console.log("User data received:",r),this.userid=((e=r._id)==null?void 0:e.$oid)||r._id,this.loading=!1,this.error=void 0}catch(i){console.error("Error fetching user ObjectId:",i),this.error=i instanceof Error?i.message:"Failed to load user data",this.loading=!1}}render(){return console.log("WorkoutScheduleView render - userid:",this.userid,"loading:",this.loading,"error:",this.error),s`
      <back-button></back-button>
      ${this.loading?s`<div class="loading">
        <p>Log in to start adding items to your schedule</p>
        
        </div>`:this.error?s`<div class="error">Error: ${this.error}</div>`:this.userid?s`<workout-schedule src="/api/workoutWeek/${this.userid}"></workout-schedule>`:s`<div class="error">No user ID available</div>`}
    `}};E.styles=c`
    :host {
      display: block;
      padding: var(--size-spacing-medium);
    }
    
    .loading, .error {
      text-align: center;
      padding: var(--size-spacing-large);
    }
    
    .error {
      color: var(--color-error, #d32f2f);
    }
  `;let g=E;P([d()],g.prototype,"userid");P([d()],g.prototype,"loading");P([d()],g.prototype,"error");var ce=Object.defineProperty,he=Object.getOwnPropertyDescriptor,$=(a,t,e,i)=>{for(var r=i>1?void 0:i?he(t,e):t,o=a.length-1,n;o>=0;o--)(n=a[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&ce(t,e,r),r};let u=class extends h{constructor(){super(...arguments),this.userid="",this._isSubmitting=!1,this._message=""}render(){return s`
      <div class="page">
        <h2>Add New Recipe</h2>
        ${this._message?s`<div class="message ${this._message.includes("Error")?"error":"success"}">${this._message}</div>`:""}
        
        <form @submit=${this.handleSubmit}>
          <label>
            Recipe Title:
            <input 
              name="title" 
              type="text"
              required 
              placeholder="Enter recipe title"
              ?disabled=${this._isSubmitting}
            />
          </label>
          
          <label>
            Ingredients (comma-separated):
            <input 
              name="ingredients" 
              type="text"
              required 
              placeholder="flour, sugar, eggs, milk"
              ?disabled=${this._isSubmitting}
            />
          </label>
          
          <label>
            Instructions:
            <textarea 
              name="instructions" 
              required
              placeholder="Describe how to make this recipe..."
              ?disabled=${this._isSubmitting}
            ></textarea>
          </label>
          
          <button type="submit" ?disabled=${this._isSubmitting}>
            ${this._isSubmitting?"Saving Recipe...":"Save Recipe"}
          </button>
        </form>
      </div>
    `}async handleSubmit(a){if(a.preventDefault(),!this.userid){this._message="Error: No user ID available";return}const t=a.target,e=new FormData(t),i=e.get("title"),r=e.get("ingredients"),o=e.get("instructions");if(!i||!r||!o){this._message="Error: Please fill in all fields";return}this._isSubmitting=!0,this._message="";const n={userid:this.userid,title:i.trim(),ingredients:r.split(",").map(l=>l.trim()).filter(l=>l.length>0),instructions:o.trim()};try{console.log("Saving recipe:",n);const l=await fetch(`/api/recipes/${this.userid}`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)});if(console.log("Response status:",l.status),!l.ok){const M=await l.text();throw new Error(`Failed to save recipe: ${l.status} ${M}`)}const Y=await l.json();console.log("Recipe saved successfully:",Y),this._message="Recipe saved successfully!",t.reset(),this.dispatchEvent(new CustomEvent("recipe-saved",{detail:{recipe:Y},bubbles:!0,composed:!0})),setTimeout(()=>{this._message=""},3e3)}catch(l){console.error("Failed to save recipe:",l),this._message=`Error: ${l instanceof Error?l.message:"Unknown error occurred"}`,setTimeout(()=>{this._message=""},5e3)}finally{this._isSubmitting=!1}}};u.styles=c`
    .page {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem;
    }

    .message {
      padding: 10px;
      margin: 10px 0;
      border-radius: 4px;
    }
    
    .message.success {
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }
    
    .message.error {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }
    
    form {
      background: var(--color-surface, #fff);
      padding: 1.5rem;
      border-radius: var(--size-radius-medium, 8px);
      box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.1));
    }
    
    label {
      display: block;
      margin: 15px 0;
      font-weight: bold;
    }
    
    input, textarea {
      width: 100%;
      padding: 8px 12px;
      margin-top: 4px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-family: inherit;
      font-size: 14px;
    }
    
    textarea {
      min-height: 100px;
      resize: vertical;
    }
    
    button {
      padding: 12px 24px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      margin-top: 10px;
    }
    
    button:hover:not(:disabled) {
      background-color: #0056b3;
    }
    
    button:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
      opacity: 0.7;
    }
  `;$([y()],u.prototype,"userid",2);$([d()],u.prototype,"_isSubmitting",2);$([d()],u.prototype,"_message",2);u=$([C("recipe-edit")],u);var pe=Object.defineProperty,w=(a,t,e,i)=>{for(var r=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(r=n(t,e,r)||r);return r&&pe(t,e,r),r};const B=class B extends h{constructor(){super(...arguments),this.loading=!0,this.error=null,this.recipes=[],this.showAddForm=!1,this._authObserver=new x(this,"profile:auth"),this.handleRecipeSaved=()=>{console.log("Recipe saved, refreshing list..."),this.showAddForm=!1,this.refreshRecipes()}}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;e!=null&&e.authenticated?this.fetchUserObjectId(e.username):(this.userid=void 0,this.loading=!1,this.error="User not authenticated")}),this.addEventListener("recipe-saved",this.handleRecipeSaved)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("recipe-saved",this.handleRecipeSaved)}async fetchUserObjectId(t){var e;try{const i=await fetch(`/api/user/${t}`,{credentials:"include",headers:{"Content-Type":"application/json"}});if(!i.ok)throw new Error("User fetch failed");const r=await i.json();this.userid=((e=r._id)==null?void 0:e.$oid)||r._id,this.userid&&this.fetchRecipes(this.userid)}catch(i){this.error=i instanceof Error?i.message:"Failed to fetch user",this.loading=!1}}async fetchRecipes(t){this.loading=!0;try{const e=await fetch(`/api/recipes/${t}`);if(!e.ok)throw new Error("Failed to load recipes");const i=await e.json();this.recipes=i,this.loading=!1}catch(e){this.error=e instanceof Error?e.message:"Error loading recipes",this.loading=!1}}async refreshRecipes(){this.userid&&await this.fetchRecipes(this.userid)}toggleAddForm(){this.showAddForm=!this.showAddForm}render(){return s`
      <back-button></back-button>
      <main class="page">
        ${this.userid?s`
          <div class="controls">
            <button 
              class="add-recipe-button ${this.showAddForm?"active":""}" 
              @click=${this.toggleAddForm}
            >
              ${this.showAddForm?"✕ Cancel":"+ Add New Recipe"}
            </button>
            <button class="refresh-button" @click=${this.refreshRecipes}>
             Refresh
            </button>
          </div>

          <div class="add-form-container ${this.showAddForm?"visible":"hidden"}">
            <recipe-edit userid=${this.userid}></recipe-edit>
          </div>
        `:""}
        
        ${this.loading?s`<div class="loading">Loading recipes...</div>`:this.error?s`<div class="error">Error: ${this.error}</div>`:this.userid?this.recipes.length===0?s`<div class="empty">No recipes found. Click "Add New Recipe" to get started!</div>`:this.recipes.map(t=>s`
                <section class="recipe">
                  <h3>${t.title}</h3>
                  <p><strong>Ingredients:</strong></p>
                  <ul>
                    ${t.ingredients.map(e=>s`<li>${e}</li>`)}
                  </ul>
                  <p><strong>Instructions:</strong> ${t.instructions}</p>
                </section>
              `):s`<div class="error">No user ID available</div>`}
      </main>
    `}};B.styles=c`
    .page {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .recipe {
      margin-bottom: 2rem;
      background: var(--color-surface);
      padding: 1.5rem;
      border-radius: var(--size-radius-medium);
      box-shadow: var(--shadow-sm);
    }

    .recipe ul {
      padding-left: 1.5rem;
    }

    .error,
    .loading,
    .empty {
      text-align: center;
      padding: 1rem;
    }

    .controls {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .add-recipe-button {
      padding: 0.75rem 1.5rem;
      background: var(--bright-red);
      color: white;
      border: none;
      border-radius: var(--size-radius-small, 4px);
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      transition: all  ease-in-out 0.2s;
    }

    .add-recipe-button:hover {
      transform: scale(1.04);
      background: #c82333;
    }

    .add-recipe-button.active {
      background: #dc3545;
    }

    .add-recipe-button.active:hover {
      background: #c82333;
    }

    .refresh-button {
      padding: 0.75rem 1.5rem;
      background: var(--color-accent,rgb(88, 93, 99));
      color: white;
      border: none;
      border-radius: var(--size-radius-small, 4px);
      cursor: pointer;
      font-size: 1rem;
      transition: opacity 0.2s;
    }

    .refresh-button:hover {
      opacity: 0.8;
    }

    .add-form-container {
      margin-bottom: 2rem;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
    }

    .add-form-container.hidden {
      max-height: 0;
      margin-bottom: 0;
    }

    .add-form-container.visible {
      max-height: 1000px;
    }
  `;let p=B;w([d()],p.prototype,"userid");w([d()],p.prototype,"loading");w([d()],p.prototype,"error");w([d()],p.prototype,"recipes");w([d()],p.prototype,"showAddForm");var ge=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,J=(a,t,e,i)=>{for(var r=i>1?void 0:i?ue(t,e):t,o=a.length-1,n;o>=0;o--)(n=a[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&ge(t,e,r),r};const U=class U extends K{get profile(){return this.model.profile}render(){const e=[["Running","Cardiovascular Activity"],["Cycling","Cardiovascular Activity"],["Swimming","Cardiovascular Activity"],["Jump Rope","Cardiovascular Activity"],["Push-Ups","Strength Training"],["Squats","Strength Training"],["Deadlifts","Strength Training"],["Bench Press","Strength Training"]].reduce((i,[r,o])=>(i[o]||(i[o]=[]),i[o].push(r),i),{});return s`
      <back-button></back-button>

      ${Object.entries(e).map(([i,r])=>s`
          <section class="category-group" data-category="${i}">
            <h2 class="category-title">${i}</h2>
            <div class="exercise-grid">
              ${r.map(o=>s`
                  <div class="exercise-card" tabindex="0" role="button" aria-label="${o}, ${i}">
                    <div class="exercise-name">${o}</div>
                    <div class="exercise-category">${i}</div>
                  </div>
                `)}
            </div>
          </section>
        `)}
    `}static get observedAttributes(){return["user-id"]}attributeChangedCallback(t,e,i){var r;(r=super.attributeChangedCallback)==null||r.call(this,t,e,i),t==="user-id"&&e!==i&&i&&this.dispatchMessage(["profile/select",{userid:i}])}};U.styles=c`
    :host {
      display: block;
      padding: 2rem;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #f8f0f8, #fffafa);
      color: #333;
      min-height: 100vh;
    }

    back-button {
      display: block;
      margin-bottom: 2rem;
    }

    h2.category-title {
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #aa1f1f;
      border-bottom: 3px solid #aa1f1f;
      padding-bottom: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    section.category-group {
      margin-bottom: 3rem;
    }

    .exercise-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem;
    }

    .exercise-card {
      background: #fff;
      border-radius: 1rem;
      padding: 1.5rem 1.75rem;
      box-shadow: 0 4px 10px rgba(170, 31, 31, 0.1);
      border: 2px solid transparent;
      transition: 
        transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
        border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }

    .exercise-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 15px 30px rgba(170, 31, 31, 0.3);
      border-color: #aa1f1f;
    }

    .exercise-name {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      color: #aa1f1f;
      letter-spacing: 0.02em;
    }

    .exercise-category {
      font-size: 1rem;
      font-weight: 600;
      color: #666;
      opacity: 0.8;
    }

    /* Accent colors for different categories */
    section.category-group[data-category="Cardiovascular Activity"] .exercise-card {
      border-color: #e76f51;
      box-shadow: 0 4px 10px rgba(231, 111, 81, 0.1);
    }
    section.category-group[data-category="Cardiovascular Activity"] .exercise-card:hover {
      box-shadow: 0 15px 30px rgba(231, 111, 81, 0.3);
      border-color: #e76f51;
    }

    section.category-group[data-category="Strength Training"] .exercise-card {
      border-color: #264653;
      box-shadow: 0 4px 10px rgba(38, 70, 83, 0.1);
    }
    section.category-group[data-category="Strength Training"] .exercise-card:hover {
      box-shadow: 0 15px 30px rgba(38, 70, 83, 0.3);
      border-color: #264653;
    }

    @media (max-width: 600px) {
      :host {
        padding: 1rem;
      }
      .exercise-card {
        padding: 1rem 1.25rem;
      }
      .exercise-name {
        font-size: 1.1rem;
      }
      h2.category-title {
        font-size: 1.25rem;
      }
    }
  `;let v=U;J([y({attribute:"user-id"})],v.prototype,"userid",2);J([d()],v.prototype,"profile",1);const N=class N extends h{render(){return s`
      <back-button></back-button>

      <main class="journal-content">
        <textarea
          class="journal-input"
          placeholder="Write your journal entry here..."
          aria-label="Journal Entry"
        >
Today I finally went for that run I kept putting off, and honestly, it felt way better than I expected. I didn’t go far, but the fresh air and movement did wonders for my mood—might actually make it a habit this time.</textarea
        >
      </main>
    `}};N.styles=c`
    :host {
      display: block;
      padding: 2rem;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      color: #222;
      min-height: 100vh;
    }

    back-button {
      display: block;
      margin-bottom: 1.5rem;
    }

    main.journal-content {
      max-width: 700px;
      margin: 0 auto;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      padding: 1.5rem 2rem;
    }

    textarea.journal-input {
      width: 100%;
      height: 250px;
      border: 2px solid #ccc;
      border-radius: 10px;
      padding: 1rem 1.25rem;
      font-size: 1.1rem;
      font-family: inherit;
      line-height: 1.5;
      color: #333;
      resize: vertical;
      box-sizing: border-box;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      outline: none;
    }

    textarea.journal-input:focus {
      border-color: #aa1f1f;
      box-shadow: 0 0 8px rgba(170, 31, 31, 0.4);
    }

    /* Placeholder styling */
    textarea.journal-input::placeholder {
      color: #999;
      font-style: italic;
    }
  `;let j=N;const fe={};function be(a,t,e){switch(a[0]){case"recipe/save":me(a[1],e).then(i=>t(r=>({...r,recipes:r.recipes?[...r.recipes,i]:[i]}))).then(()=>{const{onSuccess:i}=a[1];i&&i()}).catch(i=>{const{onFailure:r}=a[1];r&&r(i)});break;case"profile/select":ve(a[1].userid,e).then(i=>t(r=>({...r,profile:i.profile,recipes:i.recipes}))).catch(i=>console.error("Failed to load user data:",i));break;case"history/navigate":break;default:console.warn("Unhandled message:",a);break}}function me(a,t){return fetch(`/api/recipes/${a.userid}`,{method:"PUT",headers:{"Content-Type":"application/json",...k.headers(t)},body:JSON.stringify(a.recipe)}).then(e=>{if(e.status===200||e.status===201)return e.json();throw new Error(`Failed to save recipe for ${a.userid}: ${e.status}`)}).then(e=>e)}function ve(a,t){return Promise.all([fetch(`/api/profiles/${a}`,{headers:k.headers(t)}).then(e=>e.json()),fetch(`/api/recipes/${a}`,{method:"GET",headers:k.headers(t)}).then(e=>e.json())]).then(([e,i])=>({profile:e,recipes:Array.isArray(i)?i:[]}))}const xe=[{path:"/app",view:()=>s`
      <home-view></home-view>
    `},{path:"/app/mealplan/:id",view:a=>s`
      <mealplan-view user-id=${a.id}></mealplan-view>
    `},{path:"/app/recipes/:id",view:a=>s`
      <recipes-view user-id=${a.id}></recipes-view>
    `},{path:"/app/workoutcalendar",view:()=>s`
    <workout-schedule-view></workout-schedule-view>`},{path:"/app/exerciseoptions/:id",view:a=>s`
      <exerciseoptions-view user-id=${a.id}></exerciseoptions-view>
    `},{path:"/app/journaling/:id",view:a=>s`
      <journaling-view user-id=${a.id}></journaling-view>
    `},{path:"/",redirect:"/app"}];Q({"mu-store":class extends Z.Provider{constructor(){super(be,fe,"profile:auth")}},"mu-auth":k.Provider,"mu-history":L.Provider,"profile-header":f,"home-view":b,"mealplan-view":S,"workout-schedule-view":g,"recipes-view":p,"exerciseoptions-view":v,"journaling-view":j,"mu-switch":class extends X.Element{constructor(){super(xe,"profile:history","profile:auth")}}});
