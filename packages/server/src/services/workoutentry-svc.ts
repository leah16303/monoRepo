// src/services/traveler-svc.ts
import { Schema, model } from "mongoose";
import { WorkoutEntry } from "../models/WorkoutEntry";

const WorkoutEntrySchema = new Schema<WorkoutEntry>(
  {
    userid: { type: String, required: true, unique: true },
    day: { type: Date, required: true },
    activity: { type: String, required: true, trim: true },
    duration: { type: String, required: false, trim: true }
  },
  { collection: "workoutentries" }
);

const WorkoutEntryModel = model<WorkoutEntry>(
  "Entry",
  WorkoutEntrySchema
);


function index(): Promise<WorkoutEntry[]> {
  return WorkoutEntryModel.find();
}

function get(userid: String): Promise<WorkoutEntry> {
  return WorkoutEntryModel.find({ userid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

export default { index, get };