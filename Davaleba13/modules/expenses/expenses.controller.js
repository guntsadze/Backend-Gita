import { expensesService } from "./expenses.service.js";

export const expensesController = {
  async getExpenses(req, res) {
    const result = await expensesService.getAll(req.query);
    console.log("🚀 ~ result:", result);
    res.json(result);
  },

  async getExpenseById(req, res) {
    const expense = await expensesService.getById(req.params.id);
    if (!expense) {
      return res.status(404).json({ error: "ჩანაწერი ვერ მოიძებნა" });
    }
    res.json(expense);
  },

  async createExpense(req, res) {
    const { category } = req.body;

    const newExpense = await expensesService.create({
      category,
      priceValidation: req.validatedPrice,
    });
    res.status(201).json(newExpense);
  },

  async updateExpense(req, res) {
    const { category } = req.body;
    const updatedExpense = await expensesService.update(req.params.id, {
      category,
    });

    if (!updatedExpense) {
      return res.status(404).json({ error: "ჩანაწერი ვერ მოიძებნა" });
    }
    res.json(updatedExpense);
  },

  async deleteExpense(req, res) {
    const deletedExpense = await expensesService.delete(req.params.id);
    if (!deletedExpense) {
      return res.status(404).json({ error: "ჩანაწერი ვერ მოიძებნა" });
    }
    res.json({ message: "ჩანაწერი წაიშალა", deletedExpense });
  },
};
