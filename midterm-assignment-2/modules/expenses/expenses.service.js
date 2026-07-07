import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";
import { readFile, writeFile } from "../../utils/fs.utils.js";

const DB = new URL("../../data/expenses.json", import.meta.url);

export async function readAll() {
  const data = readFile(DB, true);
  return data;
}

export async function readById(id) {
  const expenses = await readAll();
  return expenses.find((e) => e.id === id);
}

export async function create({ title, amount, category }) {
  const expenses = await readAll();
  const newExpense = {
    id: crypto.randomUUID(),
    title,
    amount: Number(amount),
    category,
  };
  expenses.push(newExpense);
  await writeFile(DB, expenses);
  return newExpense;
}

export async function update(id, { title, amount, category }) {
  let expenses = await readAll();
  expenses = expenses.map((e) => {
    if (e.id === id) {
      return { ...e, title, amount: Number(amount), category };
    }
    return e;
  });
  await writeFile(DB, expenses);
  return expenses.find((e) => e.id === id);
}

export async function remove(id) {
  let expenses = await readAll();
  expenses = expenses.filter((e) => e.id !== id);
  await writeFile(DB, expenses);
}
