// src/routes/mealplans.ts
import express, { Request, Response } from "express";
import { MealPlan } from "../models/MealPlan";
import mealplans from "../services/mealplan-svc";

const router = express.Router();

// Get all meal plans (admin/debug)
router.get("/", async (_: Request, res: Response) => {
  try {
    const all = await mealplans.index();
    res.json(all);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all meal plans for a user
router.get("/:userid", async (req: Request, res: Response) => {
  try {
    const list = await mealplans.getByUser(req.params.userid);
    res.json(list);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Initialize meal plan for a user (creates empty days if they don't exist)
router.post("/:userid/initialize", async (req: Request, res: Response) => {
  try {
    const { userid } = req.params;
    const initialized = await mealplans.initializeForUser(userid);
    res.json(initialized);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a single meal plan by ID
router.get("/:userid/:id", async (req: Request, res: Response) => {
  try {
    const mealplan = await mealplans.get(req.params.id);
    res.json(mealplan);
  } catch (err) {
    res.status(404).send(err);
  }
});

// Create a new meal plan
router.post("/:userid", async (req: Request, res: Response) => {
  const { userid } = req.params;
  try {
    const mealplan = await mealplans.create({
      ...req.body,
      userid
    });
    res.status(201).json(mealplan);
  } catch (err) {
    res.status(500).send("Failed to create meal plan");
  }
});

// Update or create a meal plan for a specific day
router.put("/:userid/day/:day", async (req: Request, res: Response) => {
  try {
    const { userid, day } = req.params;
    const updated = await mealplans.upsertByUserAndDay(userid, day, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a meal plan by ID
router.put("/:userid/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updated = await mealplans.update(id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete a meal plan
router.delete("/:userid/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await mealplans.remove(id);
    res.status(204).end();
  } catch (err) {
    res.status(404).send(err);
  }
});

export default router;