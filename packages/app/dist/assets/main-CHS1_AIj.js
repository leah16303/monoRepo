import{i as c,O as m,a as h,x as o,e as X,r as d,b as Z,n as O,h as W,c as C,d as H,_ as ee,s as te}from"./reset.css-BUlA0fGw.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var re=Object.defineProperty,K=(i,t,e,s)=>{for(var r=void 0,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=n(t,e,r)||r);return r&&re(t,e,r),r};const R=class R extends c{constructor(){super(...arguments),this._authObserver=new m(this,"profile:auth"),this.loggedIn=!1}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;e&&e.authenticated?(this.loggedIn=!0,this.userid=e.username):(this.loggedIn=!1,this.userid=void 0)})}render(){return o`
    <header class="header">
      <h1>Health Planner</h1>
      <div class="header-bottom-row">
        <div class="user-info">
          ${this.loggedIn?o`<a>${this.userid}</a>`:o`<a>Guest</a>`}
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
  `}renderSignOutButton(){return o`
    <button
      @click=${t=>{X.relay(t,"auth:message",["auth/signout"])}}
    >
      Sign Out
    </button>
  `}renderSignInButton(){return o`
    <a
      class="sign-in-btn"
      href="/login.html"
      @click=${t=>{t.preventDefault(),location.assign("/login.html")}}
      >Sign In</a
    >
  `}};R.styles=h`

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
    padding: 0 1rem;
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

   `;let $=R;K([d()],$.prototype,"loggedIn");K([d()],$.prototype,"userid");var ie=Object.defineProperty,se=(i,t,e,s)=>{for(var r=void 0,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=n(t,e,r)||r);return r&&ie(t,e,r),r};const N=class N extends c{constructor(){super(...arguments),this._authObserver=new m(this,"profile:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;this.userid=e!=null&&e.authenticated?e.username:void 0})}render(){const t=new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"});return o`
      <div class="greeting">

      <p> Hello ${this.userid??"Guest"}! <p>
        
        <div class="date">${t}</div>
      </div>
    `}};N.styles=h`
    .greeting {
      padding: 1rem;
      font-size: 1.rem;
      color: var(--color-text);
    }

    .date {
      font-size: 1rem;
      color: var(--dark-black-text );;
    }
  `;let D=N;se([d()],D.prototype,"userid");var ae=Object.defineProperty,oe=(i,t,e,s)=>{for(var r=void 0,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=n(t,e,r)||r);return r&&ae(t,e,r),r};const M=class M extends c{render(){return o`
    <div class="card">
      <h2>${this.title}</h2>
      <div class="content">
        <!-- Your card content -->
      </div>
      
    </div>
  `}};M.styles=[Z.styles,h`

    
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
    `];let T=M;oe([O({type:String})],T.prototype,"category");var ne=Object.defineProperty,G=(i,t,e,s)=>{for(var r=void 0,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=n(t,e,r)||r);return r&&ne(t,e,r),r};const B=class B extends c{constructor(){super(...arguments),this.loggedIn=!1,this._authObserver=new m(this,"profile:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;e!=null&&e.authenticated?(this.loggedIn=!0,this.userid=e.username):(this.loggedIn=!1,this.userid=void 0)})}render(){return!this.loggedIn||!this.userid?o`
        <section class="login-warning">
          <h1>Sign in to continue</h1>
          <p> click link below to sign in</p>
          ${this.renderSignInButton()}
        </section>
      `:o`
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
    `}renderSignInButton(){return o`
      <a class="login-button" @click=${()=>location.assign("/login.html")}>
        Sign In
      </a>
    `}};B.styles=h`


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
  `;let _=B;G([d()],_.prototype,"loggedIn");G([d()],_.prototype,"userid");var de=Object.getOwnPropertyDescriptor,le=(i,t,e,s)=>{for(var r=s>1?void 0:s?de(t,e):t,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=n(r)||r);return r};let A=class extends c{render(){return o`
      <button @click=${this.goBack}>← Back to Dashboard</button>
    `}goBack(){W.dispatch(this,"history/navigate",{href:"/app"})}};A.styles=h`
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
  `;A=le([S("back-button")],A);var ce=Object.defineProperty,k=(i,t,e,s)=>{for(var r=void 0,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=n(t,e,r)||r);return r&&ce(t,e,r),r};const J=class J extends c{constructor(){super(...arguments),this.loading=!0,this.error=null,this.mealplans=[],this.editingCell=null,this.editingValue="",this._authObserver=new m(this,"profile:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;e!=null&&e.authenticated?this.fetchUserObjectId(e.username):(this.userid=void 0,this.loading=!1,this.error="User not authenticated")})}async fetchUserObjectId(t){var e;try{const s=await fetch(`/api/user/${t}`,{credentials:"include",headers:{"Content-Type":"application/json"}});if(!s.ok)throw new Error("User fetch failed");const r=await s.json();this.userid=((e=r._id)==null?void 0:e.$oid)||r._id,this.userid&&(await this.initializeMealPlan(),this.fetchMealPlans(this.userid))}catch(s){this.error=s instanceof Error?s.message:"Failed to fetch user",this.loading=!1}}async initializeMealPlan(){if(this.userid)try{await fetch(`/api/mealplans/${this.userid}/initialize`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}})}catch(t){console.warn("Failed to initialize meal plan:",t)}}async fetchMealPlans(t){this.loading=!0;try{const e=await fetch(`/api/mealplans/${t}`,{credentials:"include"});if(!e.ok)throw new Error("Failed to load meal plans");const s=await e.json();this.mealplans=s,this.loading=!1}catch(e){this.error=e instanceof Error?e.message:"Error loading meal plans",this.loading=!1}}async updateMealPlan(t,e,s){if(this.userid)try{if(!(await fetch(`/api/mealplans/${this.userid}/day/${t}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({[e]:s})})).ok)throw new Error("Failed to update meal plan");this.fetchMealPlans(this.userid)}catch(r){this.error=r instanceof Error?r.message:"Error updating meal plan"}}startEditing(t,e,s){this.editingCell={day:t,meal:e},this.editingValue=s}cancelEditing(){this.editingCell=null,this.editingValue=""}async saveEditing(){this.editingCell&&(await this.updateMealPlan(this.editingCell.day,this.editingCell.meal,this.editingValue),this.editingCell=null,this.editingValue="")}handleInputChange(t){const e=t.target;this.editingValue=e.value}handleKeyDown(t){t.key==="Enter"?this.saveEditing():t.key==="Escape"&&this.cancelEditing()}getMealForDay(t,e){const s=this.mealplans.find(r=>r.day===t);return s?s[e]:""}renderCell(t,e){var a,n;const s=this.getMealForDay(t,e);return((a=this.editingCell)==null?void 0:a.day)===t&&((n=this.editingCell)==null?void 0:n.meal)===e?o`
        <input
          type="text"
          .value=${this.editingValue}
          @input=${this.handleInputChange}
          @keydown=${this.handleKeyDown}
          @blur=${this.saveEditing}
          class="edit-input"
          autofocus
        />
      `:o`
      <span 
        class="editable-cell" 
        @click=${()=>this.startEditing(t,e,s)}
        title="Click to edit"
      >
        ${s||o`<span class="placeholder">Click to add</span>`}
      </span>
    `}render(){return this.loading?o`
        <back-button></back-button>
        <div class="loading">Loading meal plans...</div>
      `:this.error?o`
        <back-button></back-button>
        <div class="error">Error: ${this.error}</div>
      `:this.userid?o`
      <back-button></back-button>
      
      <div class="controls">
        <button class="refresh-button" @click=${()=>this.fetchMealPlans(this.userid)}>
          Refresh
        </button>
      </div>

      <div class="instructions">
       Click on any cell to edit your meal plan. Press Enter to save or Escape to cancel.
      </div>

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
            ${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(e=>o`
              <tr>
                <td><strong>${e}</strong></td>
                <td>${this.renderCell(e,"breakfast")}</td>
                <td>${this.renderCell(e,"lunch")}</td>
                <td>${this.renderCell(e,"dinner")}</td>
                <td>${this.renderCell(e,"snack")}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `:o`
        <back-button></back-button>
        <div class="error">User not authenticated</div>
      `}};J.styles=h`
  :host {
    display: block;
    padding: 1rem;
    box-sizing: border-box;
  }

  .main-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    max-width: 100%;
  }

  .table-wrapper {
    width: 100%;
    max-width: 900px;
    overflow-x: auto;
    margin: 1rem auto;
    border-radius: 8px;
    background: white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.75rem 1rem;
    text-align: left;
  }

  thead {
    background-color: var(--color-background-header);
    color: var(--dark-red);
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  .editable-cell {
    cursor: pointer;
    display: block;
    min-height: 1.2em;
    padding: 0.25rem;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .editable-cell:hover {
    background-color: rgba(0, 123, 255, 0.1);
  }

  .placeholder {
    color: #999;
    font-style: italic;
  }

  .edit-input {
    width: 100%;
    border: 2px solid #007bff;
    border-radius: 4px;
    padding: 0.25rem;
    font-size: inherit;
    font-family: inherit;
  }

  .edit-input:focus {
    outline: none;
    border-color: #0056b3;
  }

  .loading,
  .error {
    text-align: center;
    padding: 2rem;
    margin: 1rem 0;
  }

  .error {
    color: #dc3545;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
  }

  .loading {
    color: #6c757d;
  }

  .controls {
    margin-bottom: 1rem;
  }

  .refresh-button {
    padding: 0.5rem 1rem;
    background: var(--color-accent, #6c757d);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .refresh-button:hover {
    opacity: 0.8;
  }

  .instructions {
    background-color: #fff4de;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: #495057;
  }
`;let p=J;k([d()],p.prototype,"userid");k([d()],p.prototype,"loading");k([d()],p.prototype,"error");k([d()],p.prototype,"mealplans");k([d()],p.prototype,"editingCell");k([d()],p.prototype,"editingValue");var he=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,v=(i,t,e,s)=>{for(var r=s>1?void 0:s?ue(t,e):t,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&he(t,e,r),r};let g=class extends c{constructor(){super(...arguments),this.entries=[],this.editingIndex=null,this.editingField=null,this.editingValue="",this._authObserver=new m(this,"profile:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(i=>{const{user:t}=i;t!=null&&t.authenticated?this.fetchUserObjectId(t.username):this.userid=void 0})}updated(i){super.updated(i),i.has("src")&&this.src&&this.hydrate(this.src)}async fetchUserObjectId(i){var t;try{const e=await fetch(`/api/user/${i}`,{credentials:"include",headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error("User fetch failed");const s=await e.json();this.userid=((t=s._id)==null?void 0:t.$oid)||s._id,this.src&&this.hydrate(this.src)}catch(e){console.error("Failed to fetch user:",e)}}hydrate(i){fetch(i).then(t=>{if(!t.ok)throw new Error(`Failed to fetch: ${t.status} ${t.statusText}`);return t.json()}).then(t=>{this.entries=t.entries||[]}).catch(t=>{console.error("Error loading JSON data:",t),this.entries=[]})}addEntry(){const i={day:"New Day",activity:"New Activity",duration:"0 min"};this.entries=[...this.entries,i],this.userid&&fetch(`/api/workouts/${this.userid}`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(i)}).catch(t=>console.error("Failed to add workout:",t))}deleteEntry(i){const t=this.entries[i];this.entries=this.entries.filter((e,s)=>s!==i),this.userid&&t.day&&fetch(`/api/workouts/${this.userid}/day/${t.day}`,{method:"DELETE",credentials:"include"}).catch(e=>console.error("Failed to delete workout:",e))}startEditing(i,t,e){this.editingIndex=i,this.editingField=t,this.editingValue=e}cancelEditing(){this.editingIndex=null,this.editingField=null,this.editingValue=""}async saveEditing(){if(this.editingIndex===null||this.editingField===null)return;const i=[...this.entries],t={...i[this.editingIndex]};t[this.editingField]=this.editingValue,i[this.editingIndex]=t,this.entries=i,this.userid&&fetch(`/api/workouts/${this.userid}/day/${t.day}`,{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)}).catch(e=>console.error("Failed to update workout:",e)),this.cancelEditing()}handleInputChange(i){const t=i.target;this.editingValue=t.value}handleKeyDown(i){i.key==="Enter"?this.saveEditing():i.key==="Escape"&&this.cancelEditing()}renderCell(i,t,e){const s=this.editingIndex===t&&this.editingField===e,r=i[e];return s?o`
        <input
          type="text"
          .value=${this.editingValue}
          @input=${this.handleInputChange}
          @keydown=${this.handleKeyDown}
          @blur=${this.saveEditing}
          class="edit-input"
          autofocus
        />
      `:o`
      <span 
        class="editable-cell"
        @click=${()=>this.startEditing(t,e,r)}
        title="Click to edit"
      >
        ${r||o`<span class="placeholder">Click to add</span>`}
      </span>
    `}render(){return o`
      <div class="main-content">
        ${this.entries.length>0?o`
            <table class="exercise-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Exercise</th>
                  <th>Duration</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${this.entries.map((i,t)=>o`
                  <tr>
                    <td>${this.renderCell(i,t,"day")}</td>
                    <td>${this.renderCell(i,t,"activity")}</td>
                    <td>${this.renderCell(i,t,"duration")}</td>
                    <td>
                      <button @click=${()=>this.deleteEntry(t)} class="delete-button">🗑</button>
                    </td>
                  </tr>
                `)}
              </tbody>
            </table>
            <button type="button" class="rbutton" @click=${this.addEntry}>+ Add Row</button>
          `:o`
            <p>Your schedule is empty :(</p>
            <p>Add your first schedule item now</p>
            <button type="button" class="rbutton" @click=${this.addEntry}>+</button>
          `}
      </div>
    `}};g.styles=h`
    :host {
      display: block;
      padding: var(--size-spacing-large);
    }

    .main-content {
      display: grid;
      place-items: center;
      gap: 1rem;
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
      background-color: var(--color-card);
    }

    .rbutton {
      background-color: var(--dark-red);
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
      border-radius: 4px;
      font-size: 1rem;
    }

    .rbutton:hover {
      transform: scale(1.05);
    }

    .delete-button {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      color: #c00;
    }

    .delete-button:hover {
      color: #900;
    }

    .editable-cell {
      cursor: pointer;
      display: block;
      min-height: 1.2em;
      padding: 0.25rem;
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    .editable-cell:hover {
      background-color: rgba(200, 0, 0, 0.05);
    }

    .edit-input {
      width: 100%;
      border: 2px solid #007bff;
      border-radius: 4px;
      padding: 0.25rem;
      font-size: inherit;
      font-family: inherit;
    }

    .placeholder {
      color: #999;
      font-style: italic;
    }
  `;v([O()],g.prototype,"src",2);v([d()],g.prototype,"entries",2);v([d()],g.prototype,"editingIndex",2);v([d()],g.prototype,"editingField",2);v([d()],g.prototype,"editingValue",2);v([d()],g.prototype,"userid",2);g=v([S("workout-schedule")],g);var pe=Object.defineProperty,U=(i,t,e,s)=>{for(var r=void 0,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=n(t,e,r)||r);return r&&pe(t,e,r),r};const Y=class Y extends c{constructor(){super(...arguments),this.loading=!0,this._authObserver=new m(this,"profile:auth")}connectedCallback(){super.connectedCallback(),console.log("WorkoutScheduleView connected"),this._authObserver.observe(t=>{const{user:e}=t;console.log("Auth observer - user:",e),e!=null&&e.authenticated&&(console.log("User authenticated:",e.username),this.fetchUserObjectId(e.username))})}async fetchUserObjectId(t){var e;try{console.log("Fetching user ObjectId for:",t);const s=await fetch(`/api/user/${t}`,{credentials:"include",headers:{"Content-Type":"application/json"}});if(console.log("User fetch response:",s.status),!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);const r=await s.json();console.log("User data received:",r),this.userid=((e=r._id)==null?void 0:e.$oid)||r._id,this.loading=!1,this.error=void 0}catch(s){console.error("Error fetching user ObjectId:",s),this.error=s instanceof Error?s.message:"Failed to load user data",this.loading=!1}}render(){return console.log("WorkoutScheduleView render - userid:",this.userid,"loading:",this.loading,"error:",this.error),o`
      <back-button></back-button>
      <div class="instructions">
       Click on any cell to edit your Calendar. Press Enter to save or Escape to cancel.
      </div>
      ${this.loading?o`<div class="loading">
        <p>Log in to start adding items to your schedule</p>
        
        </div>`:this.error?o`<div class="error">Error: ${this.error}</div>`:this.userid?o`<workout-schedule src="/api/workoutWeek/${this.userid}"></workout-schedule>`:o`<div class="error">No user ID available</div>`}
    `}};Y.styles=h`
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

    .instructions {
      background-color: #FFF4DE;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: #495057;
    }
  `;let x=Y;U([d()],x.prototype,"userid");U([d()],x.prototype,"loading");U([d()],x.prototype,"error");var ge=Object.defineProperty,be=Object.getOwnPropertyDescriptor,P=(i,t,e,s)=>{for(var r=s>1?void 0:s?be(t,e):t,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&ge(t,e,r),r};let y=class extends c{constructor(){super(...arguments),this.userid="",this._isSubmitting=!1,this._message=""}render(){return o`
      <div class="page">
        <h2>Add New Recipe</h2>
        ${this._message?o`<div class="message ${this._message.includes("Error")?"error":"success"}">${this._message}</div>`:""}
        
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
    `}async handleSubmit(i){if(i.preventDefault(),!this.userid){this._message="Error: No user ID available";return}const t=i.target,e=new FormData(t),s=e.get("title"),r=e.get("ingredients"),a=e.get("instructions");if(!s||!r||!a){this._message="Error: Please fill in all fields";return}this._isSubmitting=!0,this._message="";const n={userid:this.userid,title:s.trim(),ingredients:r.split(",").map(l=>l.trim()).filter(l=>l.length>0),instructions:a.trim()};try{console.log("Saving recipe:",n);const l=await fetch(`/api/recipes/${this.userid}`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)});if(console.log("Response status:",l.status),!l.ok){const z=await l.text();throw new Error(`Failed to save recipe: ${l.status} ${z}`)}const u=await l.json();console.log("Recipe saved successfully:",u),this._message="Recipe saved successfully!",t.reset(),this.dispatchEvent(new CustomEvent("recipe-saved",{detail:{recipe:u},bubbles:!0,composed:!0})),setTimeout(()=>{this._message=""},3e3)}catch(l){console.error("Failed to save recipe:",l),this._message=`Error: ${l instanceof Error?l.message:"Unknown error occurred"}`,setTimeout(()=>{this._message=""},5e3)}finally{this._isSubmitting=!1}}};y.styles=h`
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
  `;P([O()],y.prototype,"userid",2);P([d()],y.prototype,"_isSubmitting",2);P([d()],y.prototype,"_message",2);y=P([S("recipe-edit")],y);var fe=Object.defineProperty,E=(i,t,e,s)=>{for(var r=void 0,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=n(t,e,r)||r);return r&&fe(t,e,r),r};const L=class L extends c{constructor(){super(...arguments),this.loading=!0,this.error=null,this.recipes=[],this.showAddForm=!1,this._authObserver=new m(this,"profile:auth"),this.handleRecipeSaved=()=>{console.log("Recipe saved, refreshing list..."),this.showAddForm=!1,this.refreshRecipes()}}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;e!=null&&e.authenticated?this.fetchUserObjectId(e.username):(this.userid=void 0,this.loading=!1,this.error="User not authenticated")}),this.addEventListener("recipe-saved",this.handleRecipeSaved)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("recipe-saved",this.handleRecipeSaved)}async fetchUserObjectId(t){var e;try{const s=await fetch(`/api/user/${t}`,{credentials:"include",headers:{"Content-Type":"application/json"}});if(!s.ok)throw new Error("User fetch failed");const r=await s.json();this.userid=((e=r._id)==null?void 0:e.$oid)||r._id,this.userid&&this.fetchRecipes(this.userid)}catch(s){this.error=s instanceof Error?s.message:"Failed to fetch user",this.loading=!1}}async fetchRecipes(t){this.loading=!0;try{const e=await fetch(`/api/recipes/${t}`);if(!e.ok)throw new Error("Failed to load recipes");const s=await e.json();this.recipes=s,this.loading=!1}catch(e){this.error=e instanceof Error?e.message:"Error loading recipes",this.loading=!1}}async refreshRecipes(){this.userid&&await this.fetchRecipes(this.userid)}toggleAddForm(){this.showAddForm=!this.showAddForm}render(){return o`
      <back-button></back-button>
      <main class="page">
        ${this.userid?o`
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

        ${this.loading?o`<div class="loading">Loading recipes...</div>`:this.error?o`<div class="error">Error: ${this.error}</div>`:this.userid?this.recipes.length===0?o`<div class="empty">No recipes found. Click "Add New Recipe" to get started!</div>`:o`
              <div class="recipe-list">
                ${this.recipes.map(t=>o`
                    <section class="recipe">
                      <h3>${t.title}</h3>
                      <p><strong>Ingredients:</strong></p>
                      <ul>
                        ${t.ingredients.map(e=>o`<li>${e}</li>`)}
                      </ul>
                      <p><strong>Instructions:</strong> ${t.instructions}</p>
                    </section>
                  `)}
              </div>
            `:o`<div class="error">No user ID available</div>`}
      </main>
    `}};L.styles=h`
    .page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
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
      transition: all ease-in-out 0.2s;
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
      background: var(--color-accent, rgb(88, 93, 99));
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

    .recipe-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      justify-content: center;
    }

    .recipe {
      flex: 1 1 calc(33% - 1.5rem);
      max-width: calc(33% - 1.5rem);
      min-width: 280px;
      background: var(--color-surface);
      padding: 1.5rem;
      border-radius: var(--size-radius-medium);
      box-shadow: var(--shadow-sm);
      background-color: #f9f9f9;
    }

    @media (max-width: 900px) {
      .recipe {
        flex: 1 1 calc(50% - 1rem);
        max-width: calc(50% - 1rem);
      }
    }

    @media (max-width: 600px) {
      .recipe {
        flex: 1 1 100%;
        max-width: 100%;
      }
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
  `;let b=L;E([d()],b.prototype,"userid");E([d()],b.prototype,"loading");E([d()],b.prototype,"error");E([d()],b.prototype,"recipes");E([d()],b.prototype,"showAddForm");var me=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,I=(i,t,e,s)=>{for(var r=s>1?void 0:s?ve(t,e):t,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&me(t,e,r),r};let w=class extends c{constructor(){super(...arguments),this.userid="",this._isSubmitting=!1,this._message=""}render(){return o`
      <div class="page">
        <h2>Add New Exercise</h2>
        ${this._message?o`<div class="message ${this._message.includes("Error")?"error":"success"}">${this._message}</div>`:""}
        <form @submit=${this.handleSubmit}>
          <label>
            Exercise Type:
            <input
              name="type"
              type="text"
              required
              placeholder="e.g., Cardio, Strength"
              ?disabled=${this._isSubmitting}
            />
          </label>
          <label>
            Activity:
            <input
              name="activity"
              type="text"
              required
              placeholder="e.g., Running, Push-ups"
              ?disabled=${this._isSubmitting}
            />
          </label>
          <button type="submit" ?disabled=${this._isSubmitting}>
            ${this._isSubmitting?"Saving Exercise...":"Save Exercise"}
          </button>
        </form>
      </div>
    `}async handleSubmit(i){var n,l;if(i.preventDefault(),!this.userid){this._message="Error: No user ID available";return}const t=i.target,e=new FormData(t),s=(n=e.get("type"))==null?void 0:n.trim(),r=(l=e.get("activity"))==null?void 0:l.trim();if(!s||!r){this._message="Error: Please fill in all fields";return}this._isSubmitting=!0,this._message="";const a={userid:this.userid,type:s,activity:r};try{console.log("Saving exercise option:",a);const u=await fetch(`/api/exerciseoptions/${this.userid}`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(a)});if(console.log("Response status:",u.status),!u.ok){const Q=await u.text();throw new Error(`Failed to save exercise: ${u.status} ${Q}`)}const z=await u.json();console.log("Exercise saved successfully:",z),this._message="Exercise saved successfully!",t.reset(),this.dispatchEvent(new CustomEvent("exercise-saved",{detail:{exercise:z},bubbles:!0,composed:!0})),setTimeout(()=>{this._message=""},3e3)}catch(u){console.error("Failed to save exercise:",u),this._message=`Error: ${u instanceof Error?u.message:"Unknown error occurred"}`,setTimeout(()=>{this._message=""},5e3)}finally{this._isSubmitting=!1}}};w.styles=h`
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
  `;I([O()],w.prototype,"userid",2);I([d()],w.prototype,"_isSubmitting",2);I([d()],w.prototype,"_message",2);w=I([S("exercise-edit")],w);var xe=Object.defineProperty,F=(i,t,e,s)=>{for(var r=void 0,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=n(t,e,r)||r);return r&&xe(t,e,r),r};const V=class V extends c{constructor(){super(...arguments),this.loading=!0,this.error=null,this.exerciseoptions=[],this.showAddForm=!1,this._authObserver=new m(this,"profile:auth"),this.handleExerciseSaved=()=>{console.log("Exercise saved, refreshing list..."),this.showAddForm=!1,this.refreshExercises()}}groupedByType(){const t={};for(const e of this.exerciseoptions)t[e.type]||(t[e.type]=[]),t[e.type].push(e);return t}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;e!=null&&e.authenticated?this.fetchUserObjectId(e.username):(this.userid=void 0,this.loading=!1,this.error="User not authenticated")}),this.addEventListener("exercise-saved",this.handleExerciseSaved)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("exercise-saved",this.handleExerciseSaved)}async fetchUserObjectId(t){var e;try{const s=await fetch(`/api/user/${t}`,{credentials:"include",headers:{"Content-Type":"application/json"}});if(!s.ok)throw new Error("User fetch failed");const r=await s.json();this.userid=((e=r._id)==null?void 0:e.$oid)||r._id,this.userid&&this.fetchExercises(this.userid)}catch(s){this.error=s instanceof Error?s.message:"Failed to fetch user",this.loading=!1}}async fetchExercises(t){this.loading=!0;try{const e=await fetch(`/api/exerciseoptions/${t}`);if(!e.ok)throw new Error("Failed to load exercises");const s=await e.json();this.exerciseoptions=s,this.loading=!1}catch(e){this.error=e instanceof Error?e.message:"Error loading exercises",this.loading=!1}}async refreshExercises(){this.userid&&await this.fetchExercises(this.userid)}toggleAddForm(){this.showAddForm=!this.showAddForm}render(){return o`
      <back-button></back-button>
      <main class="page">
        ${this.userid?o`
          <div class="controls">
            <button 
              class="add-recipe-button ${this.showAddForm?"active":""}" 
              @click=${this.toggleAddForm}
            >
              ${this.showAddForm?"✕ Cancel":"+ Add New Exercise"}
            </button>
            <button class="refresh-button" @click=${this.refreshExercises}>
             Refresh
            </button>
          </div>

          <div class="add-form-container ${this.showAddForm?"visible":"hidden"}">
            <exercise-edit userid=${this.userid}></exercise-edit>
          </div>
        `:""}
        
        ${this.loading?o`<div class="loading">Loading exercises...</div>`:this.error?o`<div class="error">Error: ${this.error}</div>`:this.userid?this.exerciseoptions.length===0?o`<div class="empty">No recipes found. Click "Add New Exercse" to get started!</div>`:Object.entries(this.groupedByType()).map(([t,e])=>o`
            <section class="recipe">
              <h2>${t}</h2>
              <ul>
                ${e.map(s=>o`<li>${s.activity}</li>`)}
              </ul>
            </section>
          `):o`<div class="error">No user ID available</div>`}
      </main>
    `}};V.styles=h`
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
  `;let f=V;F([d()],f.prototype,"userid");F([d()],f.prototype,"loading");F([d()],f.prototype,"error");F([d()],f.prototype,"exerciseoptions");F([d()],f.prototype,"showAddForm");var ye=Object.defineProperty,we=(i,t,e,s)=>{for(var r=void 0,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=n(t,e,r)||r);return r&&ye(t,e,r),r};const q=class q extends c{constructor(){super(...arguments),this.entry=""}connectedCallback(){super.connectedCallback();const t=localStorage.getItem("journalEntry");t&&(this.entry=t)}render(){return o`
      <back-button></back-button>

      <main class="journal-content">
        <textarea
          class="journal-input"
          placeholder="Write your journal entry here..."
          aria-label="Journal Entry"
          @input=${this.handleInput}
        >${this.entry}</textarea>
        <button class="save-button" @click=${this.saveEntry}>Save</button>
      </main>
    `}handleInput(t){const e=t.target;this.entry=e.value}saveEntry(){localStorage.setItem("journalEntry",this.entry),alert("Journal entry saved!")}};q.styles=h`
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

    button.save-button {
      margin-top: 1rem;
      background-color: #aa1f1f;
      color: white;
      border: none;
      border-radius: 8px;
      padding: 0.5rem 1.25rem;
      font-size: 1rem;
      cursor: pointer;
    }

    button.save-button:hover {
      background-color: #8b1717;
    }
  `;let j=q;we([d()],j.prototype,"entry");const ke={};function $e(i,t,e){switch(i[0]){case"recipe/save":_e(i[1],e).then(s=>t(r=>({...r,recipes:r.recipes?[...r.recipes,s]:[s]}))).then(()=>{const{onSuccess:s}=i[1];s&&s()}).catch(s=>{const{onFailure:r}=i[1];r&&r(s)});break;case"profile/select":Ee(i[1].userid,e).then(s=>t(r=>({...r,profile:s.profile,recipes:s.recipes}))).catch(s=>console.error("Failed to load user data:",s));break;case"history/navigate":break;default:console.warn("Unhandled message:",i);break}}function _e(i,t){return fetch(`/api/recipes/${i.userid}`,{method:"PUT",headers:{"Content-Type":"application/json",...C.headers(t)},body:JSON.stringify(i.recipe)}).then(e=>{if(e.status===200||e.status===201)return e.json();throw new Error(`Failed to save recipe for ${i.userid}: ${e.status}`)}).then(e=>e)}function Ee(i,t){return Promise.all([fetch(`/api/profiles/${i}`,{headers:C.headers(t)}).then(e=>e.json()),fetch(`/api/recipes/${i}`,{method:"GET",headers:C.headers(t)}).then(e=>e.json())]).then(([e,s])=>({profile:e,recipes:Array.isArray(s)?s:[]}))}const Fe=[{path:"/app",view:()=>o`
      <home-view></home-view>
    `},{path:"/app/mealplan/:id",view:i=>o`
      <mealplan-view user-id=${i.id}></mealplan-view>
    `},{path:"/app/recipes/:id",view:i=>o`
      <recipes-view user-id=${i.id}></recipes-view>
    `},{path:"/app/workoutcalendar",view:()=>o`
    <workout-schedule-view></workout-schedule-view>`},{path:"/app/exerciseoptions/:id",view:i=>o`
      <exerciseoptions-view user-id=${i.id}></exerciseoptions-view>
    `},{path:"/app/journaling/:id",view:i=>o`
      <journaling-view user-id=${i.id}></journaling-view>
    `},{path:"/",redirect:"/app"}];H({"mu-store":class extends te.Provider{constructor(){super($e,ke,"profile:auth")}},"mu-auth":C.Provider,"mu-history":W.Provider,"profile-header":$,"home-view":_,"mealplan-view":p,"workout-schedule-view":x,"recipes-view":b,"exerciseoptions-view":f,"journaling-view":j,"mu-switch":class extends ee.Element{constructor(){super(Fe,"profile:history","profile:auth")}}});
