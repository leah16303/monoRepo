import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";


interface WorkoutEntry {
  day: string;
  activity: string;
  duration: string;
}

interface WorkoutWeek {
  userid: string;
  entries: WorkoutEntry[];
}

@customElement("workout-schedule")
export class WorkoutScheduleElement extends LitElement {
  @property({ type: Array })
  private entries: WorkoutEntry[] = [];

  @property()
  src?: string;

  // This lifecycle method is called whenever a reactive property changes
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    
    // If src property changed and has a value, fetch the data
    if (changedProperties.has('src') && this.src) {
      this.hydrate(this.src);
    }
  }

  hydrate(src: string) {
    fetch(src)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((json: WorkoutWeek) => {
        if (json && json.entries) {
          // Extract the entries array from the WorkoutWeek object
          this.entries = json.entries;
          console.log("Loaded entries:", this.entries);
        } else {
          console.warn("No entries found in workout week data");
          this.entries = [];
        }
      })
      .catch((err) => {
        console.error("Error loading JSON data:", err);
        this.entries = [];
      });
  }

  render() {
    return html`
      <div class="main-content">
        ${this.entries.length > 0 
          ? html`
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
          `
          : html`
          <p>Your schedule is empty :(</p>
        <p>Add your first schedule item now</p>
        <button type="button" class = rbutton > + </button>`
          
        }
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

    .rbutton {
      background-color: var(--dark-red);
      color: white;
      border: none;
      padding: 0.5rem 1rem; 
      transition: transform 0.5s;
    }

    .rbutton:hover {
      transform: scale(1.1);
    }

  `;
}