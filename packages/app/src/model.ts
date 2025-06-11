import {  Person, WorkoutEntry, Recipe } from "server/models";


export interface Model {
    profile?: Person;
    workoutEntries?: WorkoutEntry[];
    recipes?: Recipe[];
    // exerciseOption?: ExerciseOption[];


}



export const init: Model = {};