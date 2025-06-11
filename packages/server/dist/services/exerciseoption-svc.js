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
var exerciseoption_svc_exports = {};
__export(exerciseoption_svc_exports, {
  default: () => exerciseoption_svc_default
});
module.exports = __toCommonJS(exerciseoption_svc_exports);
var import_mongoose = require("mongoose");
const ExerciseOptionSchema = new import_mongoose.Schema(
  {
    userid: { type: import_mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, required: true },
    activity: { type: String, required: true }
  },
  { collection: "exerciseoptions" }
);
const ExerciseOptionModel = (0, import_mongoose.model)("ExerciseOption", ExerciseOptionSchema);
function index() {
  return ExerciseOptionModel.find();
}
function getByUser(userid) {
  return ExerciseOptionModel.find({ userid: new import_mongoose.Types.ObjectId(userid) });
}
function get(id) {
  return ExerciseOptionModel.findById(id).then((exercise) => {
    if (!exercise) throw `${id} not found`;
    return exercise;
  });
}
function create(json) {
  const exercise = new ExerciseOptionModel(json);
  return exercise.save();
}
function update(id, exercise) {
  return ExerciseOptionModel.findByIdAndUpdate(id, exercise, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${id} not updated`;
    return updated;
  });
}
function remove(id) {
  return ExerciseOptionModel.findByIdAndDelete(id).then((deleted) => {
    if (!deleted) throw `${id} not deleted`;
  });
}
var exerciseoption_svc_default = { index, getByUser, get, create, update, remove };
