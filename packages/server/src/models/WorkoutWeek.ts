// models/WorkoutWeek.ts
import mongoose from "mongoose";

const WorkoutEntrySchema = new mongoose.Schema({
  day: { type: String, required: true },
  activity: { type: String, required: true },
  duration: { type: String, required: true }
});

const WorkoutWeekSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  entries: {
    type: [WorkoutEntrySchema],  // <-- this is the key!
    required: true
  }
});

// TypeScript types for type-checking only
export type WorkoutEntry = {
  day: string;
  activity: string;
  duration: string;
};

export type WorkoutWeek = {
  userid: mongoose.Types.ObjectId;
  entries: WorkoutEntry[];
};

export default mongoose.model("WorkoutWeek", WorkoutWeekSchema);


