import { Person, WorkoutEntry } from "server/models";

export interface Model {
    profile?: Person;
    workoutEntries?: WorkoutEntry[];

}

export const init: Model = {};