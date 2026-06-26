import express from "express";
import { expensesRouter } from "./modules/expenses/expenses.router.js";
import { factsRouter } from "./modules/facts/facts.router.js";
import connectDB from "./config/db.config.js";
import dotenv from "dotenv/config";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/expenses", expensesRouter);

app.use("/facts", factsRouter);

connectDB()
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`)),
  )
  .catch((err) => console.log(err));
