import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";
import { Observer, Auth } from "@calpoly/mustang";
import "../components/backbutton";
import mongoose from "mongoose";

interface MealPlan {
  _id?: string;
  userid: mongoose.Types.ObjectId;
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  snack: string;
}

export class MealplanViewElement extends LitElement {
  @state() userid?: string;
  @state() loading = true;
  @state() error: string | null = null;
  @state() mealplans: MealPlan[] = [];
  @state() editingCell: { day: string; meal: string } | null = null;
  @state() editingValue = "";

  private _authObserver = new Observer<Auth.Model>(this, "profile:auth");

  connectedCallback() {
    super.connectedCallback();

    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth;

      if (user?.authenticated) {
        this.fetchUserObjectId(user.username);
      } else {
        this.userid = undefined;
        this.loading = false;
        this.error = "User not authenticated";
      }
    });
  }

  async fetchUserObjectId(username: string) {
    try {
      const res = await fetch(`/api/user/${username}`, {
        credentials: "include",
        headers: { "Content-Type": "application/json" }
      });

      if (!res.ok) throw new Error(`User fetch failed`);

      const data = await res.json();
      this.userid = data._id?.$oid || data._id;

      if (this.userid) {
        await this.initializeMealPlan();
        this.fetchMealPlans(this.userid);
      }
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to fetch user";
      this.loading = false;
    }
  }

  async initializeMealPlan() {
    if (!this.userid) return;
    
    try {
      await fetch(`/api/mealplans/${this.userid}/initialize`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" }
      });
    } catch (err) {
      console.warn("Failed to initialize meal plan:", err);
    }
  }

  async fetchMealPlans(userid: string) {
    this.loading = true;
    try {
      const res = await fetch(`/api/mealplans/${userid}`, {
        credentials: "include"
      });
      if (!res.ok) throw new Error("Failed to load meal plans");

      const data = await res.json();
      this.mealplans = data;
      this.loading = false;
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Error loading meal plans";
      this.loading = false;
    }
  }

  async updateMealPlan(day: string, meal: string, value: string) {
    if (!this.userid) return;

    try {
      const res = await fetch(`/api/mealplans/${this.userid}/day/${day}`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [meal]: value })
      });

      if (!res.ok) throw new Error("Failed to update meal plan");

      // Refresh the meal plans
      this.fetchMealPlans(this.userid);
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Error updating meal plan";
    }
  }

  startEditing(day: string, meal: string, currentValue: string) {
    this.editingCell = { day, meal };
    this.editingValue = currentValue;
  }

  cancelEditing() {
    this.editingCell = null;
    this.editingValue = "";
  }

  async saveEditing() {
    if (!this.editingCell) return;

    await this.updateMealPlan(
      this.editingCell.day,
      this.editingCell.meal,
      this.editingValue
    );

    this.editingCell = null;
    this.editingValue = "";
  }

  handleInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.editingValue = input.value;
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      this.saveEditing();
    } else if (e.key === "Escape") {
      this.cancelEditing();
    }
  }

  getMealForDay(day: string, meal: string): string {
    const mealplan = this.mealplans.find(mp => mp.day === day);
    return mealplan ? mealplan[meal as keyof MealPlan] as string : "";
  }

  renderCell(day: string, meal: string) {
    const value = this.getMealForDay(day, meal);
    const isEditing = this.editingCell?.day === day && this.editingCell?.meal === meal;

    if (isEditing) {
      return html`
        <input
          type="text"
          .value=${this.editingValue}
          @input=${this.handleInputChange}
          @keydown=${this.handleKeyDown}
          @blur=${this.saveEditing}
          class="edit-input"
          autofocus
        />
      `;
    }

    return html`
      <span 
        class="editable-cell" 
        @click=${() => this.startEditing(day, meal, value)}
        title="Click to edit"
      >
        ${value || html`<span class="placeholder">Click to add</span>`}
      </span>
    `;
  }

  static styles = css`
    .table-wrapper {
      overflow-x: auto;
      margin: 1rem 0;
      max-width: 100%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      background: white;
      
    }

    table {
      border-collapse: collapse;
      width: 100%;
      font-family: Arial, sans-serif;
    }

    thead {
      background-color: #333;
      color: white;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 0.5rem 1rem;
      text-align: left;
      position: relative;
    }

    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tbody tr:hover {
      background-color: #f1f1f1;
    }

    .editable-cell {
      cursor: pointer;
      display: block;
      min-height: 1.2em;
      padding: 0.25rem;
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    .editable-cell:hover {
      background-color: rgba(0, 123, 255, 0.1);
    }

    .placeholder {
      color: #999;
      font-style: italic;
    }

    .edit-input {
      width: 100%;
      border: 2px solid #007bff;
      border-radius: 4px;
      padding: 0.25rem;
      font-size: inherit;
      font-family: inherit;
    }

    .edit-input:focus {
      outline: none;
      border-color: #0056b3;
    }

    .loading, .error {
      text-align: center;
      padding: 2rem;
      margin: 1rem 0;
    }

    .error {
      color: #dc3545;
      background-color: #f8d7da;
      border: 1px solid #f5c6cb;
      border-radius: 4px;
    }

    .loading {
      color: #6c757d;
    }

    .controls {
      margin-bottom: 1rem;
    }

    .refresh-button {
      padding: 0.5rem 1rem;
      background: var(--color-accent, #6c757d);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
    }

    .refresh-button:hover {
      opacity: 0.8;
    }

    .instructions {
      background-color: #FFF4DE;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: #495057;
    }
  `;

  render() {
    if (this.loading) {
      return html`
        <back-button></back-button>
        <div class="loading">Loading meal plans...</div>
      `;
    }

    if (this.error) {
      return html`
        <back-button></back-button>
        <div class="error">Error: ${this.error}</div>
      `;
    }

    if (!this.userid) {
      return html`
        <back-button></back-button>
        <div class="error">User not authenticated</div>
      `;
    }

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return html`
      <back-button></back-button>
      
      <div class="controls">
        <button class="refresh-button" @click=${() => this.fetchMealPlans(this.userid!)}>
          Refresh
        </button>
      </div>

      <div class="instructions">
       Click on any cell to edit your meal plan. Press Enter to save or Escape to cancel.
      </div>

      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
              <th>Snack</th>
            </tr>
          </thead>
          <tbody>
            ${days.map(day => html`
              <tr>
                <td><strong>${day}</strong></td>
                <td>${this.renderCell(day, "breakfast")}</td>
                <td>${this.renderCell(day, "lunch")}</td>
                <td>${this.renderCell(day, "dinner")}</td>
                <td>${this.renderCell(day, "snack")}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `;
  }
}