import { LitElement, html, css } from "lit";

export class WorkoutScheduleViewElement extends LitElement {
  static styles = css`
  `;

  render() {
    return html`
      
        <header class="header">
          <h1>Workout Calendar</h1>
          <h3><a href="index.html">← Back to Planner</a></h3>
        </header>

        <main class="page">
          <!-- Keep the workout-schedule custom element, pass the src attribute -->
          <workout-schedule src="/data/schedule.json"></workout-schedule>
        </main>
      
    `;
  }
}
