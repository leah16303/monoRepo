import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("workout-schedule")
export class WorkoutScheduleElement extends LitElement {
  @property({ type: Array })
  data: Array<{ day: string; activity: string; duration: string }> = [];



  render() {
    return html`
      <div class="main-content">
        <table class="exercise-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Exercise</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            ${this.data.map(
              (entry) => html`
                <tr>
                  <td>${entry.day}</td>
                  <td>${entry.activity}</td>
                  <td>${entry.duration}</td>
                </tr>
              `
            )}
          </tbody>
        </table>
      </div>
    `;
  }

  static styles = css`
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
      color: var(--color-text-heading);
      font-weight: var(--font-display-bold);
    }

    .exercise-table td {
      background-color: var(--color-table);
    }
  `;
}