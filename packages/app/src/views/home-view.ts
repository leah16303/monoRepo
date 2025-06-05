import { LitElement, css, html } from "lit";
//import { state } from "lit/decorators.js";
import "../components/header-element.ts";
import "../components/greeting-banner.ts";
import "../components/health-planner-card.ts";


export class HomeViewElement extends LitElement {
  static styles = css`
    .page-title {
      padding: 1rem;
    }

     .main-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2.5rem;
    padding: var(--size-padding, 1rem);
    max-width: 1200px;
    margin: 0 auto;
  }


        .icon {
    width: 20px;
    height: 20px;
    fill: #0077cc;
  }

      svg.icon {
        width: 2em;
        height: 2em;
        fill: currentColor;
        vertical-align: middle;
        font-size: 1.5rem;
      }

  .card-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: var(--color-card-text);
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    transition: background-color 0.3s ease, color 0.3s ease, font-size 0.3s ease;
    box-sizing: border-box;
  }
  
  .card-link:hover {
    color: var(--color-text);
    font-size: 1.1rem;
  }

  .links a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color : var(--color-card-text);
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem; /* move this here */
    border-radius: 8px; /* move this here */
    transition: background-color 0.3s ease, color 0.3s ease, font-size 0.3s ease;
    box-sizing: border-box; /* important */
  }
  
  
  .links a:hover {
    color: var(--color-text);
    font-size: 1.1rem;

  }
  

  .page {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: var(--font-body);
  }
  
  `;

  render() {
    return html`
      <my-header></my-header>
      <greeting-banner></greeting-banner>

    
      <main class="main-grid">
        <health-planner-card category="Food">
          <a slot="link-1" class="card-link" href="MealPlan.html">
            <svg class="icon"><use href="/icons/food.svg#mealplan" /></svg>
            Meal Plan
          </a>
          <a slot="link-2" class="card-link" href="Recipes.html">
            <svg class="icon"><use href="/icons/food.svg#pot" /></svg>
            Recipes
          </a>
        </health-planner-card>

        <health-planner-card category="Fitness">
          <a slot="link-1" class="card-link" href="WorkoutCalendar.html">
            <svg class="icon"><use href="/icons/fitness.svg#calendar" /></svg>
            Workout Calendar
          </a>
          <a slot="link-2" class="card-link" href="ExerciseOptions.html">
            <svg class="icon"><use href="/icons/fitness.svg#weight" /></svg>
            Exercise Options
          </a>
        </health-planner-card>

        <health-planner-card category="Mental Health">
          <a slot="link-1" class="card-link" href="Journal.html">
            <svg class="icon"><use href="/icons/mental-health.svg#journal" /></svg>
            Journaling
          </a>
        </health-planner-card>
      </main>
    `;
  }

}
