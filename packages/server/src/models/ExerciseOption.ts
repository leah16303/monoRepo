import mongoose from "mongoose";

export interface ExerciseOption{
  userid: mongoose.Types.ObjectId;
  type: string;
  activity: string;
}