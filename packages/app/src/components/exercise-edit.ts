import { html, LitElement, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface ExerciseOption {
  userid: string;
  type: string;
  activity: string;
}

@customElement("exercise-edit")
export class ExerciseOptionFormElement extends LitElement {
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
        <h2>Add New Exercise</h2>
        ${this._message
          ? html`<div class="message ${this._message.includes('Error') ? 'error' : 'success'}">${this._message}</div>`
          : ''}
        <form @submit=${this.handleSubmit}>
          <label>
            Exercise Type:
            <input
              name="type"
              type="text"
              required
              placeholder="e.g., Cardio, Strength"
              ?disabled=${this._isSubmitting}
            />
          </label>
          <label>
            Activity:
            <input
              name="activity"
              type="text"
              required
              placeholder="e.g., Running, Push-ups"
              ?disabled=${this._isSubmitting}
            />
          </label>
          <button type="submit" ?disabled=${this._isSubmitting}>
            ${this._isSubmitting ? 'Saving Exercise...' : 'Save Exercise'}
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

    const type = (formData.get("type") as string)?.trim();
    const activity = (formData.get("activity") as string)?.trim();

    if (!type || !activity) {
      this._message = "Error: Please fill in all fields";
      return;
    }

    this._isSubmitting = true;
    this._message = "";

    const exerciseOption: ExerciseOption = {
      userid: this.userid,
      type,
      activity,
    };

    try {
      console.log("Saving exercise option:", exerciseOption);

      const response = await fetch(`/api/exerciseoptions/${this.userid}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  credentials: "include",
  body: JSON.stringify(exerciseOption),
});

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to save exercise: ${response.status} ${errorText}`);
      }

      const savedExercise = await response.json();
      console.log("Exercise saved successfully:", savedExercise);

      this._message = "Exercise saved successfully!";
      form.reset();

      this.dispatchEvent(new CustomEvent("exercise-saved", {
        detail: { exercise: savedExercise },
        bubbles: true,
        composed: true,
      }));

      setTimeout(() => {
        this._message = "";
      }, 3000);
    } catch (error) {
      console.error("Failed to save exercise:", error);
      this._message = `Error: ${error instanceof Error ? error.message : "Unknown error occurred"}`;
      setTimeout(() => {
        this._message = "";
      }, 5000);
    } finally {
      this._isSubmitting = false;
    }
  }
}
