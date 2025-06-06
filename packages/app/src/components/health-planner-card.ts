import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";

type Category = 'Food' | 'Fitness' | 'Mental Health';

export class HealthPlannerCardElement extends LitElement {
  @property({ type: String })
  category?: Category;

override  render() {
  return html`
    <div class="card">
      <h2>${this.title}</h2>
      <div class="content">
        <!-- Your card content -->
      </div>
      
    </div>
  `;
}

  static styles = [
    reset.styles,
    css`

    
      :host {
    display: block;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .card {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background-color: white;
  }

  .content {
    flex: 1;
    overflow: auto;
  }

.links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1; /* This makes the links section expand to fill available space */
  
  /* Add these properties to ensure uniform spacing */
  min-height: 120px; /* Minimum height for the links section */
  justify-content: flex-start; /* Align links to the top */
}

/* Optional: If you want to center the links when there's only one */
.links:has(::slotted(:only-child)) {
  justify-content: center;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .card {
    grid-column: span 6;
    padding: 1.5rem;
    min-height: 220px;
  }
  
  .links {
    min-height: 100px;
  }
}

@media (max-width: 600px) {
  .card {
    grid-column: span 12;
    padding: 1.25rem;
    min-height: 200px;
  }
  
  .links {
    min-height: 80px;
  }
}
    `
  ];
}