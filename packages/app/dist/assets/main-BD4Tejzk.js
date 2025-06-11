import{i as h,O as b,a as c,x as s,e as K,r as d,b as Q,n as k,h as L,V as X,c as z,d as Z,_ as H,s as V}from"./reset.css-B0Pr4NGF.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=a=>(r,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(a,r)}):customElements.define(a,r)};var ee=Object.defineProperty,J=(a,r,e,i)=>{for(var t=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(t=n(r,e,t)||t);return t&&ee(r,e,t),t};const I=class I extends h{constructor(){super(...arguments),this._authObserver=new b(this,"profile:auth"),this.loggedIn=!1}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{const{user:e}=r;e&&e.authenticated?(this.loggedIn=!0,this.userid=e.username):(this.loggedIn=!1,this.userid=void 0)})}render(){return s`
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
      @click=${r=>{K.relay(r,"auth:message",["auth/signout"])}}
    >
      Sign Out
    </button>
  `}renderSignInButton(){return s`
    <a
      class="sign-in-btn"
      href="/login.html"
      @click=${r=>{r.preventDefault(),location.assign("/login.html")}}
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

   `;let v=I;J([d()],v.prototype,"loggedIn");J([d()],v.prototype,"userid");var re=Object.defineProperty,te=(a,r,e,i)=>{for(var t=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(t=n(r,e,t)||t);return t&&re(r,e,t),t};const D=class D extends h{constructor(){super(...arguments),this._authObserver=new b(this,"profile:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{const{user:e}=r;this.userid=e!=null&&e.authenticated?e.username:void 0})}render(){const r=new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"});return s`
      <div class="greeting">

      <p> Hello ${this.userid??"Guest"}! <p>
        
        <div class="date">${r}</div>
      </div>
    `}};D.styles=c`
    .greeting {
      padding: 1rem;
      font-size: 1.rem;
      color: var(--color-text);
    }

    .date {
      font-size: 1rem;
      color: var(--dark-black-text );;
    }
  `;let F=D;te([d()],F.prototype,"userid");var ie=Object.defineProperty,ae=(a,r,e,i)=>{for(var t=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(t=n(r,e,t)||t);return t&&ie(r,e,t),t};const T=class T extends h{render(){return s`
    <div class="card">
      <h2>${this.title}</h2>
      <div class="content">
        <!-- Your card content -->
      </div>
      
    </div>
  `}};T.styles=[Q.styles,c`

    
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
    `];let C=T;ae([k({type:String})],C.prototype,"category");var oe=Object.defineProperty,W=(a,r,e,i)=>{for(var t=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(t=n(r,e,t)||t);return t&&oe(r,e,t),t};const A=class A extends h{constructor(){super(...arguments),this.loggedIn=!1,this._authObserver=new b(this,"profile:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{const{user:e}=r;e!=null&&e.authenticated?(this.loggedIn=!0,this.userid=e.username):(this.loggedIn=!1,this.userid=void 0)})}render(){return!this.loggedIn||!this.userid?s`
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
    `}};A.styles=c`


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
  `;let x=A;W([d()],x.prototype,"loggedIn");W([d()],x.prototype,"userid");var se=Object.getOwnPropertyDescriptor,ne=(a,r,e,i)=>{for(var t=i>1?void 0:i?se(r,e):r,o=a.length-1,n;o>=0;o--)(n=a[o])&&(t=n(t)||t);return t};let j=class extends h{render(){return s`
      <button @click=${this.goBack}>← Back to Dashboard</button>
    `}goBack(){L.dispatch(this,"history/navigate",{href:"/app"})}};j.styles=c`
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
  `;j=ne([S("back-button")],j);var de=Object.defineProperty,m=(a,r,e,i)=>{for(var t=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(t=n(r,e,t)||t);return t&&de(r,e,t),t};const R=class R extends h{constructor(){super(...arguments),this.loading=!0,this.error=null,this.mealplans=[],this.editingCell=null,this.editingValue="",this._authObserver=new b(this,"profile:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{const{user:e}=r;e!=null&&e.authenticated?this.fetchUserObjectId(e.username):(this.userid=void 0,this.loading=!1,this.error="User not authenticated")})}async fetchUserObjectId(r){var e;try{const i=await fetch(`/api/user/${r}`,{credentials:"include",headers:{"Content-Type":"application/json"}});if(!i.ok)throw new Error("User fetch failed");const t=await i.json();this.userid=((e=t._id)==null?void 0:e.$oid)||t._id,this.userid&&(await this.initializeMealPlan(),this.fetchMealPlans(this.userid))}catch(i){this.error=i instanceof Error?i.message:"Failed to fetch user",this.loading=!1}}async initializeMealPlan(){if(this.userid)try{await fetch(`/api/mealplans/${this.userid}/initialize`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}})}catch(r){console.warn("Failed to initialize meal plan:",r)}}async fetchMealPlans(r){this.loading=!0;try{const e=await fetch(`/api/mealplans/${r}`,{credentials:"include"});if(!e.ok)throw new Error("Failed to load meal plans");const i=await e.json();this.mealplans=i,this.loading=!1}catch(e){this.error=e instanceof Error?e.message:"Error loading meal plans",this.loading=!1}}async updateMealPlan(r,e,i){if(this.userid)try{if(!(await fetch(`/api/mealplans/${this.userid}/day/${r}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({[e]:i})})).ok)throw new Error("Failed to update meal plan");this.fetchMealPlans(this.userid)}catch(t){this.error=t instanceof Error?t.message:"Error updating meal plan"}}startEditing(r,e,i){this.editingCell={day:r,meal:e},this.editingValue=i}cancelEditing(){this.editingCell=null,this.editingValue=""}async saveEditing(){this.editingCell&&(await this.updateMealPlan(this.editingCell.day,this.editingCell.meal,this.editingValue),this.editingCell=null,this.editingValue="")}handleInputChange(r){const e=r.target;this.editingValue=e.value}handleKeyDown(r){r.key==="Enter"?this.saveEditing():r.key==="Escape"&&this.cancelEditing()}getMealForDay(r,e){const i=this.mealplans.find(t=>t.day===r);return i?i[e]:""}renderCell(r,e){var o,n;const i=this.getMealForDay(r,e);return((o=this.editingCell)==null?void 0:o.day)===r&&((n=this.editingCell)==null?void 0:n.meal)===e?s`
        <input
          type="text"
          .value=${this.editingValue}
          @input=${this.handleInputChange}
          @keydown=${this.handleKeyDown}
          @blur=${this.saveEditing}
          class="edit-input"
          autofocus
        />
      `:s`
      <span 
        class="editable-cell" 
        @click=${()=>this.startEditing(r,e,i)}
        title="Click to edit"
      >
        ${i||s`<span class="placeholder">Click to add</span>`}
      </span>
    `}render(){return this.loading?s`
        <back-button></back-button>
        <div class="loading">Loading meal plans...</div>
      `:this.error?s`
        <back-button></back-button>
        <div class="error">Error: ${this.error}</div>
      `:this.userid?s`
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
            ${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(e=>s`
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
    `:s`
        <back-button></back-button>
        <div class="error">User not authenticated</div>
      `}};R.styles=c`
    .table-wrapper {
      overflow-x: auto;
      margin: 1rem 0;
      max-width: 100%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      background: white;
      
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
      position: relative;
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

    .loading, .error {
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
      background-color: #FFF4DE;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: #495057;
    }
  `;let p=R;m([d()],p.prototype,"userid");m([d()],p.prototype,"loading");m([d()],p.prototype,"error");m([d()],p.prototype,"mealplans");m([d()],p.prototype,"editingCell");m([d()],p.prototype,"editingValue");var le=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,P=(a,r,e,i)=>{for(var t=i>1?void 0:i?ce(r,e):r,o=a.length-1,n;o>=0;o--)(n=a[o])&&(t=(i?n(r,e,t):n(t))||t);return i&&t&&le(r,e,t),t};let y=class extends h{constructor(){super(...arguments),this.entries=[]}updated(a){super.updated(a),a.has("src")&&this.src&&this.hydrate(this.src)}hydrate(a){fetch(a).then(r=>{if(!r.ok)throw new Error(`Failed to fetch: ${r.status} ${r.statusText}`);return r.json()}).then(r=>{r&&r.entries?(this.entries=r.entries,console.log("Loaded entries:",this.entries)):(console.warn("No entries found in workout week data"),this.entries=[])}).catch(r=>{console.error("Error loading JSON data:",r),this.entries=[]})}render(){return s`
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
    `}};y.styles=c`
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

  `;P([k({type:Array})],y.prototype,"entries",2);P([k()],y.prototype,"src",2);y=P([S("workout-schedule")],y);var he=Object.defineProperty,E=(a,r,e,i)=>{for(var t=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(t=n(r,e,t)||t);return t&&he(r,e,t),t};const U=class U extends h{constructor(){super(...arguments),this.loading=!0,this._authObserver=new b(this,"profile:auth")}connectedCallback(){super.connectedCallback(),console.log("WorkoutScheduleView connected"),this._authObserver.observe(r=>{const{user:e}=r;console.log("Auth observer - user:",e),e!=null&&e.authenticated&&(console.log("User authenticated:",e.username),this.fetchUserObjectId(e.username))})}async fetchUserObjectId(r){var e;try{console.log("Fetching user ObjectId for:",r);const i=await fetch(`/api/user/${r}`,{credentials:"include",headers:{"Content-Type":"application/json"}});if(console.log("User fetch response:",i.status),!i.ok)throw new Error(`HTTP ${i.status}: ${i.statusText}`);const t=await i.json();console.log("User data received:",t),this.userid=((e=t._id)==null?void 0:e.$oid)||t._id,this.loading=!1,this.error=void 0}catch(i){console.error("Error fetching user ObjectId:",i),this.error=i instanceof Error?i.message:"Failed to load user data",this.loading=!1}}render(){return console.log("WorkoutScheduleView render - userid:",this.userid,"loading:",this.loading,"error:",this.error),s`
      <back-button></back-button>
      ${this.loading?s`<div class="loading">
        <p>Log in to start adding items to your schedule</p>
        
        </div>`:this.error?s`<div class="error">Error: ${this.error}</div>`:this.userid?s`<workout-schedule src="/api/workoutWeek/${this.userid}"></workout-schedule>`:s`<div class="error">No user ID available</div>`}
    `}};U.styles=c`
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
  `;let g=U;E([d()],g.prototype,"userid");E([d()],g.prototype,"loading");E([d()],g.prototype,"error");var pe=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,_=(a,r,e,i)=>{for(var t=i>1?void 0:i?ue(r,e):r,o=a.length-1,n;o>=0;o--)(n=a[o])&&(t=(i?n(r,e,t):n(t))||t);return i&&t&&pe(r,e,t),t};let f=class extends h{constructor(){super(...arguments),this.userid="",this._isSubmitting=!1,this._message=""}render(){return s`
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
    `}async handleSubmit(a){if(a.preventDefault(),!this.userid){this._message="Error: No user ID available";return}const r=a.target,e=new FormData(r),i=e.get("title"),t=e.get("ingredients"),o=e.get("instructions");if(!i||!t||!o){this._message="Error: Please fill in all fields";return}this._isSubmitting=!0,this._message="";const n={userid:this.userid,title:i.trim(),ingredients:t.split(",").map(l=>l.trim()).filter(l=>l.length>0),instructions:o.trim()};try{console.log("Saving recipe:",n);const l=await fetch(`/api/recipes/${this.userid}`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)});if(console.log("Response status:",l.status),!l.ok){const G=await l.text();throw new Error(`Failed to save recipe: ${l.status} ${G}`)}const Y=await l.json();console.log("Recipe saved successfully:",Y),this._message="Recipe saved successfully!",r.reset(),this.dispatchEvent(new CustomEvent("recipe-saved",{detail:{recipe:Y},bubbles:!0,composed:!0})),setTimeout(()=>{this._message=""},3e3)}catch(l){console.error("Failed to save recipe:",l),this._message=`Error: ${l instanceof Error?l.message:"Unknown error occurred"}`,setTimeout(()=>{this._message=""},5e3)}finally{this._isSubmitting=!1}}};f.styles=c`
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
  `;_([k()],f.prototype,"userid",2);_([d()],f.prototype,"_isSubmitting",2);_([d()],f.prototype,"_message",2);f=_([S("recipe-edit")],f);var ge=Object.defineProperty,$=(a,r,e,i)=>{for(var t=void 0,o=a.length-1,n;o>=0;o--)(n=a[o])&&(t=n(r,e,t)||t);return t&&ge(r,e,t),t};const M=class M extends h{constructor(){super(...arguments),this.loading=!0,this.error=null,this.recipes=[],this.showAddForm=!1,this._authObserver=new b(this,"profile:auth"),this.handleRecipeSaved=()=>{console.log("Recipe saved, refreshing list..."),this.showAddForm=!1,this.refreshRecipes()}}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{const{user:e}=r;e!=null&&e.authenticated?this.fetchUserObjectId(e.username):(this.userid=void 0,this.loading=!1,this.error="User not authenticated")}),this.addEventListener("recipe-saved",this.handleRecipeSaved)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("recipe-saved",this.handleRecipeSaved)}async fetchUserObjectId(r){var e;try{const i=await fetch(`/api/user/${r}`,{credentials:"include",headers:{"Content-Type":"application/json"}});if(!i.ok)throw new Error("User fetch failed");const t=await i.json();this.userid=((e=t._id)==null?void 0:e.$oid)||t._id,this.userid&&this.fetchRecipes(this.userid)}catch(i){this.error=i instanceof Error?i.message:"Failed to fetch user",this.loading=!1}}async fetchRecipes(r){this.loading=!0;try{const e=await fetch(`/api/recipes/${r}`);if(!e.ok)throw new Error("Failed to load recipes");const i=await e.json();this.recipes=i,this.loading=!1}catch(e){this.error=e instanceof Error?e.message:"Error loading recipes",this.loading=!1}}async refreshRecipes(){this.userid&&await this.fetchRecipes(this.userid)}toggleAddForm(){this.showAddForm=!this.showAddForm}render(){return s`
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
        
        ${this.loading?s`<div class="loading">Loading recipes...</div>`:this.error?s`<div class="error">Error: ${this.error}</div>`:this.userid?this.recipes.length===0?s`<div class="empty">No recipes found. Click "Add New Recipe" to get started!</div>`:this.recipes.map(r=>s`
                <section class="recipe">
                  <h3>${r.title}</h3>
                  <p><strong>Ingredients:</strong></p>
                  <ul>
                    ${r.ingredients.map(e=>s`<li>${e}</li>`)}
                  </ul>
                  <p><strong>Instructions:</strong> ${r.instructions}</p>
                </section>
              `):s`<div class="error">No user ID available</div>`}
      </main>
    `}};M.styles=c`
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
  `;let u=M;$([d()],u.prototype,"userid");$([d()],u.prototype,"loading");$([d()],u.prototype,"error");$([d()],u.prototype,"recipes");$([d()],u.prototype,"showAddForm");var fe=Object.defineProperty,be=Object.getOwnPropertyDescriptor,q=(a,r,e,i)=>{for(var t=i>1?void 0:i?be(r,e):r,o=a.length-1,n;o>=0;o--)(n=a[o])&&(t=(i?n(r,e,t):n(t))||t);return i&&t&&fe(r,e,t),t};const N=class N extends X{get profile(){return this.model.profile}render(){const e=[["Running","Cardiovascular Activity"],["Cycling","Cardiovascular Activity"],["Swimming","Cardiovascular Activity"],["Jump Rope","Cardiovascular Activity"],["Push-Ups","Strength Training"],["Squats","Strength Training"],["Deadlifts","Strength Training"],["Bench Press","Strength Training"]].reduce((i,[t,o])=>(i[o]||(i[o]=[]),i[o].push(t),i),{});return s`
      <back-button></back-button>

      ${Object.entries(e).map(([i,t])=>s`
          <section class="category-group" data-category="${i}">
            <h2 class="category-title">${i}</h2>
            <div class="exercise-grid">
              ${t.map(o=>s`
                  <div class="exercise-card" tabindex="0" role="button" aria-label="${o}, ${i}">
                    <div class="exercise-name">${o}</div>
                    <div class="exercise-category">${i}</div>
                  </div>
                `)}
            </div>
          </section>
        `)}
    `}static get observedAttributes(){return["user-id"]}attributeChangedCallback(r,e,i){var t;(t=super.attributeChangedCallback)==null||t.call(this,r,e,i),r==="user-id"&&e!==i&&i&&this.dispatchMessage(["profile/select",{userid:i}])}};N.styles=c`
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
  `;let w=N;q([k({attribute:"user-id"})],w.prototype,"userid",2);q([d()],w.prototype,"profile",1);const B=class B extends h{render(){return s`
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
    `}};B.styles=c`
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
  `;let O=B;const me={};function ve(a,r,e){switch(a[0]){case"recipe/save":xe(a[1],e).then(i=>r(t=>({...t,recipes:t.recipes?[...t.recipes,i]:[i]}))).then(()=>{const{onSuccess:i}=a[1];i&&i()}).catch(i=>{const{onFailure:t}=a[1];t&&t(i)});break;case"profile/select":ye(a[1].userid,e).then(i=>r(t=>({...t,profile:i.profile,recipes:i.recipes}))).catch(i=>console.error("Failed to load user data:",i));break;case"history/navigate":break;default:console.warn("Unhandled message:",a);break}}function xe(a,r){return fetch(`/api/recipes/${a.userid}`,{method:"PUT",headers:{"Content-Type":"application/json",...z.headers(r)},body:JSON.stringify(a.recipe)}).then(e=>{if(e.status===200||e.status===201)return e.json();throw new Error(`Failed to save recipe for ${a.userid}: ${e.status}`)}).then(e=>e)}function ye(a,r){return Promise.all([fetch(`/api/profiles/${a}`,{headers:z.headers(r)}).then(e=>e.json()),fetch(`/api/recipes/${a}`,{method:"GET",headers:z.headers(r)}).then(e=>e.json())]).then(([e,i])=>({profile:e,recipes:Array.isArray(i)?i:[]}))}const we=[{path:"/app",view:()=>s`
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
    `},{path:"/",redirect:"/app"}];Z({"mu-store":class extends V.Provider{constructor(){super(ve,me,"profile:auth")}},"mu-auth":z.Provider,"mu-history":L.Provider,"profile-header":v,"home-view":x,"mealplan-view":p,"workout-schedule-view":g,"recipes-view":u,"exerciseoptions-view":w,"journaling-view":O,"mu-switch":class extends H.Element{constructor(){super(we,"profile:history","profile:auth")}}});
