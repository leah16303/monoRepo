import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Observer, Auth } from "@calpoly/mustang";

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
  @property()
  src?: string;

  @state()
  private entries: WorkoutEntry[] = [];

  @state()
  private editingIndex: number | null = null;

  @state()
  private editingField: keyof WorkoutEntry | null = null;

  @state()
  private editingValue: string = "";

  @state()
  private userid?: string;

  private _authObserver = new Observer<Auth.Model>(this, "profile:auth");

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth;
      if (user?.authenticated) {
        this.fetchUserObjectId(user.username);
      } else {
        this.userid = undefined;
      }
    });
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has("src") && this.src) {
      this.hydrate(this.src);
    }
  }

  async fetchUserObjectId(username: string) {
    try {
      const res = await fetch(`/api/user/${username}`, {
        credentials: "include",
        headers: { "Content-Type": "application/json" }
      });

      if (!res.ok) throw new Error("User fetch failed");

      const data = await res.json();
      this.userid = data._id?.$oid || data._id;

      if (this.src) {
        this.hydrate(this.src);
      }
    } catch (err) {
      console.error("Failed to fetch user:", err);
    }
  }

  hydrate(src: string) {
    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        return res.json();
      })
      .then((json: WorkoutWeek) => {
        this.entries = json.entries || [];
      })
      .catch((err) => {
        console.error("Error loading JSON data:", err);
        this.entries = [];
      });
  }

  addEntry() {
    const newEntry: WorkoutEntry = {
      day: "New Day",
      activity: "New Activity",
      duration: "0 min"
    };
    this.entries = [...this.entries, newEntry];

    if (this.userid) {
      fetch(`/api/workouts/${this.userid}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(newEntry)
      }).catch(err => console.error("Failed to add workout:", err));
    }
  }

  deleteEntry(index: number) {
    const entryToDelete = this.entries[index];
    this.entries = this.entries.filter((_, i) => i !== index);

    if (this.userid && entryToDelete.day) {
      fetch(`/api/workouts/${this.userid}/day/${entryToDelete.day}`, {
        method: "DELETE",
        credentials: "include"
      }).catch(err => console.error("Failed to delete workout:", err));
    }
  }

  startEditing(index: number, field: keyof WorkoutEntry, value: string) {
    this.editingIndex = index;
    this.editingField = field;
    this.editingValue = value;
  }

  cancelEditing() {
    this.editingIndex = null;
    this.editingField = null;
    this.editingValue = "";
  }

  async saveEditing() {
    if (this.editingIndex === null || this.editingField === null) return;

    const updatedEntries = [...this.entries];
    const entry = { ...updatedEntries[this.editingIndex] };
    entry[this.editingField] = this.editingValue;
    updatedEntries[this.editingIndex] = entry;
    this.entries = updatedEntries;

    if (this.userid) {
      fetch(`/api/workouts/${this.userid}/day/${entry.day}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(entry)
      }).catch(err => console.error("Failed to update workout:", err));
    }

    this.cancelEditing();
  }

  handleInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.editingValue = input.value;
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") this.saveEditing();
    else if (e.key === "Escape") this.cancelEditing();
  }

  renderCell(entry: WorkoutEntry, index: number, field: keyof WorkoutEntry) {
    const isEditing = this.editingIndex === index && this.editingField === field;
    const value = entry[field];

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
        @click=${() => this.startEditing(index, field, value)}
        title="Click to edit"
      >
        ${value || html`<span class="placeholder">Click to add</span>`}
      </span>
    `;
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${this.entries.map((entry, index) => html`
                  <tr>
                    <td>${this.renderCell(entry, index, "day")}</td>
                    <td>${this.renderCell(entry, index, "activity")}</td>
                    <td>${this.renderCell(entry, index, "duration")}</td>
                    <td>
                      <button @click=${() => this.deleteEntry(index)} class="delete-button">🗑</button>
                    </td>
                  </tr>
                `)}
              </tbody>
            </table>
            <button type="button" class="rbutton" @click=${this.addEntry}>+ Add Row</button>
          `
          : html`
            <p>Your schedule is empty :(</p>
            <p>Add your first schedule item now</p>
            <button type="button" class="rbutton" @click=${this.addEntry}>+</button>
          `
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
      gap: 1rem;
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
      color: var(--dark-red);
      font-weight: var(--font-display-bold);
    }

    .exercise-table td {
      background-color: var(--color-card);
    }

    .rbutton {
      background-color: var(--dark-red);
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
      border-radius: 4px;
      font-size: 1rem;
    }

    .rbutton:hover {
      transform: scale(1.05);
    }

    .delete-button {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      color: #c00;
    }

    .delete-button:hover {
      color: #900;
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
      background-color: rgba(200, 0, 0, 0.05);
    }

    .edit-input {
      width: 100%;
      border: 2px solid #007bff;
      border-radius: 4px;
      padding: 0.25rem;
      font-size: inherit;
      font-family: inherit;
    }

    .placeholder {
      color: #999;
      font-style: italic;
    }
  `;
}
