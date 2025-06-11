import { html, LitElement, css } from "lit";
import { state } from "lit/decorators.js";
import { Observer, Auth } from "@calpoly/mustang";
import "../components/backbutton";
import "../components/exercise-edit";
import mongoose from "mongoose";


 interface ExerciseOption{
  userid: mongoose.Types.ObjectId;
  type: string;
  activity: string;
}

export class ExerciseOptionListViewElement extends LitElement {
  @state() userid?: string;
  @state() loading = true;
  @state() error: string | null = null;
  @state() exerciseoptions: ExerciseOption[] = [];
  @state() showAddForm = false;

  private _authObserver = new Observer<Auth.Model>(this, "profile:auth");

  private groupedByType(): Record<string, ExerciseOption[]> {
  const grouped: Record<string, ExerciseOption[]> = {};
  for (const option of this.exerciseoptions) {
    if (!grouped[option.type]) {
      grouped[option.type] = [];
    }
    grouped[option.type].push(option);
  }
  return grouped;
}


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

    // Listen for custom events from recipe-edit component
    this.addEventListener('exercise-saved', this.handleExerciseSaved as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('exercise-saved', this.handleExerciseSaved as EventListener);
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
        this.fetchExercises(this.userid);
      }
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to fetch user";
      this.loading = false;
    }
  }

  async fetchExercises(userid: string) {
    this.loading = true;
    try {
      const res = await fetch(`/api/exerciseoptions/${userid}`);
      if (!res.ok) throw new Error("Failed to load exercises");

      const data = await res.json();
      this.exerciseoptions = data;
      this.loading = false;
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Error loading exercises";
      this.loading = false;
    }
  }

  // Method to refresh recipes - can be called externally
  async refreshExercises() {
    if (this.userid) {
      await this.fetchExercises(this.userid);
    }
  }

  // Handle the custom event when a recipe is saved
  handleExerciseSaved = () => {
    console.log('Exercise saved, refreshing list...');
    this.showAddForm = false; // Close the form after saving
    this.refreshExercises();
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  static styles = css`
    .page {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .recipe {
      margin-bottom: 2rem;
      background: var(--color-surface);
      padding: 1.5rem;
      border-radius: var(--size-radius-medium);
      box-shadow: var(--shadow-sm);
    }

    .recipe ul {
      padding-left: 1.5rem;
    }

    .error,
    .loading,
    .empty {
      text-align: center;
      padding: 1rem;
    }

    .controls {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .add-recipe-button {
      padding: 0.75rem 1.5rem;
      background: var(--bright-red);
      color: white;
      border: none;
      border-radius: var(--size-radius-small, 4px);
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      transition: all  ease-in-out 0.2s;
    }

    .add-recipe-button:hover {
      transform: scale(1.04);
      background: #c82333;
    }

    .add-recipe-button.active {
      background: #dc3545;
    }

    .add-recipe-button.active:hover {
      background: #c82333;
    }

    .refresh-button {
      padding: 0.75rem 1.5rem;
      background: var(--color-accent,rgb(88, 93, 99));
      color: white;
      border: none;
      border-radius: var(--size-radius-small, 4px);
      cursor: pointer;
      font-size: 1rem;
      transition: opacity 0.2s;
    }

    .refresh-button:hover {
      opacity: 0.8;
    }

    .add-form-container {
      margin-bottom: 2rem;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
    }

    .add-form-container.hidden {
      max-height: 0;
      margin-bottom: 0;
    }

    .add-form-container.visible {
      max-height: 1000px;
    }
  `;

  render() {
    return html`
      <back-button></back-button>
      <main class="page">
        ${this.userid ? html`
          <div class="controls">
            <button 
              class="add-recipe-button ${this.showAddForm ? 'active' : ''}" 
              @click=${this.toggleAddForm}
            >
              ${this.showAddForm ? '✕ Cancel' : '+ Add New Exercise'}
            </button>
            <button class="refresh-button" @click=${this.refreshExercises}>
             Refresh
            </button>
          </div>

          <div class="add-form-container ${this.showAddForm ? 'visible' : 'hidden'}">
            <exercise-edit userid=${this.userid}></exercise-edit>
          </div>
        ` : ''}
        
        ${this.loading
          ? html`<div class="loading">Loading exercises...</div>`
          : this.error
          ? html`<div class="error">Error: ${this.error}</div>`
          : !this.userid
          ? html`<div class="error">No user ID available</div>`
          : this.exerciseoptions.length === 0
          ? html`<div class="empty">No recipes found. Click "Add New Exercse" to get started!</div>`
          : Object.entries(this.groupedByType()).map(
          ([type, activities]) => html`
            <section class="recipe">
              <h2>${type}</h2>
              <ul>
                ${activities.map(
                  (ex) => html`<li>${ex.activity}</li>`
                )}
              </ul>
            </section>
          `
      )}
      </main>
    `;
  }
}