import { LitElement, html, css } from "lit";
import "../components/backbutton";

export class JournalViewElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      color: #222;
      min-height: 100vh;
    }

    back-button {
      display: block;
      margin-bottom: 1.5rem;
    }

    main.journal-content {
      max-width: 700px;
      margin: 0 auto;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      padding: 1.5rem 2rem;
    }

    textarea.journal-input {
      width: 100%;
      height: 250px;
      border: 2px solid #ccc;
      border-radius: 10px;
      padding: 1rem 1.25rem;
      font-size: 1.1rem;
      font-family: inherit;
      line-height: 1.5;
      color: #333;
      resize: vertical;
      box-sizing: border-box;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      outline: none;
    }

    textarea.journal-input:focus {
      border-color: #aa1f1f;
      box-shadow: 0 0 8px rgba(170, 31, 31, 0.4);
    }

    /* Placeholder styling */
    textarea.journal-input::placeholder {
      color: #999;
      font-style: italic;
    }
  `;

  render() {
    return html`
      <back-button></back-button>

      <main class="journal-content">
        <textarea
          class="journal-input"
          placeholder="Write your journal entry here..."
          aria-label="Journal Entry"
        >
Today I finally went for that run I kept putting off, and honestly, it felt way better than I expected. I didn’t go far, but the fresh air and movement did wonders for my mood—might actually make it a habit this time.</textarea
        >
      </main>
    `;
  }
}
