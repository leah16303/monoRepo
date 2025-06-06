import mongoose from "mongoose";

export interface Recipe {
  userid: mongoose.Types.ObjectId;
  title: string;
  ingredients: string[];
  instructions: string;
}