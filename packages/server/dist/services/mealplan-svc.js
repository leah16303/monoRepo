"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var mealplan_svc_exports = {};
__export(mealplan_svc_exports, {
  default: () => mealplan_svc_default
});
module.exports = __toCommonJS(mealplan_svc_exports);
var import_mongoose = require("mongoose");
const MealPlanSchema = new import_mongoose.Schema(
  {
    userid: { type: import_mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    day: { type: String, required: true },
    breakfast: { type: String, default: "" },
    lunch: { type: String, default: "" },
    dinner: { type: String, default: "" },
    snack: { type: String, default: "" }
  },
  { collection: "mealplans" }
);
MealPlanSchema.index({ userid: 1, day: 1 }, { unique: true });
const MealPlanModel = (0, import_mongoose.model)("MealPlan", MealPlanSchema);
function index() {
  return MealPlanModel.find();
}
function getByUser(userid) {
  const daysOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return MealPlanModel.find({ userid: new import_mongoose.Types.ObjectId(userid) }).then((mealplans) => {
    return mealplans.sort((a, b) => {
      const dayA = daysOrder.indexOf(a.day);
      const dayB = daysOrder.indexOf(b.day);
      return dayA - dayB;
    });
  });
}
function get(id) {
  return MealPlanModel.findById(id).then((mealplan) => {
    if (!mealplan) throw `${id} not found`;
    return mealplan;
  });
}
function create(json) {
  const mealplan = new MealPlanModel(json);
  return mealplan.save();
}
function update(id, mealplan) {
  return MealPlanModel.findByIdAndUpdate(id, mealplan, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${id} not updated`;
    return updated;
  });
}
function upsertByUserAndDay(userid, day, mealplan) {
  return MealPlanModel.findOneAndUpdate(
    { userid: new import_mongoose.Types.ObjectId(userid), day },
    { ...mealplan, userid: new import_mongoose.Types.ObjectId(userid), day },
    { new: true, upsert: true }
  ).then((updated) => {
    if (!updated) throw `Meal plan for ${day} not updated`;
    return updated;
  });
}
function remove(id) {
  return MealPlanModel.findByIdAndDelete(id).then((deleted) => {
    if (!deleted) throw `${id} not deleted`;
  });
}
async function initializeForUser(userid) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const userObjectId = new import_mongoose.Types.ObjectId(userid);
  const existingPlans = await MealPlanModel.find({ userid: userObjectId });
  const existingDays = existingPlans.map((plan) => plan.day);
  const missingDays = days.filter((day) => !existingDays.includes(day));
  if (missingDays.length > 0) {
    const newPlans = missingDays.map((day) => ({
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
var mealplan_svc_default = {
  index,
  getByUser,
  get,
  create,
  update,
  upsertByUserAndDay,
  remove,
  initializeForUser
};
