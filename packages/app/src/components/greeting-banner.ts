import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";
import { Auth, Observer} from "@calpoly/mustang";


export class GreetingBanner extends LitElement {
  static styles = css`
    .greeting {
      padding: 1rem;
      font-size: 1.rem;
      color: var(--color-text);
    }

    .date {
      font-size: 1rem;
      color: var(--dark-black-text );;
    }
  `;

  _authObserver = new Observer<Auth.Model>(this, "profile:auth");

  @state()
  userid?: string;

  connectedCallback() {
    super.connectedCallback();

    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth;
      this.userid = user?.authenticated ? user.username : undefined;
    });
  }

  render() {
    const today = new Date().toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return html`
      <div class="greeting">

      <p> Hello ${this.userid ?? "Guest"}! <p>
        
        <div class="date">${today}</div>
      </div>
    `;
  }
}
