"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var workoutentry_svc_exports = {};
__export(workoutentry_svc_exports, {
  default: () => workoutentry_svc_default
});
module.exports = __toCommonJS(workoutentry_svc_exports);
var import_mongoose = require("mongoose");
var import_mongoose2 = __toESM(require("mongoose"));
const WorkoutEntrySchema = new import_mongoose.Schema(
  {
    userid: {
      type: import_mongoose2.default.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    day: { type: String, required: true },
    activity: { type: String, required: true, trim: true },
    duration: { type: String, required: false, trim: true }
  },
  { collection: "WorkoutEntrySchema" }
);
const WorkoutEntryModel = (0, import_mongoose.model)(
  "Entry",
  WorkoutEntrySchema
);
function index() {
  return WorkoutEntryModel.find();
}
function get(userid) {
  return WorkoutEntryModel.find({ userid: new import_mongoose2.default.Types.ObjectId(userid) }).then((list) => {
    if (list.length === 0) throw `${userid} Not Found`;
    return list[0];
  });
}
function getById(id) {
  return WorkoutEntryModel.findById(id).exec();
}
function create(json) {
  const t = new WorkoutEntryModel(json);
  return t.save();
}
function updateById(id, entry) {
  return WorkoutEntryModel.findByIdAndUpdate(id, entry, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${id} not updated`;
    return updated;
  });
}
function removeById(id) {
  return WorkoutEntryModel.findByIdAndDelete(id).then((deleted) => {
    if (!deleted) throw `${id} not deleted`;
  });
}
var workoutentry_svc_default = { index, get, getById, create, updateById, removeById };
