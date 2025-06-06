import {  Person, WorkoutEntry, Recipe } from "server/models";

export interface Model {
    profile?: Person;
    workoutEntries?: WorkoutEntry[];
    recipes?: Recipe[];


}

export const init: Model = {};