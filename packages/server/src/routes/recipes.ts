// src/routes/recipe.ts
import express, { Request, Response } from "express";
import { Recipe } from "../models/Recipe";
import recipes from "../services/recipe-svc";

const router = express.Router();

// Get all recipes (admin/debug)
router.get("/", async (_: Request, res: Response) => {
  try {
    const all = await recipes.index();
    res.json(all);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all recipes for a user
router.get("/:userid", async (req: Request, res: Response) => {
  try {
    const list = await recipes.getByUser(req.params.userid);
    res.json(list);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a single recipe by ID
router.get("/:userid/:id", async (req: Request, res: Response) => {
  try {
    const recipe = await recipes.get(req.params.id);
    res.json(recipe);
  } catch (err) {
    res.status(404).send(err);
  }
});

// Create a new recipe
// router.post("/:userid", async (req: Request, res: Response) => {
//   try {
//     const { userid } = req.params;
//     const newRecipe = { ...req.body, userid };
//     const created = await recipes.create(newRecipe as Recipe);
//     res.status(201).json(created);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// Create a new recipe
router.post("/:userid", async (req, res) => {
  const { userid } = req.params;
  try {
    const recipe = await recipes.create({
      ...req.body,
      userid
    });
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).send("Failed to create recipe");
  }
});

// Update a recipe
router.put("/:userid/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updated = await recipes.update(id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).send(err);
  }
});



// Delete a recipe
router.delete("/:userid/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await recipes.remove(id);
    res.status(204).end();
  } catch (err) {
    res.status(404).send(err);
  }
});

export default router;
