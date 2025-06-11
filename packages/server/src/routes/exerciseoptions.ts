// src/routes/exerciseoptions.ts
import express, { Request, Response } from "express";
import { ExerciseOption } from "../models/ExerciseOption";
import exerciseoptions from "../services/exerciseoption-svc";

const router = express.Router();

// Get all exerciseoptions (admin/debug)
router.get("/", async (_: Request, res: Response) => {
  try {
    const all = await exerciseoptions.index();
    res.json(all);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all exerciseoptions for a user
router.get("/:userid", async (req: Request, res: Response) => {
  try {
    const list = await exerciseoptions.getByUser(req.params.userid);
    res.json(list);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a single exerciseoption by ID
router.get("/:userid/:id", async (req: Request, res: Response) => {
  try {
    const recipe = await exerciseoptions.get(req.params.id);
    res.json(recipe);
  } catch (err) {
    res.status(404).send(err);
  }
});


// Create a    new exercise option
router.post("/:userid", async (req, res) => {
  const { userid } = req.params;
  try {
    const recipe = await exerciseoptions.create({
      ...req.body,
      userid
    });
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).send("Failed to create recipe");
  }
});

// Update a exercise option
router.put("/:userid/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updated = await exerciseoptions.update(id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).send(err);
  }
});



// Delete a exercise option
router.delete("/:userid/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await exerciseoptions.remove(id);
    res.status(204).end();
  } catch (err) {
    res.status(404).send(err);
  }
});

export default router;
