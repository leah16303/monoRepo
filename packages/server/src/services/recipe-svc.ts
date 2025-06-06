import { Schema, Types, model } from "mongoose";
import  { Recipe } from "../models/Recipe";


const RecipeSchema = new Schema<Recipe>(
  {
    userid: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true }
  },
  { collection: "recipes" }
);

const RecipeModel = model<Recipe>("Recipe", RecipeSchema);

/**
 * Get all recipes (admin/debug usage)
 */
function index(): Promise<Recipe[]> {
  return RecipeModel.find();
}

/**
 * Get all recipes for a specific user
 */
function getByUser(userid: string): Promise<Recipe[]> {
  return RecipeModel.find({ userid: new Types.ObjectId(userid) });
}

/**
 * Get a specific recipe by ID
 */
function get(id: string): Promise<Recipe> {
  return RecipeModel.findById(id).then((recipe) => {
    if (!recipe) throw `${id} not found`;
    return recipe;
  });
}

/**
 * Create a new recipe
 */
function create(json: Recipe): Promise<Recipe> {
  const recipe = new RecipeModel(json);
  return recipe.save();
}

/**
 * Update a specific recipe by ID
 */
function update(id: string, recipe: Partial<Recipe>): Promise<Recipe> {
  return RecipeModel.findByIdAndUpdate(id, recipe, {
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
  return RecipeModel.findByIdAndDelete(id).then((deleted) => {
    if (!deleted) throw `${id} not deleted`;
  });
}

export default { index, getByUser, get, create, update, remove };
