import { BaseController } from "../controllers/base.controller.js";
import { expensesService } from "./expenses.service.js";

class ExpensesController extends BaseController {
  constructor() {
    super(expensesService);
  }

  getTopFive = async (req, res, next) => {
    try {
      const topExpenses = await this.service.getTopExpenses();
      return res.json(topExpenses);
    } catch (error) {
      next(error);
    }
  };
}

export const expensesController = new ExpensesController();
