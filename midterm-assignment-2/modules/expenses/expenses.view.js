import { Router } from "express";
import * as expenseService from "./expenses.service.js";

const router = Router();

router.get("/", async (req, res) => {
  let expenses = await expenseService.readAll();
  const { category } = req.query;

  if (category) {
    expenses = expenses.filter((e) =>
      e.category.toLowerCase().includes(category.toLowerCase()),
    );
  }

  res.render("pages/expenses/list", {
    expenses,
    currentCategory: category || "",
  });
});

router.get("/edit/:id", async (req, res) => {
  const expense = await expenseService.readById(req.params.id);
  if (!expense) {
    return res.status(404).render("pages/not-found");
  }
  res.render("pages/expenses/edit", { expense, title: "ხარჯის განახლება" });
});

export default router;
