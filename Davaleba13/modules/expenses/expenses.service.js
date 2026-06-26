import { readFile, writeFile } from "../../utils/fs.utils.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB = path.join(__dirname, "../../db/expenses.json");

export const expensesService = {
  async getAll({ category, sort, page, take }) {
    let data = await readFile(DB, true);

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

    const pageNum = Math.max(Number(page || 1), 1);
    const takeNum = Math.min(Math.max(Number(take || 10), 1), 30);
    const startIndex = (pageNum - 1) * takeNum;

    return {
      page: pageNum,
      take: takeNum,
      totalItems: data.length,
      data: data.slice(startIndex, startIndex + takeNum),
    };
  },

  async getById(id) {
    const data = await readFile(DB, true);
    return data.find((item) => item.id === Number(id));
  },

  async create({ category, priceValidation }) {
    const data = await readFile(DB, true);
    const lastId = data[data.length - 1]?.id || 0;

    const newExpense = {
      id: lastId + 1,
      category: category.trim(),
      price: priceValidation,
      createdAt: new Date().toISOString(),
    };

    data.push(newExpense);
    await writeFile(DB, data);
    return newExpense;
  },

  async update(id, { category, priceValidation }) {
    const data = await readFile(DB, true);
    const index = data.findIndex((item) => item.id === Number(id));

    if (index === -1) return null;

    data[index] = {
      ...data[index],
      category: category.trim(),
      price: priceValidation,
    };

    await writeFile(DB, data);
    return data[index];
  },

  async delete(id) {
    const data = await readFile(DB, true);
    const index = data.findIndex((item) => item.id === Number(id));

    if (index === -1) return null;

    const [deletedExpense] = data.splice(index, 1);
    await writeFile(DB, data);
    return deletedExpense;
  },
};
