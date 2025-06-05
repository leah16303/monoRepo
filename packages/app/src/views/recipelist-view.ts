import { LitElement, html, css } from "lit";

export class RecipeListViewElement extends LitElement {
  static styles = css`
   

.page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: var(--font-body);
  }
  
  .recipe {
    margin-bottom: 2.5rem;
    background-color: var(--color-surface);
    padding: 1.5rem;
    border-radius: var(--size-radius-medium);
    box-shadow: var(--shadow-sm);
  }
  
  
  .recipe p {
    margin-bottom: 0.5rem;
    font-weight: var(--font-body-semibold);
  }
  
  .recipe ul {
    padding-left: 1.5rem;
    line-height: 1.6;
  }
  


  `;

  render() {
    return html`
    <main class="page">
      <section class="recipe">
        <h3>Chicken Tikka Masala</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
          <li>1 lb chicken breast, cubed</li>
          <li>1 cup yogurt</li>
          <li>2 tbsp tikka masala spice mix</li>
          <li>1 can coconut milk</li>
          <li>1 onion, chopped</li>
          <li>2 cloves garlic, minced</li>
        </ul>
      </section>

      <section class="recipe">
        <h3>Beef Stew</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
          <li>2 lbs beef chuck, cubed</li>
          <li>4 carrots, chopped</li>
          <li>4 potatoes, cubed</li>
          <li>1 onion, chopped</li>
          <li>4 cups beef broth</li>
          <li>2 tbsp flour</li>
        </ul>
      </section>
      </main>
    `;
  }
}
