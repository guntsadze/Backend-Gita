import express from "express";
import fs from "fs/promises";
import { readFile, writeFile } from "./utils/fs.utils.js";
import { validateExpenseData } from "./utils/helpers.js";
import { expensesRouter } from "./modules/expenses/expenses.router.js";
import { factsRouter } from "./modules/facts/facts.router.js";

const app = express();
const PORT = 3000;
const DB = "expenses.json";

app.use(express.json());

app.use("/expenses", expensesRouter);

app.use("/facts", factsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
