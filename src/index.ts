function main() {
  let num1 = 10;
  let num2 = 20;
  let operation = "x";
  if (operation == "+") {
    sum(num1, num2);
  } else if (operation == "-") {
    subtract(num1, num2);
  } else if (operation == "*") {
    multiply(num1, num2);
  } else if (operation == "/") {
    divide(num1, num2);
  } else {
    console.log("Invalid operator!!\nSelect a valid operator from +, -, *, /");
  }
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
