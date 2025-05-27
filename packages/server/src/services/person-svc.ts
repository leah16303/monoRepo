// src/services/traveler-svc.ts
import { Schema, model } from "mongoose";
import { Person } from "../models/Person";
import { WorkoutEntry } from "../models/WorkoutEntry";

const PersonSchema = new Schema<Person>(
  {
    userid: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    profilephot: { type: URL, required: false, unique: true },
    recipes: { type: String, required: false, unique: true },
    workouts: [String],
    exerciseOptins: [String]
    
    
    
  },
  { collection: "profiles" }
);

const PersonModel = model<Person>(
  "Person",
  PersonSchema
);


function index(): Promise<WorkoutEntry[]> {
  return PersonModel.find();
}

function get(userid: String): Promise<Person> {
  return PersonModel.find({ userid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}



export default { index, get };