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
var workoutWeeks_exports = {};
__export(workoutWeeks_exports, {
  default: () => workoutWeeks_default
});
module.exports = __toCommonJS(workoutWeeks_exports);
var import_express = __toESM(require("express"));
var import_workoutweek_svc = __toESM(require("../services/workoutweek-svc"));
const router = import_express.default.Router();
router.get("/:userid", (req, res) => {
  import_workoutweek_svc.default.get(req.params.userid).then((data) => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send("Not found");
    }
  }).catch((err) => {
    console.error("Error fetching workout week:", err);
    res.status(500).send("Server error");
  });
});
router.post("/", async (req, res) => {
  console.log("POST body:", req.body);
  try {
    const saved = await import_workoutweek_svc.default.createOrUpdate(req.body.userid, req.body.entries);
    console.log("Successfully saved:", saved);
    res.status(201).json(saved);
  } catch (err) {
    console.error(" Error saving:", err);
    res.status(400).json(err);
  }
});
var workoutWeeks_default = router;
