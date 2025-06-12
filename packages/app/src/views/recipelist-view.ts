import { html, LitElement, css } from "lit";
import { state } from "lit/decorators.js";
import { Observer, Auth } from "@calpoly/mustang";
import "../components/backbutton";
import "../components/recipe-edit";
import mongoose from "mongoose";

interface Recipe {
  userid: mongoose.Types.ObjectId;
  title: string;
  ingredients: string[];
  instructions: string;
}

export class RecipeListViewElement extends LitElement {
  @state() userid?: string;
  @state() loading = true;
  @state() error: string | null = null;
  @state() recipes: Recipe[] = [];
  @state() showAddForm = false;

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

    this.addEventListener("recipe-saved", this.handleRecipeSaved as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("recipe-saved", this.handleRecipeSaved as EventListener);
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
        this.fetchRecipes(this.userid);
      }
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to fetch user";
      this.loading = false;
    }
  }

  async fetchRecipes(userid: string) {
    this.loading = true;
    try {
      const res = await fetch(`/api/recipes/${userid}`);
      if (!res.ok) throw new Error("Failed to load recipes");

      const data = await res.json();
      this.recipes = data;
      this.loading = false;
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Error loading recipes";
      this.loading = false;
    }
  }

  async refreshRecipes() {
    if (this.userid) {
      await this.fetchRecipes(this.userid);
    }
  }

  handleRecipeSaved = () => {
    console.log("Recipe saved, refreshing list...");
    this.showAddForm = false;
    this.refreshRecipes();
  };

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  static styles = css`
    .page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
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
      transition: all ease-in-out 0.2s;
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
      background: var(--color-accent, rgb(88, 93, 99));
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

    .recipe-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      justify-content: center;
    }

    .recipe {
      flex: 1 1 calc(33% - 1.5rem);
      max-width: calc(33% - 1.5rem);
      min-width: 280px;
      background: var(--color-surface);
      padding: 1.5rem;
      border-radius: var(--size-radius-medium);
      box-shadow: var(--shadow-sm);
      background-color: #f9f9f9;
    }

    @media (max-width: 900px) {
      .recipe {
        flex: 1 1 calc(50% - 1rem);
        max-width: calc(50% - 1rem);
      }
    }

    @media (max-width: 600px) {
      .recipe {
        flex: 1 1 100%;
        max-width: 100%;
      }
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
  `;

  render() {
    return html`
      <back-button></back-button>
      <main class="page">
        ${this.userid
          ? html`
              <div class="controls">
                <button
                  class="add-recipe-button ${this.showAddForm ? "active" : ""}"
                  @click=${this.toggleAddForm}
                >
                  ${this.showAddForm ? "✕ Cancel" : "+ Add New Recipe"}
                </button>
                <button class="refresh-button" @click=${this.refreshRecipes}>
                  Refresh
                </button>
              </div>

              <div class="add-form-container ${this.showAddForm ? "visible" : "hidden"}">
                <recipe-edit userid=${this.userid}></recipe-edit>
              </div>
            `
          : ""}

        ${this.loading
          ? html`<div class="loading">Loading recipes...</div>`
          : this.error
          ? html`<div class="error">Error: ${this.error}</div>`
          : !this.userid
          ? html`<div class="error">No user ID available</div>`
          : this.recipes.length === 0
          ? html`<div class="empty">No recipes found. Click "Add New Recipe" to get started!</div>`
          : html`
              <div class="recipe-list">
                ${this.recipes.map(
                  (recipe) => html`
                    <section class="recipe">
                      <h3>${recipe.title}</h3>
                      <p><strong>Ingredients:</strong></p>
                      <ul>
                        ${recipe.ingredients.map((item) => html`<li>${item}</li>`)}
                      </ul>
                      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                    </section>
                  `
                )}
              </div>
            `}
      </main>
    `;
  }
}