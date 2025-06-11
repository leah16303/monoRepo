import { Schema, Types, model } from "mongoose";
import  { ExerciseOption } from "../models/ExerciseOption";
import { exec } from "child_process";


const ExerciseOptionSchema = new Schema<ExerciseOption>(
  {
    userid: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, required: true },
    activity: { type: String, required: true },
    
  },
  { collection: "exerciseoptions" }
);

const ExerciseOptionModel = model<ExerciseOption>("ExerciseOption", ExerciseOptionSchema);

/**
 * Get all recipes (admin/debug usage)
 */
function index(): Promise<ExerciseOption[]> {
  return ExerciseOptionModel.find();
}

/**
 * Get all recipes for a specific user
 */
function getByUser(userid: string): Promise<ExerciseOption[]> {
  return ExerciseOptionModel.find({ userid: new Types.ObjectId(userid) });
}

/**
 * Get a specific recipe by ID
 */
function get(id: string): Promise<ExerciseOption> {
  return ExerciseOptionModel.findById(id).then((exercise) => {
    if (!exercise) throw `${id} not found`;
    return exercise;
  });
}

/**
 * Create a new recipe
 */
function create(json: ExerciseOption): Promise<ExerciseOption> {
  const exercise = new ExerciseOptionModel(json);
  return exercise.save();
}

/**
 * Update a specific recipe by ID
 */
function update(id: string, exercise: Partial<ExerciseOption>): Promise<ExerciseOption> {
  return ExerciseOptionModel.findByIdAndUpdate(id, exercise, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${id} not updated`;
    return updated;
  });
}

/**
 * Delete a recipe by ID
 */
function remove(id: string): Promise<void> {
  return ExerciseOptionModel.findByIdAndDelete(id).then((deleted) => {
    if (!deleted) throw `${id} not deleted`;
  });
}

export default { index, getByUser, get, create, update, remove };
