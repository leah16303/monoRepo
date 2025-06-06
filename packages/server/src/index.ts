// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import WorkoutEntry from "./services/workoutentry-svc";
import workoutEntries from "./routes/workoutEntries";
import workoutWeeks from "./routes/workoutWeeks";
import Persons from "./routes/Persons";
import auth, { authenticateUser } from "./routes/auth";
import fs from "node:fs/promises";
import path from "path";
import credentialSvc, { credentialModel } from "./services/credential-svc";


connect("healthdb"); 

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

// Middleware:
app.use(express.json());
app.use("/api/workoutWeek", workoutWeeks);

app.use("/api/workoutEntries", workoutEntries);
//app.use("/api/Persons",  authenticateUser, Persons);

//

app.use(express.static(staticDir));

app.get("/api/user/:username", function(req: Request, res: Response) {
  credentialModel.findOne({ username: req.params.username })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ 
        _id: user._id.toString(),
        username: user.username 
      });
    })
    .catch(error => {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Server error" });
    });
});


app.get("/workoutEntries/:id", (req: Request, res: Response) => {
  const { userid } = req.params;

  WorkoutEntry.get(userid).then((data) => {
    if (data) res
      .set("Content-Type", "application/json")
      .send(JSON.stringify(data));
    else res
      .status(404).send();
  });
});


app.use("/auth", auth);

app.use("/app", (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
    res.send(html)
  );
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});