import { html, LitElement, css } from "lit";
import { state } from "lit/decorators.js";
import { Observer, Auth } from "@calpoly/mustang";
import "../components/backbutton.ts";
import "../components/workout-schedule.ts";

export class WorkoutScheduleViewElement extends LitElement {
  @state() userid?: string;
  @state() loading: boolean = true;
  @state() error?: string;

  private _authObserver = new Observer<Auth.Model>(this, "profile:auth");

  connectedCallback() {
    super.connectedCallback();
    
    console.log("WorkoutScheduleView connected");
    
    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth;
      console.log("Auth observer - user:", user);
      
      if (user?.authenticated) {
        console.log("User authenticated:", user.username);
        // Fetch the MongoDB ObjectId using the username
        this.fetchUserObjectId(user.username);
      } else {
        // console.log("User not authenticated");
        // this.userid = undefined;
        // this.loading = false;
        // this.error = "User not authenticated";
      }
    });
  }

  private async fetchUserObjectId(username: string) {
    try {
      console.log("Fetching user ObjectId for:", username);
      
      const response = await fetch(`/api/user/${username}`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log("User fetch response:", response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const userData = await response.json();
      console.log("User data received:", userData);
      
      // Handle both _id and _id.$oid formats
      this.userid = userData._id?.$oid || userData._id;
      this.loading = false;
      this.error = undefined;
      
    } catch (err) {
      console.error("Error fetching user ObjectId:", err);
      this.error = err instanceof Error ? err.message : "Failed to load user data";
      this.loading = false;
    }
  }

  static styles = css`
    :host {
      display: block;
      padding: var(--size-spacing-medium);
    }
    
    .loading, .error {
      text-align: center;
      padding: var(--size-spacing-large);
    }
    
    .error {
      color: var(--color-error, #d32f2f);
    }
  `;

  render() {
    console.log("WorkoutScheduleView render - userid:", this.userid, "loading:", this.loading, "error:", this.error);
    
    return html`
      <back-button></back-button>
      ${this.loading 
        ? html`<div class="loading">
        <p>Log in to start adding items to your schedule</p>
        
        </div>`
        : this.error
        ? html`<div class="error">Error: ${this.error}</div>`
        : this.userid
        ? html`<workout-schedule src="/api/workoutWeek/${this.userid}"></workout-schedule>`
        : html`<div class="error">No user ID available</div>`
      }
    `;
  }
}

