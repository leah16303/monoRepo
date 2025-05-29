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
var person_svc_exports = {};
__export(person_svc_exports, {
  default: () => person_svc_default
});
module.exports = __toCommonJS(person_svc_exports);
var import_mongoose = require("mongoose");
const PersonSchema = new import_mongoose.Schema(
  {
    userid: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    profilephoto: { type: String, required: false, unique: true },
    recipes: { type: String, required: false, unique: true },
    workouts: [String],
    exerciseOptins: [String]
  },
  { collection: "profiles" }
);
const PersonModel = (0, import_mongoose.model)(
  "Person",
  PersonSchema
);
function index() {
  return PersonModel.find();
}
function get(userid) {
  return PersonModel.find({ userid }).then((list) => list[0]).catch((err) => {
    throw `${userid} Not Found`;
  });
}
function create(json) {
  const t = new PersonModel(json);
  return t.save();
}
function update(userid, traveler) {
  return PersonModel.findOneAndUpdate({ userid }, traveler, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${userid} not updated`;
    else return updated;
  });
}
function remove(userid) {
  return PersonModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}
var person_svc_default = { index, get, create, update, remove };
