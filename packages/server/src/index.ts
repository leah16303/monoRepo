// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import WorkoutEntry from "./services/workoutentry-svc";
import workoutEntries from "./routes/workoutEntries";
import Persons from "./routes/Persons";
import auth, { authenticateUser } from "./routes/auth";

connect("healthdb"); 

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

// Middleware:
app.use(express.json());

//app.use("/api/workoutEntries", workoutEntries);
app.use("/api/Persons",  authenticateUser, Persons);


app.use(express.static(staticDir));

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// with the other routes:
// app.get("/workoutEntries/:id", (req: Request, res: Response) => {
//   const { userid } = req.params;

//   WorkoutEntry.get(userid).then((data) => {
//     if (data) res
//       .set("Content-Type", "application/json")
//       .send(JSON.stringify(data));
//     else res
//       .status(404).send();
//   });
// });

// app.get("/workoutEntries/id/:id", (req: Request, res: Response) => {
//   const { id } = req.params;
//   WorkoutEntry.getById(id).then((entry) => {
//     if (entry) {
//       res
//         .set("Content-Type", "application/json")
//         .send(JSON.stringify(entry));
//     } else {
//       res.status(404).send("Entry not found");
//     }
//   }).catch((err) => {
//     res.status(500).send(`Error: ${err}`);
//   });
// });


app.use("/auth", auth);