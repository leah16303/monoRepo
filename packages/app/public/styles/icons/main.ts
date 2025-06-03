import {
  Auth,
  define,
  History,
  Switch
} from "@calpoly/mustang";
import { html, LitElement } from "lit";
import { HeaderElement } from "./components/blazing-header";



const routes = [
{
    path: "/app",
    view: () => html`
      <landing-view></landing-view>
    `
  },
  {
    path: "/app/mealplan/:id",
    view: (params: Switch.Params) => html`
      <mealplan-view tour-id=${params.id}></mealplan-view>
    `
  },
  {
    path: "/app/recipes/:id",
    view: (params: Switch.Params) => html`
      <recipes-view tour-id=${params.id}></recipes-view>
    `
  },
  {
    path: "/app/workoutcalendar/:id",
    view: (params: Switch.Params) => html`
      <workoutcalendar-view tour-id=${params.id}></workoutcalendar-view>
    `
  },
  {
    path: "/app/exerciseoptions/:id",
    view: (params: Switch.Params) => html`
      <exerciseoptions-view tour-id=${params.id}></exerciseoptions-view>
    `
  },
  {
    path: "/app/journaling/:id",
    view: (params: Switch.Params) => html`
      <journaling-view tour-id=${params.id}></journaling-view>
    `
  },
  {
    path: "/",
    redirect: "/app"
  }
];

define({
  "mu-auth": Auth.Provider,
  "mu-history": History.Provider,
  "blazing-header": HeaderElement,

    "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
    super(routes, "blazing:history", "blazing:auth");
    }
    },

});

