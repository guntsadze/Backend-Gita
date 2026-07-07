import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import expenseViewRoutes from "./modules/expenses/expenses.view.js";
import expenseApiRoutes from "./modules/expenses/expenses.api.js";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", expenseViewRoutes);
app.use("/api/expenses", expenseApiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
