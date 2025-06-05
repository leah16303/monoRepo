import { LitElement, html, css } from "lit";

export class JournalViewElement extends LitElement {
  static styles = css`
   p {
  color: var(--dark-black-text);
}
  `;

  render() {
    return html`
      <main class="journal-content">
        <p>
          Today I finally went for that run I kept putting off, and honestly,
          it felt way better than I expected. I didn’t go far, but the fresh
          air and movement did wonders for my mood—might actually make it a
          habit this time.
        </p>
      </main>
    `;
  }
}
