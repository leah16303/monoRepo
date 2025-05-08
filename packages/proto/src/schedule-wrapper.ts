import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";

interface WorkoutEntry {
  day: string;
  activity: string;
  duration: string;
}

export class WorkoutScheduleWrapper extends LitElement {
  @property()
  src?: string;

  @state()
  private entries: WorkoutEntry[] = [];

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
        }
      })
      .catch((err) => {
        console.error("Error loading JSON data:", err);
      });
  }
  

  render() {
    return html`
      <workout-schedule>
        ${this.entries.map(
          (entry) => html`
            <table-entry
              day=${entry.day}
              activity=${entry.activity}
              duration=${entry.duration}
            ></table-entry>
          `
        )}
      </workout-schedule>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}

