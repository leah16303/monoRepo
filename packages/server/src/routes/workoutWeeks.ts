// routes/workoutWeeks.ts

import express from "express";
import WorkoutWeek from "../services/workoutweek-svc";

const router = express.Router();

// GET WorkoutWeek by userid
router.get("/:userid", (req, res) => {
  WorkoutWeek.get(req.params.userid)
    .then((data) => {
      if (data) {
        // Return the full object, not just entries
        res.json(data);
      } else {
        res.status(404).send("Not found");
      }
    })
    .catch((err) => {
      console.error("Error fetching workout week:", err);
      res.status(500).send("Server error");
    });
});

// POST create a new WorkoutWeek
router.post("/", async (req, res) => {
  console.log("POST body:", req.body);
  try {
    const saved = await WorkoutWeek.createOrUpdate(req.body.userid, req.body.entries);
    console.log("Successfully saved:", saved); 
    res.status(201).json(saved);
  } catch (err) {
    console.error(" Error saving:", err);
    res.status(400).json(err);
  }
});

export default router;