#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs";

const program = new Command();
const DB = "todo.json";

function read() {
  const data = fs.readFileSync(DB, "utf-8");
  return JSON.parse(data);
}

function write(todos) {
  fs.writeFileSync(DB, JSON.stringify(todos), "utf-8");
}

program.name("todo-cli").description("todo app").version("1.0.0");

program
  .command("show")
  .description("all todo")
  .action(() => {
    const todos = read();
    console.log(todos);
  });

program
  .command("add")
  .description("new todo")
  .argument("<todoName>")
  .action((todoName) => {
    const todos = read();

    const lastId = todos[todos.length - 1]?.id || 0;
    const newTodo = {
      id: lastId + 1,
      title: todoName,
      isDone: false,
    };

    todos.push(newTodo);
    write(todos);

    console.log(newTodo);
  });

program
  .command("delete")
  .description("delete todo")
  .argument("<todoId>")
  .action((todoId) => {
    const todos = read();
    const idNum = Number(todoId);

    const index = todos.findIndex((t) => t.id === idNum);

    if (index === -1) {
      console.log("თუდუ ამ ID-ით ვერ მოიძებნა!");
      return;
    }

    const deletedTodo = todos[index];

    todos.splice(index, 1);
    write(todos);

    console.log(deletedTodo);
  });

program
  .command("update")
  .description("თუდუს განახლება")
  .argument("<todoId>")
  .option("-n, --name <todoName>", "new name")
  .action((todoId, options) => {
    const todos = read();
    const idNum = Number(todoId);

    const todo = todos.find((t) => t.id === idNum);

    if (!todo) {
      return;
    }

    if (options.name) {
      todo.title = options.name;
    }

    if (options.done) {
      todo.isDone = options.done === "true";
    }

    write(todos);
    console.log(todo);
  });

program.parse();
