import {  html, css } from "lit";
import { View } from "@calpoly/mustang";
import { Person } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";
import { state, property } from "lit/decorators.js";
import  "../components/backbutton";

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
    font-family: var(--font-family, "Segoe UI", sans-serif);
    color: var(--color-text, #333);
    background-color: var(--color-background, #f9f9f9);
  }

  back-button {
    display: block;
    margin-bottom: 1.5rem;
  }

  .main-content {
    display: flex;
    justify-content: center;
  }

  .exercise-table {
    width: 100%;
    max-width: 800px;
    border-collapse: collapse;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    overflow: hidden;
    font-size: 1rem;
  }

  .exercise-table thead {
    background-color: var(--color-primary, #4CAF50);
    color: white;
    font-weight: bold;
  }

  .exercise-table th,
  .exercise-table td {
    padding: 1rem 1.25rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .exercise-table tr:hover td {
    background-color: #f3f3f3;
    transition: background-color 0.3s ease;
  }

  .exercise-table td:last-child,
  .exercise-table th:last-child {
    text-align: right;
  }

  @media (max-width: 600px) {
    .exercise-table,
    .exercise-table thead,
    .exercise-table tbody,
    .exercise-table th,
    .exercise-table td,
    .exercise-table tr {
      display: block;
    }

    .exercise-table thead {
      display: none;
    }

    .exercise-table td {
      padding: 0.75rem 1rem;
      position: relative;
      border-bottom: 1px solid #ddd;
    }

    .exercise-table td::before {
      content: attr(data-label);
      font-weight: bold;
      display: block;
      margin-bottom: 0.25rem;
      color: #666;
    }
  }
`;


  render() {
    return html`
    <back-button></back-button>
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

  static get observedAttributes() {
    return ["user-id"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback?.(name, oldValue, newValue);
    if (name === "user-id" && oldValue !== newValue && newValue) {
      this.dispatchMessage([
        "profile/select",
        { userid: newValue }
      ]);
    }
  }
}
