
import mongoose from 'mongoose';
export interface WorkoutEntry {
  userid: mongoose.Types.ObjectId;
  day: string;
  activity: string;
  duration: string;
}