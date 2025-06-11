import mongoose from "mongoose";

export interface MealPlan {
  userid: mongoose.Types.ObjectId;
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  snack: string;
}