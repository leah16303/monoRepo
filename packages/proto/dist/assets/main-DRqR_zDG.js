import{i as c,x as o,a as u,n as x,O as v,e as k,d as b,b as w}from"./property-DpkYtjC0.js";import{r as O,a as h}from"./reset.css-Bt5IwISw.js";var _=Object.defineProperty,$=(i,t,r,f)=>{for(var e=void 0,a=i.length-1,s;a>=0;a--)(s=i[a])&&(e=s(t,r,e)||e);return e&&_(t,r,e),e};const g=class g extends c{render(){return o`
      <section class="card">
        <h2>${this.category}</h2>
        <div class="links">
          <slot name="link-1"></slot>
          <slot name="link-2"></slot>
        </div>
      </section>
    `}};g.styles=[O.styles,u`
      :host {
        display: contents;
      }

      .card {
        grid-column: span 4;
        background-color: var(--color-card);
        padding: 2.2rem;
        border-radius: 17px;
        box-shadow: 0 2px 6px var(--dark-red);
        color: var(--color-card-text);
      }

      .card h2 {
        margin-bottom: 0.85rem;
      }

      .links {
        display: flex;
        flex-direction: column;
      }

      svg.icon {
        width: 2em;
        height: 2em;
        fill: currentColor;
        vertical-align: middle;
        font-size: 1.5rem;
      }

      @media (max-width: 900px) {
        .card {
          grid-column: span 4;
        }
      }

      @media (max-width: 600px) {
        .card {
          grid-column: span 4;
        }
      }
    `];let l=g;$([x({type:String})],l.prototype,"category");var I=Object.defineProperty,y=(i,t,r,f)=>{for(var e=void 0,a=i.length-1,s;a>=0;a--)(s=i[a])&&(e=s(t,r,e)||e);return e&&I(t,r,e),e};const p=class p extends c{constructor(){super(...arguments),this._authObserver=new v(this,"profile:auth"),this.loggedIn=!1}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:r}=t;r&&r.authenticated?(this.loggedIn=!0,this.userid=r.username):(this.loggedIn=!1,this.userid=void 0)})}render(){return o`
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
        @click=${t=>{k.relay(t,"auth:message",["auth/signout"])}}
      >
        Sign Out
      </button>
    `}renderSignInButton(){return o`
      <a href="/login.html">
        Sign In…
      </a>
    `}};p.styles=u`

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

    .user-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
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

   `;let n=p;y([h()],n.prototype,"loggedIn");y([h()],n.prototype,"userid");var S=Object.defineProperty,z=(i,t,r,f)=>{for(var e=void 0,a=i.length-1,s;a>=0;a--)(s=i[a])&&(e=s(t,r,e)||e);return e&&S(t,r,e),e};const m=class m extends c{constructor(){super(...arguments),this._authObserver=new v(this,"profile:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:r}=t;this.userid=r!=null&&r.authenticated?r.username:void 0})}render(){const t=new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"});return o`
      <div class="greeting">

      <p> Hello ${this.userid??"Guest"}! <p>
        
        <div class="date">${t}</div>
      </div>
    `}};m.styles=u`
    .greeting {
      padding: 1rem;
      font-size: 1.rem;
      color: var(--color-text);
    }

    .date {
      font-size: 1rem;
      color: var(--dark-black-text );;
    }
  `;let d=m;z([h()],d.prototype,"userid");b({"greeting-banner":d,"profile-header":n,"mu-auth":w.Provider,"health-planner-card":l});n.initializeOnce();b({"health-planner-card":l});
