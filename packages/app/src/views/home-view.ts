import { html, LitElement, css } from "lit";
import { state } from "lit/decorators.js";
import { Observer, Auth } from "@calpoly/mustang";

import "../components/header-element.ts";
import "../components/greeting-banner.ts";
import "../components/health-planner-card.ts";

export class HomeViewElement extends LitElement {
  @state()
  loggedIn = false;

  @state()
  userid?: string;

  private _authObserver = new Observer<Auth.Model>(this, "profile:auth");

  connectedCallback() {
    super.connectedCallback();

    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth;
      if (user?.authenticated) {
        this.loggedIn = true;
        this.userid = user.username;
      } else {
        this.loggedIn = false;
        this.userid = undefined;
      }
    });
  }

  static styles = css`


health-planner-card {
  grid-column: span 4; /* each card takes up 4 of 12 columns */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  border-radius: var(--size-radius-medium);
   height: 100%; /* 👈 Fill the grid row height */
  transition: transform 0.2s ease;
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
    }

    .card-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    .card-link:hover {
      box-shadow: 0 8px 25px rgba(115, 6, 12, 0.4);
      background: linear-gradient(135deg, var(--bright-red) 0%, var(--dark-red) 100%);
      color: var(--color-text);
      font-size: 1.1rem;
    }

    .card-link:hover::before {
      left: 100%;
    }

    .card-link:active {
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
  `;

  render() {
    if (!this.loggedIn || !this.userid) {
      return html`
        <section class="login-warning">
          <h1>Sign in to continue</h1>
          <p> click link below to sign in</p>
          ${this.renderSignInButton()}
        </section>
      `;
    }

    return html`
      <main class="main-grid">
        <health-planner-card class="card" category="Food">
          <a slot="link-1" class="card-link" href="/app/mealplan/${this.userid}">
            <svg class="icon"><use href="/icons/food.svg#mealplan" /></svg>
            Meal Plan
          </a>
          <a slot="link-2" class="card-link" href="/app/recipes/${this.userid}">
            <svg class="icon"><use href="/icons/food.svg#pot" /></svg>
            Recipes
          </a>
        </health-planner-card>

        <health-planner-card class="card" category="Fitness">
          <a slot="link-1" class="card-link" href="/app/workoutcalendar">
            <svg class="icon"><use href="/icons/fitness.svg#calendar" /></svg>
            Workout Calendar
          </a>
          <a slot="link-2" class="card-link" href="/app/exerciseoptions/${this.userid}">
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
    `;
  }

  renderSignInButton() {
    return html`
      <a class="login-button" @click=${() => location.assign("/login.html")}>
        Sign In
      </a>
    `;
  }
}
