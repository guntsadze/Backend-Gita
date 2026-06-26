import { Router } from "express";
import { expensesController } from "./expenses.controller.js";
import { expensesMiddleware } from "./expenses.middleware.js";

const router = Router();

router.get("/", expensesController.getExpenses);
router.get("/:id", expensesController.getExpenseById);

router.post(
  "/",
  expensesMiddleware.validateCreateFields,
  expensesController.createExpense,
);

router.put("/:id", expensesController.updateExpense);

router.delete(
  "/:id",
  expensesMiddleware.checkDeletePermission,
  expensesController.deleteExpense,
);

export { router as expensesRouter };
