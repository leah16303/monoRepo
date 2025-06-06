import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { History } from "@calpoly/mustang";

@customElement("back-button")
export class BackButtonElement extends LitElement {
  static styles = css`
    button {
      background: var(--color-button-background, #eee);
      border: none;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
      margin-bottom: 1rem;
      border-radius: 4px;
    }

    button:hover {
      background: var(--color-button-hover, #ddd);
    }
  `;

  render() {
    return html`
      <button @click=${this.goBack}>← Back to Dashboard</button>
    `;
  }

  goBack() {
    History.dispatch(this, "history/navigate", { href: "/app" });
  }
}
