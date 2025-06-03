import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface WorkoutEntry {
  day: string;
  activity: string;
  duration: string;
}

@customElement("workout-schedule")
export class WorkoutScheduleElement extends LitElement {
  @property({ type: Array })
  private entries: WorkoutEntry[]= [];


  @property()
  src?: string;

  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }

   
  hydrate(src: string) {
    fetch(src)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((json: object) => {
        if (json) {
          this.entries = json as WorkoutEntry[];
          console.log("Loaded entries:", this.entries);
        }
      })
      .catch((err) => {
        console.error("Error loading JSON data:", err);
      });
  }

  



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
            ${this.entries.map(
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