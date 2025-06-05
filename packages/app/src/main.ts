import {Auth, define, History, Switch , Store} from "@calpoly/mustang";
import { html} from "lit";
import { HeaderElement } from "./components/header-element.ts";
import{ HomeViewElement } from "./views/home-view.ts";
import { MealplanViewElement } from "./views/mealplan-view.ts";
import { WorkoutScheduleViewElement } from "./views/workoutschedule-view.ts";
import{RecipeListViewElement} from "./views/recipelist-view.ts";
import { ExerciseOptionsViewElement } from "./views/exerciseoptions-view.ts";
import {JournalViewElement} from "./views/journal-view.ts";
import "./styles/page.css";

import { Msg } from "./message.ts";
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
   "mu-store": class AppStore
    extends Store.Provider<Model, Msg>
  {
    constructor() {
      super(update, init, "blazing:auth");
    }
  },

  "mu-auth": Auth.Provider,
  "mu-history": History.Provider,
  "profile-header": HeaderElement,
  "home-view": HomeViewElement,
  "mealplan-view": MealplanViewElement,
  "workout-schedule-view": WorkoutScheduleViewElement,
  "recipes-view": RecipeListViewElement,
  "exerciseoptions-view": ExerciseOptionsViewElement,
  "journaling-view": JournalViewElement,
  

    "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
    super(routes, "profile:history", "profile:auth");
    }
    },

});

