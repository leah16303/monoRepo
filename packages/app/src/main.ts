import {Auth, define, History, Switch , Store} from "@calpoly/mustang";
import { html} from "lit";
import { HeaderElement } from "./components/header-element.ts";
import{ HomeViewElement } from "./views/home-view.ts";
import { MealplanViewElement } from "./views/mealplan-view.ts";
import { WorkoutScheduleViewElement } from "./views/workoutschedule-view.ts";
import{RecipeListViewElement} from "./views/recipelist-view.ts";
import { ExerciseOptionListViewElement } from "./views/exerciseoptions-view.ts";
import {JournalViewElement} from "./views/journal-view.ts";
import { Msg } from "./messages.ts";
import { Model, init } from "./model.ts";
import update from "./update.ts";




const routes = [
{
  
    path: "/app",
    view: () => html`
      <home-view></home-view>
    `
  },
  {
    path: "/app/mealplan/:id",
    view: (params: Switch.Params) => html`
      <mealplan-view user-id=${params.id}></mealplan-view>
    `
  },
  {
    path: "/app/recipes/:id",
    view: (params: Switch.Params) => html`
      <recipes-view user-id=${params.id}></recipes-view>
    `
  },
  {
  path: "/app/workoutcalendar", // NO /:id here
  view: () => html`
    <workout-schedule-view></workout-schedule-view>` // NO tour-id attribute
  },
  {
    path: "/app/exerciseoptions/:id",
    view: (params: Switch.Params) => html`
      <exerciseoptions-view user-id=${params.id}></exerciseoptions-view>
    `
  },
  {
    path: "/app/journaling/:id",
    view: (params: Switch.Params) => html`
      <journaling-view user-id=${params.id}></journaling-view>
    `
  },
  {
    path: "/",
    redirect: "/app"
  }
];

define({
   "mu-store": class AppStore
    extends Store.Provider<Model, Msg>
  {
    constructor() {
      super(update, init, "profile:auth");
    }
  },

  "mu-auth": Auth.Provider,
  "mu-history": History.Provider,
  "profile-header": HeaderElement,
  "home-view": HomeViewElement,
  "mealplan-view": MealplanViewElement,
  "workout-schedule-view": WorkoutScheduleViewElement,
  "recipes-view": RecipeListViewElement,
  "exerciseoptions-view": ExerciseOptionListViewElement,
  "journaling-view": JournalViewElement,
  

    "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
    super(routes, "profile:history", "profile:auth");
    }
    },

});

