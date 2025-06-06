// services/workoutweek-svc.ts
import WorkoutWeekModel, { WorkoutEntry, WorkoutWeek } from "../models/WorkoutWeek";
import mongoose from "mongoose";

function get(userid: string): Promise<WorkoutWeek> {
  return WorkoutWeekModel.findOne({ userid: new mongoose.Types.ObjectId(userid) })
    .then((data) => {
      if (!data) throw new Error("Workout week not found");
      return data;
    });
}

function createOrUpdate(userid: string, entries: WorkoutEntry[]): Promise<WorkoutWeek> {
  return WorkoutWeekModel.findOneAndUpdate(
    { userid: new mongoose.Types.ObjectId(userid) },
    { $set: { entries } },
    { new: true, upsert: true }
  );
}

export default { get, createOrUpdate };
