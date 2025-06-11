import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "../styles/reset.css.js";

interface SignupFormData {
  username?: string;
  password?: string;
  confirmPassword?: string;
}

export class SignupFormElement extends LitElement {
  @state()
  formData: SignupFormData = {};

  @property()
  api?: string;

  @property()
  redirect: string = "/";

  @state()
  error?: string;

  get canSubmit(): boolean {
    return Boolean(
      this.api &&
      this.formData.username &&
      this.formData.password &&
      this.formData.confirmPassword &&
      this.formData.password === this.formData.confirmPassword
    );
  }

  override render() {
    return html`
      <form
        @change=${(e: InputEvent) => this.handleChange(e)}
        @submit=${(e: SubmitEvent) => this.handleSubmit(e)}
      >
        <slot></slot>
        <slot name="button">
          <button ?disabled=${!this.canSubmit} type="submit">
            Sign Up
          </button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `;
  }

  static styles = [
    reset.styles,
    css`
      .error:not(:empty) {
        color: var(--color-error);
        border: 1px solid var(--color-error);
        padding: var(--size-spacing-medium);
      }
    `,
  ];

  handleChange(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    const name = target?.name;
    const value = target?.value;
    const prevData = this.formData;

    switch (name) {
      case "username":
        this.formData = { ...prevData, username: value };
        break;
      case "password":
        this.formData = { ...prevData, password: value };
        break;
      case "confirmPassword":
        this.formData = { ...prevData, confirmPassword: value };
        break;
    }
  }

  handleSubmit(submitEvent: SubmitEvent) {
    submitEvent.preventDefault();

    if (this.canSubmit) {
      fetch(this.api || "", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.formData.username,
          password: this.formData.password,
        }),
      })
        .then((res) => {
          if (res.status !== 201)
            throw new Error("Signup failed");
          else return res.json();
        })
        .then((json: any) => {
          const { token } = json;
          const customEvent = new CustomEvent("auth:message", {
            bubbles: true,
            composed: true,
            detail: ["auth/signup", { token, redirect: this.redirect }],
          });
          this.dispatchEvent(customEvent);
        })
        .catch((error: Error) => {
          this.error = error.toString();
        });
    }
  }
}
