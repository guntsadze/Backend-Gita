#!/usr/bin/env node

import { Command } from "commander";
import { readFile, writeFile } from "./utils/fs.utils.js";
import { validatePrice } from "./utils/helpers.js";

const program = new Command();
const DB = "expense.json";

program
  .name("expense-cli")
  .description("CLI tool to manage expenses")
  .version("1.0.0");

program
  .command("show")
  .description("Show expenses with filtering, sorting, and pagination")
  .option("-c, --category <category>", "Filter expenses by category")
  .option("-s, --sort <sort>", "Sort expenses by createdAt (asc, desc)")
  .option("-p, --page <page>", "Page number for pagination", "1")
  .option("-t, --take <take>", "Number of items per page", "10")
  .action(async (opts) => {
    let data = await readFile(DB, true);

    if (opts.category) {
      data = data.filter(
        (expense) =>
          expense.category.toLowerCase() === opts.category.toLowerCase(),
      );
    }

    if (opts.sort === "asc") {
      data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    if (opts.sort === "desc") {
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    const page = Number(opts.page);
    const take = Math.min(Number(opts.take), 20);
    const startIndex = (page - 1) * take;
    const endIndex = page * take;

    const paginatedData = data.slice(startIndex, endIndex);

    console.log(paginatedData);
  });

program
  .command("add")
  .description("Create a new expense")
  .argument("<category>")
  .argument("<price>")
  .action(async (category, price) => {
    const { isValid, price: numericPrice } = validatePrice(price);
    if (!isValid) return;

    const data = await readFile(DB, true);
    const lastId = data[data.length - 1]?.id || 0;

    const newExpense = {
      id: lastId + 1,
      category,
      price: numericPrice,
      createdAt: new Date().toISOString(),
    };

    data.push(newExpense);
    await writeFile(DB, data);
    console.log("ხარჯი წარმატებით დაემატა:", newExpense);
  });

program
  .command("update")
  .description("Update an existing expense")
  .argument("<id>")
  .option("-c, --category <category>")
  .option("-p, --price <price>")
  .action(async (id, opts) => {
    const data = await readFile(DB, true);
    const index = data.findIndex((expense) => expense.id === Number(id));

    if (index === -1) {
      console.log("ჩანაწერი ვერ მოიძებნა");
      return;
    }

    const updatedData = {};

    if (opts.category) {
      updatedData["category"] = opts.category;
    }

    if (opts.price) {
      const { isValid, price: numericPrice } = validatePrice(price);
      if (!isValid) return;

      updatedData["price"] = numericPrice;
    }

    data[index] = {
      ...data[index],
      ...updatedData,
    };

    await writeFile(DB, data);
    console.log(data[index]);
  });

program
  .command("delete")
  .description("Delete expense")
  .argument("<id>")
  .action(async (id) => {
    const data = await readFile(DB, true);
    const index = data.findIndex((expense) => expense.id === Number(id));

    if (index === -1) {
      console.log("ჩანაწერი ვერ მოიძებნა");
      return;
    }

    const deleted = data.splice(index, 1);
    await writeFile(DB, data);
    console.log(deleted[0]);
  });

program
  .command("search")
  .description("Search expenses by date")
  .argument("<date>")
  .action(async (date) => {
    const data = await readFile(DB, true);

    const results = data.filter((expense) =>
      expense.createdAt.startsWith(date),
    );

    if (results.length === 0) {
      console.log(`ჩანაწერები ვერ მოიძებნა.`);
      return;
    }

    console.log(results);
  });

program.parse();
