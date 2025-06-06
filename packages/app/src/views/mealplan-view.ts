import { LitElement, html, css } from "lit";
import  "../components/backbutton";

export class MealplanViewElement extends LitElement {
  static styles = css`
    .table-wrapper {
      overflow-x: auto;
      margin: 1rem 0;
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
    }
    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    tbody tr:hover {
      background-color: #f1f1f1;
    }
  `;

  render() {
    return html`
    <back-button></back-button>
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
            <tr><td>Sunday</td><td>Avocado toast</td><td>Hamburger</td><td>Salmon and potatoes</td><td></td></tr>
            <tr><td>Monday</td><td>Hashbrowns and eggs</td><td>Chicken tikka masala</td><td>Beef stew</td><td>Brownies</td></tr>
            <tr><td>Tuesday</td><td>Overnight oats</td><td>Burrito</td><td>Chicken salad</td><td></td></tr>
            <tr><td>Wednesday</td><td>Avocado toast</td><td>Pizza</td><td>Fried chicken and fries</td><td></td></tr>
            <tr><td>Thursday</td><td>Bacon and eggs</td><td>Hamburger</td><td>Tuna sandwich</td><td>Chocolate muffin</td></tr>
            <tr><td>Friday</td><td>Overnight oats</td><td>Chicken salad</td><td>Salmon and potatoes</td><td></td></tr>
            <tr><td>Saturday</td><td>Toast and eggs</td><td>Pot roast</td><td>Beef burrito</td><td></td></tr>
          </tbody>
        </table>
      </div>
    `;
  }
}


