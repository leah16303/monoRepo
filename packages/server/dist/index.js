"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_express = __toESM(require("express"));
var import_mongo = require("./services/mongo");
var import_workoutentry_svc = __toESM(require("./services/workoutentry-svc"));
var import_workoutEntries = __toESM(require("./routes/workoutEntries"));
var import_workoutWeeks = __toESM(require("./routes/workoutWeeks"));
var import_auth = __toESM(require("./routes/auth"));
var import_promises = __toESM(require("node:fs/promises"));
var import_path = __toESM(require("path"));
var import_credential_svc = require("./services/credential-svc");
var import_recipes = __toESM(require("./routes/recipes"));
var import_mealplans = __toESM(require("./routes/mealplans"));
var import_exerciseoptions = __toESM(require("./routes/exerciseoptions"));
(0, import_mongo.connect)("healthdb");
const app = (0, import_express.default)();
const port = process.env.PORT || 3e3;
const staticDir = process.env.STATIC || "public";
app.use(import_express.default.json());
app.use("/api/workoutWeek", import_workoutWeeks.default);
app.use("/api/workoutEntries", import_workoutEntries.default);
app.use("/api/recipes", import_recipes.default);
app.use("/api/mealplans", import_mealplans.default);
app.use("/api/exerciseoptions", import_exerciseoptions.default);
app.use(import_express.default.static(staticDir));
app.get("/api/user/:username", function(req, res) {
  import_credential_svc.credentialModel.findOne({ username: req.params.username }).then((user) => {
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({
      _id: user._id.toString(),
      username: user.username
    });
  }).catch((error) => {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Server error" });
  });
});
app.get("/workoutEntries/:id", (req, res) => {
  const { userid } = req.params;
  import_workoutentry_svc.default.get(userid).then((data) => {
    if (data) res.set("Content-Type", "application/json").send(JSON.stringify(data));
    else res.status(404).send();
  });
});
app.use("/auth", import_auth.default);
app.use("/app", (req, res) => {
  const indexHtml = import_path.default.resolve(staticDir, "index.html");
  import_promises.default.readFile(indexHtml, { encoding: "utf8" }).then(
    (html) => res.send(html)
  );
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
