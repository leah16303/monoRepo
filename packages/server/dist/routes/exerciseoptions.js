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
var exerciseoptions_exports = {};
__export(exerciseoptions_exports, {
  default: () => exerciseoptions_default
});
module.exports = __toCommonJS(exerciseoptions_exports);
var import_express = __toESM(require("express"));
var import_exerciseoption_svc = __toESM(require("../services/exerciseoption-svc"));
const router = import_express.default.Router();
router.get("/", async (_, res) => {
  try {
    const all = await import_exerciseoption_svc.default.index();
    res.json(all);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get("/:userid", async (req, res) => {
  try {
    const list = await import_exerciseoption_svc.default.getByUser(req.params.userid);
    res.json(list);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get("/:userid/:id", async (req, res) => {
  try {
    const recipe = await import_exerciseoption_svc.default.get(req.params.id);
    res.json(recipe);
  } catch (err) {
    res.status(404).send(err);
  }
});
router.post("/:userid", async (req, res) => {
  const { userid } = req.params;
  try {
    const recipe = await import_exerciseoption_svc.default.create({
      ...req.body,
      userid
    });
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).send("Failed to create recipe");
  }
});
router.put("/:userid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await import_exerciseoption_svc.default.update(id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.delete("/:userid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await import_exerciseoption_svc.default.remove(id);
    res.status(204).end();
  } catch (err) {
    res.status(404).send(err);
  }
});
var exerciseoptions_default = router;
