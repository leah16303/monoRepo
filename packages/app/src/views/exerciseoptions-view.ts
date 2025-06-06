import { html, css } from "lit";
import { View } from "@calpoly/mustang";
import { Person } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";
import { state, property } from "lit/decorators.js";
import "../components/backbutton";

export class ExerciseOptionsViewElement extends View<Model, Msg> {
  @property({ attribute: "user-id" })
  userid?: string;

  @state()
  get profile(): Person | undefined {
    return this.model.profile;
  }

  static styles = css`
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
  `;

  render() {
    const exercises = [
      ["Running", "Cardiovascular Activity"],
      ["Cycling", "Cardiovascular Activity"],
      ["Swimming", "Cardiovascular Activity"],
      ["Jump Rope", "Cardiovascular Activity"],
      ["Push-Ups", "Strength Training"],
      ["Squats", "Strength Training"],
      ["Deadlifts", "Strength Training"],
      ["Bench Press", "Strength Training"],
    ];

    // Group exercises by category
    const grouped = exercises.reduce((acc, [name, category]) => {
      if (!acc[category]) acc[category] = [];
      acc[category].push(name);
      return acc;
    }, {} as Record<string, string[]>);

    return html`
      <back-button></back-button>

      ${Object.entries(grouped).map(
        ([category, names]) => html`
          <section class="category-group" data-category="${category}">
            <h2 class="category-title">${category}</h2>
            <div class="exercise-grid">
              ${names.map(
                (name) => html`
                  <div class="exercise-card" tabindex="0" role="button" aria-label="${name}, ${category}">
                    <div class="exercise-name">${name}</div>
                    <div class="exercise-category">${category}</div>
                  </div>
                `
              )}
            </div>
          </section>
        `
      )}
    `;
  }

  static get observedAttributes() {
    return ["user-id"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback?.(name, oldValue, newValue);
    if (name === "user-id" && oldValue !== newValue && newValue) {
      this.dispatchMessage(["profile/select", { userid: newValue }]);
    }
  }
}
