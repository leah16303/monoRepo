// src/routes/travelers.ts
import express, { Request, Response } from "express";
import { Person } from "../models/Person";
import profiles from "../services/person-svc";

const router = express.Router();

// in src/routes/travelers.ts
router.get("/", (_, res: Response) => {
  profiles.index()
    .then((list: Person[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

router.get("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  profiles.get(userid)
    .then((traveler: Person) => res.json(traveler))
    .catch((err) => res.status(404).send(err));
});


router.post("/", (req: Request, res: Response) => {
  const newTraveler = req.body;

  profiles.create(newTraveler)
    .then((traveler: Person) =>
      res.status(201).json(traveler)
    )
    .catch((err) => res.status(500).send(err));
});





router.delete("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  profiles.remove(userid)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});
export default router;