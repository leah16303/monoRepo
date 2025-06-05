import { Person, WorkoutEntry } from "server/models";

export interface Model {
    person?: Person;
    workoutEntries?: WorkoutEntry[];

}

export const init: Model = {};