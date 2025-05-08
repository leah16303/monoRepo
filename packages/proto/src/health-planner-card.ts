// src/health-planner-card.ts
import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

type Category = 'Food' | 'Fitness' | 'Mental Health';

export class HealthPlannerCardElement extends LitElement {
  @property({ type: String })
  category?: Category;

  override render() {
    return html`
      <section class="card">
        <h2>${this.category}</h2>
        <div class="links">
          <slot name="link-1"></slot>
          <slot name="link-2"></slot>
        </div>
      </section>
    `;
  }

  static styles = [
    reset.styles,
    css`
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
    `
  ];
}
