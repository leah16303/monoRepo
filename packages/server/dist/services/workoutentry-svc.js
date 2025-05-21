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
var workoutentry_svc_exports = {};
__export(workoutentry_svc_exports, {
  default: () => workoutentry_svc_default
});
module.exports = __toCommonJS(workoutentry_svc_exports);
var import_mongoose = require("mongoose");
const WorkoutEntrySchema = new import_mongoose.Schema(
  {
    userid: { type: String, required: true, unique: true },
    day: { type: Date, required: true },
    activity: { type: String, required: true, trim: true },
    duration: { type: String, required: false, trim: true }
  },
  { collection: "workoutentries" }
);
const WorkoutEntryModel = (0, import_mongoose.model)(
  "Profile",
  WorkoutEntrySchema
);
function index() {
  return WorkoutEntryModel.find();
}
function get(userid) {
  return WorkoutEntryModel.find({ userid }).then((list) => list[0]).catch((err) => {
    throw `${userid} Not Found`;
  });
}
var workoutentry_svc_default = { index, get };
