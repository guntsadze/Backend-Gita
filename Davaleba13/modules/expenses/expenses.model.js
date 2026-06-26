import mongoose from "mongoose";

const expensesSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export const ExpenseModel = mongoose.model("Expense", expensesSchema);
