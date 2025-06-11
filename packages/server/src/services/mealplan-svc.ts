import { Schema, Types, model } from "mongoose";
import { MealPlan } from "../models/MealPlan";

const MealPlanSchema = new Schema<MealPlan>(
  {
    userid: { type: Schema.Types.ObjectId, ref: "User", required: true },
    day: { type: String, required: true },
    breakfast: { type: String, default: "" },
    lunch: { type: String, default: "" },
    dinner: { type: String, default: "" },
    snack: { type: String, default: "" }
  },
  { collection: "mealplans" }
);

// Create compound index to ensure one meal plan per day per user
MealPlanSchema.index({ userid: 1, day: 1 }, { unique: true });

const MealPlanModel = model<MealPlan>("MealPlan", MealPlanSchema);

/**
 * Get all meal plans (admin/debug usage)
 */
function index(): Promise<MealPlan[]> {
  return MealPlanModel.find();
}

/**
 * Get all meal plans for a specific user
 */
function getByUser(userid: string): Promise<MealPlan[]> {
  const daysOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  return MealPlanModel.find({ userid: new Types.ObjectId(userid) })
    .then(mealplans => {
      // Sort by day of week
      return mealplans.sort((a, b) => {
        const dayA = daysOrder.indexOf(a.day);
        const dayB = daysOrder.indexOf(b.day);
        return dayA - dayB;
      });
    });
}

/**
 * Get a specific meal plan by ID
 */
function get(id: string): Promise<MealPlan> {
  return MealPlanModel.findById(id).then((mealplan) => {
    if (!mealplan) throw `${id} not found`;
    return mealplan;
  });
}

/**
 * Create a new meal plan
 */
function create(json: MealPlan): Promise<MealPlan> {
  const mealplan = new MealPlanModel(json);
  return mealplan.save();
}

/**
 * Update a specific meal plan by ID
 */
function update(id: string, mealplan: Partial<MealPlan>): Promise<MealPlan> {
  return MealPlanModel.findByIdAndUpdate(id, mealplan, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${id} not updated`;
    return updated;
  });
}

/**
 * Update or create a meal plan for a specific user and day
 */
function upsertByUserAndDay(userid: string, day: string, mealplan: Partial<MealPlan>): Promise<MealPlan> {
  return MealPlanModel.findOneAndUpdate(
    { userid: new Types.ObjectId(userid), day },
    { ...mealplan, userid: new Types.ObjectId(userid), day },
    { new: true, upsert: true }
  ).then((updated) => {
    if (!updated) throw `Meal plan for ${day} not updated`;
    return updated;
  });
}

/**
 * Delete a meal plan by ID
 */
function remove(id: string): Promise<void> {
  return MealPlanModel.findByIdAndDelete(id).then((deleted) => {
    if (!deleted) throw `${id} not deleted`;
  });
}

/**
 * Initialize default meal plan for a user (all days with empty meals)
 */
async function initializeForUser(userid: string): Promise<MealPlan[]> {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const userObjectId = new Types.ObjectId(userid);
  
  const existingPlans = await MealPlanModel.find({ userid: userObjectId });
  const existingDays = existingPlans.map(plan => plan.day);
  
  const missingDays = days.filter(day => !existingDays.includes(day));
  
  if (missingDays.length > 0) {
    const newPlans = missingDays.map(day => ({
      userid: userObjectId,
      day,
      breakfast: "",
      lunch: "",
      dinner: "",
      snack: ""
    }));
    
    await MealPlanModel.insertMany(newPlans);
  }
  
  return getByUser(userid);
}

export default { 
  index, 
  getByUser, 
  get, 
  create, 
  update, 
  upsertByUserAndDay, 
  remove, 
  initializeForUser 
};