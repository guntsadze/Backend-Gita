import { Router } from "express";
import { expensesController } from "./expenses.controller.js";
import { expensesMiddleware } from "./expenses.middleware.js";
import isValidMongoIdMiddleware from "../common/middlewares/is-valid-mongo-id.middleware.js";

const router = Router();

router.get("/", expensesController.getAll);
router.get("/top-five", expensesController.getTopFive);

router.get("/:id", isValidMongoIdMiddleware, expensesController.getById);

router.post(
  "/",
  expensesMiddleware.validateCreateFields,
  expensesController.create,
);

router.put("/:id", isValidMongoIdMiddleware, expensesController.update);

router.delete(
  "/:id",
  isValidMongoIdMiddleware,
  expensesMiddleware.checkDeletePermission,
  expensesController.delete,
);

export { router as expensesRouter };
