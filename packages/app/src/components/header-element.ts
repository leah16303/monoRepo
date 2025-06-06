import { LitElement, css, html } from "lit";
import { state } from "lit/decorators.js";
import { Auth, Observer, Events } from "@calpoly/mustang";

export class HeaderElement extends LitElement {
   static styles = css`

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

   `;

  _authObserver = new Observer<Auth.Model>(this, "profile:auth");

  @state()
  loggedIn = false;

  @state()
  userid?: string;

  connectedCallback() {
    super.connectedCallback();

    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth;

      if (user && user.authenticated) {
        this.loggedIn = true;
        this.userid = user.username;
      } else {
        this.loggedIn = false;
        this.userid = undefined;
      }
    });
  }

  render() {
  return html`
    <header class="header">
      <h1>Health Planner</h1>
      <div class="header-bottom-row">
        <div class="user-info">
          ${this.loggedIn
            ? html`<a>${this.userid}</a>`
            : html`<a>Guest</a>`}
          <svg class="profile-icon">
            <use href="/icons/all.svg#empty-profile"></use>
          </svg>
        </div>

        <div class="header-controls">
          ${this.loggedIn ? this.renderSignOutButton() : this.renderSignInButton()}

          <label class="dark-mode-toggle">
            <input type="checkbox" id="dark-mode-toggle" autocomplete="off" />
            <p>Dark mode</p>
          </label>
        </div>
      </div>
    </header>
  `;
}


renderSignOutButton() {
  return html`
    <button
      @click=${(e: UIEvent) => {
        Events.relay(e, "auth:message", ["auth/signout"]);
      }}
    >
      Sign Out
    </button>
  `;
}

renderSignInButton() {
  return html`
    <a
      class="sign-in-btn"
      href="/login.html"
      @click=${(e: Event) => {
        e.preventDefault();
        location.assign("/login.html");
      }}
      >Sign In</a
    >
  `;
}


}
