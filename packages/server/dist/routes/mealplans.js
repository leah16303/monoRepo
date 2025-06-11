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
var mealplans_exports = {};
__export(mealplans_exports, {
  default: () => mealplans_default
});
module.exports = __toCommonJS(mealplans_exports);
var import_express = __toESM(require("express"));
var import_mealplan_svc = __toESM(require("../services/mealplan-svc"));
const router = import_express.default.Router();
router.get("/", async (_, res) => {
  try {
    const all = await import_mealplan_svc.default.index();
    res.json(all);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get("/:userid", async (req, res) => {
  try {
    const list = await import_mealplan_svc.default.getByUser(req.params.userid);
    res.json(list);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.post("/:userid/initialize", async (req, res) => {
  try {
    const { userid } = req.params;
    const initialized = await import_mealplan_svc.default.initializeForUser(userid);
    res.json(initialized);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get("/:userid/:id", async (req, res) => {
  try {
    const mealplan = await import_mealplan_svc.default.get(req.params.id);
    res.json(mealplan);
  } catch (err) {
    res.status(404).send(err);
  }
});
router.post("/:userid", async (req, res) => {
  const { userid } = req.params;
  try {
    const mealplan = await import_mealplan_svc.default.create({
      ...req.body,
      userid
    });
    res.status(201).json(mealplan);
  } catch (err) {
    res.status(500).send("Failed to create meal plan");
  }
});
router.put("/:userid/day/:day", async (req, res) => {
  try {
    const { userid, day } = req.params;
    const updated = await import_mealplan_svc.default.upsertByUserAndDay(userid, day, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.put("/:userid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await import_mealplan_svc.default.update(id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.delete("/:userid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await import_mealplan_svc.default.remove(id);
    res.status(204).end();
  } catch (err) {
    res.status(404).send(err);
  }
});
var mealplans_default = router;
