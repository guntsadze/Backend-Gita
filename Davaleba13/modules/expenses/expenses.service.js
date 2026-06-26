import { BaseService } from "../common/services/base.service.js";
import { ExpenseModel } from "./expenses.model.js";

class ExpensesService extends BaseService {
  constructor() {
    super(ExpenseModel);
  }

  async getTopExpenses() {
    return await this.model.find().sort({ price: -1 }).limit(5);
  }

  async getAll({ category, amountFrom, amountTo, sort, page, take }) {
    const filter = {};

    if (category) {
      const categoriesArray = category.split(",").map((cat) => cat.trim());

      filter.category = {
        $in: categoriesArray.map((cat) => new RegExp(`^${cat}$`, "i")),
      };
    }

    if (amountFrom || amountTo) {
      filter.price = {};
      if (amountFrom) filter.price.$gte = Number(amountFrom);
      if (amountTo) filter.price.$lte = Number(amountTo);
    }

    return super.getAll({ filter, sort, page, take });
  }
}

export const expensesService = new ExpensesService();
