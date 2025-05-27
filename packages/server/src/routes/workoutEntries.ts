// src/routes/travelers.ts
import express, { Request, Response } from "express";
import { WorkoutEntry } from "../models/WorkoutEntry";

import WorkoutEntries from "../services/workoutentry-svc";

const router = express.Router();

// in src/routes/travelers.ts
router.get("/", (_, res: Response) => {
  WorkoutEntries.index()
    .then((list: WorkoutEntry[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});


/**
 * GET /api/workoutEntries/:id
 * Get a workout entry by MongoDB _id
 */
router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  WorkoutEntries.getById(id)
    .then((entry) => {
      if (entry) res.json(entry);
      else res.status(404).send("Workout entry not found");
    })
    .catch((err) => res.status(500).send(err));
});

/**
 * POST /api/workoutEntries
 * Create a new workout entry
 */
router.post("/", (req: Request, res: Response) => {
  const newWorkoutEntry = req.body;

  WorkoutEntries.create(newWorkoutEntry)
    .then((entry: WorkoutEntry) => res.status(201).json(entry))
    .catch((err) => res.status(500).send(err));
});

/**
 * PUT /api/workoutEntries/:id
 * Update an existing workout entry by _id
 */
router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedWorkout = req.body;

  WorkoutEntries.updateById(id, updatedWorkout)
    .then((entry: WorkoutEntry) => res.json(entry))
    .catch((err) => res.status(404).send(err));
});

/**
 * DELETE /api/workoutEntries/:id
 * Delete a workout entry by _id
 */
router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  WorkoutEntries.removeById(id)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;