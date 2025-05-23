// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import WorkoutEntry from "./services/workoutentry-svc";

connect("healthdb"); 

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

// Middleware:
app.use(express.json());

app.use(express.static(staticDir));

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// with the other routes:
app.get("/workoutentries/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  WorkoutEntry.get(userid).then((data) => {
    if (data) res
      .set("Content-Type", "application/json")
      .send(JSON.stringify(data));
    else res
      .status(404).send();
  });
});