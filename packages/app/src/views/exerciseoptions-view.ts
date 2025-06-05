// import { LitElement, html, css } from "lit";
import { View } from "@calpoly/mustang";
import { Person } from "server/src/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class ExerciseOptionsViewElement extends  View<Model, Msg> {
@property({attribute: "user-id"})
  userid?: string;

  @state()
  get profile(): Person | undefined {
    return this.model.profile;
  }

  static styles = css`
    
  .main-content {
    display: grid;
    place-items: center;
    padding: var(--size-spacing-large);
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

  render() {
    return html`
      <main class="main-content">
        <table class="exercise-table">
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Running</td><td>Cardiovascular Activity</td></tr>
            <tr><td>Cycling</td><td>Cardiovascular Activity</td></tr>
            <tr><td>Swimming</td><td>Cardiovascular Activity</td></tr>
            <tr><td>Jump Rope</td><td>Cardiovascular Activity</td></tr>
            <tr><td>Push-Ups</td><td>Strength Training</td></tr>
            <tr><td>Squats</td><td>Strength Training</td></tr>
            <tr><td>Deadlifts</td><td>Strength Training</td></tr>
            <tr><td>Bench Press</td><td>Strength Training</td></tr>
          </tbody>
        </table>
      </main>
    `;
  }


  attributeChangedCallback(
  name: string,
  oldValue: string,
  newValue: string
) {
  super.attributeChangedCallback(name, oldValue, newValue);
  if (
    name === "user-id" &&
    oldValue !== newValue &&
    newValue
  ) {
    this.dispatchMessage([
      "profile/select",
      { userid: newValue }
    ]);
  }
}
}
