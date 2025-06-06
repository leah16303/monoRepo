import { html, LitElement, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface Recipe {
  userid: string;
  title: string;
  ingredients: string[];
  instructions: string;
}

@customElement("recipe-edit")
export class RecipeFormElement extends LitElement {
  @property()
  userid = "";

  @state()
  private _isSubmitting = false;

  @state()
  private _message = "";

  static styles = css`
    .page {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem;
    }

    .message {
      padding: 10px;
      margin: 10px 0;
      border-radius: 4px;
    }
    
    .message.success {
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }
    
    .message.error {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }
    
    form {
      background: var(--color-surface, #fff);
      padding: 1.5rem;
      border-radius: var(--size-radius-medium, 8px);
      box-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.1));
    }
    
    label {
      display: block;
      margin: 15px 0;
      font-weight: bold;
    }
    
    input, textarea {
      width: 100%;
      padding: 8px 12px;
      margin-top: 4px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-family: inherit;
      font-size: 14px;
    }
    
    textarea {
      min-height: 100px;
      resize: vertical;
    }
    
    button {
      padding: 12px 24px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      margin-top: 10px;
    }
    
    button:hover:not(:disabled) {
      background-color: #0056b3;
    }
    
    button:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
      opacity: 0.7;
    }
  `;

  render() {
    return html`
      <div class="page">
        <h2>Add New Recipe</h2>
        ${this._message ? html`<div class="message ${this._message.includes('Error') ? 'error' : 'success'}">${this._message}</div>` : ''}
        
        <form @submit=${this.handleSubmit}>
          <label>
            Recipe Title:
            <input 
              name="title" 
              type="text"
              required 
              placeholder="Enter recipe title"
              ?disabled=${this._isSubmitting}
            />
          </label>
          
          <label>
            Ingredients (comma-separated):
            <input 
              name="ingredients" 
              type="text"
              required 
              placeholder="flour, sugar, eggs, milk"
              ?disabled=${this._isSubmitting}
            />
          </label>
          
          <label>
            Instructions:
            <textarea 
              name="instructions" 
              required
              placeholder="Describe how to make this recipe..."
              ?disabled=${this._isSubmitting}
            ></textarea>
          </label>
          
          <button type="submit" ?disabled=${this._isSubmitting}>
            ${this._isSubmitting ? 'Saving Recipe...' : 'Save Recipe'}
          </button>
        </form>
      </div>
    `;
  }

  async handleSubmit(event: Event) {
    event.preventDefault();
    
    if (!this.userid) {
      this._message = "Error: No user ID available";
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const title = formData.get('title') as string;
    const ingredientsString = formData.get('ingredients') as string;
    const instructions = formData.get('instructions') as string;

    if (!title || !ingredientsString || !instructions) {
      this._message = "Error: Please fill in all fields";
      return;
    }

    this._isSubmitting = true;
    this._message = "";

    const recipe: Recipe = {
      userid: this.userid,
      title: title.trim(),
      ingredients: ingredientsString.split(',').map(s => s.trim()).filter(s => s.length > 0),
      instructions: instructions.trim()
    };

    try {
      console.log('Saving recipe:', recipe);
      
      const response = await fetch(`/api/recipes/${this.userid}`, {
        method: "POST", // Try POST first, change to PUT if your API uses PUT
        headers: {
          "Content-Type": "application/json",
          // Add any auth headers your API needs
        },
        credentials: "include", // Include cookies for authentication
        body: JSON.stringify(recipe)
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to save recipe: ${response.status} ${errorText}`);
      }

      const savedRecipe = await response.json();
      console.log('Recipe saved successfully:', savedRecipe);
      
      this._message = "Recipe saved successfully!";
      form.reset();
      
      // Dispatch custom event to notify parent components
      this.dispatchEvent(new CustomEvent('recipe-saved', {
        detail: { recipe: savedRecipe },
        bubbles: true,
        composed: true
      }));
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        this._message = "";
      }, 3000);

    } catch (error) {
      console.error("Failed to save recipe:", error);
      this._message = `Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`;
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        this._message = "";
      }, 5000);
    } finally {
      this._isSubmitting = false;
    }
  }
}