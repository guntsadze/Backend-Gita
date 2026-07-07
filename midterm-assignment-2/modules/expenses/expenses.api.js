import { Router } from "express";
import * as expenseService from "./expenses.service.js";

const router = Router();

router.get("/", async (req, res) => {
  const expenses = await expenseService.readAll();
  const { category } = req.query;

  if (category) {
    const filtered = expenses.filter((e) =>
      e.category.toLowerCase().includes(category.toLowerCase()),
    );
    return res.json(filtered);
  }
  res.json(expenses);
});

router.get("/:id", async (req, res) => {
  const expense = await expenseService.readById(req.params.id);
  if (!expense) return;
  res.json(expense);
});

router.post("/", async (req, res) => {
  const { title, amount, category } = req.body;
  if (!title || !amount || !category) return;

  await expenseService.create({ title, amount, category });
  res.redirect("/");
});

router.post("/:id/edit", async (req, res) => {
  const { title, amount, category } = req.body;
  await expenseService.update(req.params.id, { title, amount, category });
  res.redirect("/");
});

router.post("/:id/delete", async (req, res) => {
  await expenseService.remove(req.params.id);
  res.redirect("/");
});

export default router;
