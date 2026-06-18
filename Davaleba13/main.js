import express from "express";
import fs from "fs/promises";
import { readFile, writeFile } from "./utils/fs.utils.js";
import { validateExpenseData } from "./utils/helpers.js";

const app = express();
const PORT = 3000;
const DB = "expenses.json";

app.use(express.json());

app.get("/expenses", async (req, res) => {
  let data = await readFile(DB, true);
  const { category, sort, page = 1, take = 10 } = req.query;

  if (category) {
    data = data.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase(),
    );
  }

  if (sort === "asc" || sort === "desc") {
    data.sort((a, b) => {
      const diff = new Date(a.createdAt) - new Date(b.createdAt);
      return sort === "asc" ? diff : -diff;
    });
  }

  const pageNum = Math.max(Number(page), 1);
  const takeNum = Math.min(Math.max(Number(take), 1), 30);

  const startIndex = (pageNum - 1) * takeNum;
  const paginatedData = data.slice(startIndex, startIndex + takeNum);

  res.json({
    page: pageNum,
    take: takeNum,
    totalItems: data.length,
    data: paginatedData,
  });
});

app.get("/expenses/:id", async (req, res) => {
  const data = await readFile(DB, true);
  const expense = data.find((item) => item.id === Number(req.params.id));

  if (!expense) {
    return res.status(404).json({ error: "ჩანაწერი ვერ მოიძებნა" });
  }

  res.json(expense);
});

app.post("/expenses", async (req, res) => {
  const { category, price } = req.body;

  const validation = validateExpenseData(category);
  if (!validation.isValid) {
    return res.status(400).json({ error: validation.message });
  }

  const data = await readFile(DB, true);
  const lastId = data[data.length - 1]?.id || 0;

  const newExpense = {
    id: lastId + 1,
    category: category.trim(),
    price: validation.price,
    createdAt: new Date().toISOString(),
  };

  data.push(newExpense);
  await writeFile(DB, data);

  res.status(201).json(newExpense);
});

app.put("/expenses/:id", async (req, res) => {
  const data = await readFile(DB, true);
  const index = data.findIndex((item) => item.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "ჩანაწერი ვერ მოიძებნა" });
  }

  const { category, price } = req.body;
  const validation = validateExpenseData(category);

  if (!validation.isValid) {
    return res.status(400).json({ error: validation.message });
  }

  data[index] = {
    ...data[index],
    category: category.trim(),
    price: validation.price,
  };

  await writeFile(DB, data);
  res.json(data[index]);
});

app.delete("/expenses/:id", async (req, res) => {
  const secretHeader = req.headers["secret"];
  if (secretHeader !== "random123") {
    return res.status(401).json({
      error: "თქვენ არ გაქვთ წაშლის უფლება",
    });
  }

  const data = await readFile(DB, true);
  const index = data.findIndex((item) => item.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "ჩანაწერი ვერ მოიძებნა" });
  }

  const [deletedExpense] = data.splice(index, 1);
  await writeFile(DB, data);

  res.json({ message: "ჩანაწერი წაიშალა", deletedExpense });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
