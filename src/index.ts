import inquirer from "inquirer";

function main() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "num 1",
        message: "Enter the first number: ",
      },
      {
        type: "number",
        name: "num 2",
        message: "Enter second number: ",
      },
      {
        type: "list",
        name: "operation",
        choices: ["+", "-", "*", "/"],
        message: "Select the operation",
      },
    ])
    .then((answers) => {
      let num1 = answers["num 1"] as number;
      let num2 = answers["num 2"] as number;
      if (answers.operation == "+") {
        sum(num1, num2);
      } else if (answers.operation == "-") {
        subtract(num1, num2);
      } else if (answers.operation == "*") {
        multiply(num1, num2);
      } else if (answers.operation == "/") {
        divide(num1, num2);
      } else {
        console.log(
          "Invalid operator!!\nSelect a valid operator from +, -, *, /"
        );
      }
    });
}

function sum(num1: number, num2: number) {
  let result = num1 + num2;
  console.log(result);
}
function subtract(num1: number, num2: number) {
  let result = num1 - num2;
  console.log(result);
}
function multiply(num1: number, num2: number) {
  let result = num1 * num2;
  console.log(result);
}
function divide(num1: number, num2: number) {
  let result = num1 / num2;
  console.log(result);
}

main();
