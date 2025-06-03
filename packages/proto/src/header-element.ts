import { LitElement, html } from "lit";
import {state } from "lit/decorators.js";
import { Auth, Observer, Events } from "@calpoly/mustang";



export class HeaderElement extends LitElement {
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
      ${this.loggedIn
        ? this.renderSignOutButton()
        : this.renderSignInButton()}
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
      <a href="/login.html">
        Sign In…
      </a>
    `;
  }
}
