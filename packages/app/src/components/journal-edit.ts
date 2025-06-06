import { html } from "lit";
import { define, Form, View } from "@calpoly/mustang";
import { Person } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";
import { state, property } from "lit/decorators.js";

export class JournalEditElement extends View<Model, Msg> {
  static uses = define({
    "mu-form": Form.Element,
  });

  @property()
  userid?: string;

  @state()
  get profile(): Person | undefined {
    return this.model.profile;
  }

  // handleSubmit(event: Form.SubmitEvent<Person>) {
  //   this.dispatchMessage([
  //     "profile/save",
  //     {
  //       userid: this.userid,
  //       profile: event.detail,
  //       onSuccess: () =>
  //         History.dispatch(this, "history/navigate", {
  //           href: `/app/traveler/${this.userid}`
  //         }),
  //       onFailure: (error: Error) =>
  //         console.error("ERROR:", error)
  //     }
  //   ]);
  // }

  render() {
    return html`
      <main class="page">
        <mu-form
          .init=${this.profile}
           @mu-form:submit=${this.handleSubmit}>
          <!-- Form inputs -->
        </mu-form>
      </main>
    `;
  }
}
