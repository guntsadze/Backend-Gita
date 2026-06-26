import { Router } from "express";
import { factsController } from "./facts.controller.js";
import { factsMiddleware } from "./facts.middleware.js";

const router = Router();

router.get(
  "/random-fact",
  factsMiddleware.randomBlocker,
  factsController.getRandomFact,
);

export { router as factsRouter };
