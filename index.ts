#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todo: string[] = [];

console.log(chalk.redBright(" \n \t Welcome to Arfa's To-Do List \n"));

let condition = true;

while (condition) {
  let Operators = await inquirer.prompt([
    {
      name: "operatorss",
      type: "list",
      message: chalk.bgCyanBright("Select Only One Option :"),
      choices: [
        "Add Tasks",
        "View Tasks",
        "Update Tasks",
        "Delete Tasks",
        "Exit",
      ],
    },
  ]);
  if (Operators.operatorss === "Add Tasks") {
    let addtasks = await inquirer.prompt([
      {
        name: "additems",
        type: "input",
        message: chalk.bgBlackBright("Add New Items :"),
      },
    ]);
    todo.push(addtasks.additems);
    condition = addtasks.additems;
    console.log(todo);
  }
  if (Operators.operatorss === "View Tasks") {
    console.log(todo);
  }
  if (Operators.operatorss === "Update Tasks") {
    let update = await inquirer.prompt([
      {
        name: "updateditems",
        type: "list",
        message: chalk.green("Select Items To Update"),
        choices: todo.map((item) => item),
      },
    ]);
    let update2 = await inquirer.prompt([
      {
        name: "updateditems2",
        type: "input",
        message: chalk.bgYellow("Update items"),
      },
    ]);
    let newTodoslist: any[] = todo.filter((val) => val !== update.updateditems);
    todo = [...newTodoslist, update2.updateditems2];
  }

  if (Operators.operatorss === "Delete Tasks") {
    let deleteitem = await inquirer.prompt([
      {
        name: "deleteditems",
        type: "list",
        message: chalk.red("Select Items To Delete"),
        choices: todo.map((item) => item),
      },
    ]);
    let newTodos: any[] = todo.filter((val) => val !== deleteitem.deleteditems);
    todo = [...newTodos];
  } else if (Operators.operatorss === "Exit") {
    console.log(chalk.bgBlue("\t\t Thank You For Using To Do List App"));
    break;
  }
}
