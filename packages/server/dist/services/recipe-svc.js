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
var recipe_svc_exports = {};
__export(recipe_svc_exports, {
  default: () => recipe_svc_default
});
module.exports = __toCommonJS(recipe_svc_exports);
var import_mongoose = require("mongoose");
const RecipeSchema = new import_mongoose.Schema(
  {
    userid: { type: import_mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true }
  },
  { collection: "recipes" }
);
const RecipeModel = (0, import_mongoose.model)("Recipe", RecipeSchema);
function index() {
  return RecipeModel.find();
}
function getByUser(userid) {
  return RecipeModel.find({ userid: new import_mongoose.Types.ObjectId(userid) });
}
function get(id) {
  return RecipeModel.findById(id).then((recipe) => {
    if (!recipe) throw `${id} not found`;
    return recipe;
  });
}
function create(json) {
  const recipe = new RecipeModel(json);
  return recipe.save();
}
function update(id, recipe) {
  return RecipeModel.findByIdAndUpdate(id, recipe, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${id} not updated`;
    return updated;
  });
}
function remove(id) {
  return RecipeModel.findByIdAndDelete(id).then((deleted) => {
    if (!deleted) throw `${id} not deleted`;
  });
}
var recipe_svc_default = { index, getByUser, get, create, update, remove };
