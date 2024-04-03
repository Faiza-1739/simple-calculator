#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    message: "Enter First Number",
    type: "number",
    name: "firstNumber",
  },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: " Select one of the operator to perform",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division","Exponent"],
  },
]);
//conditional statement

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
}

else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
  }
  else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
  }
 else  if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
  }
  else  if (answer.operator === "Exponent") {
    console.log(answer.firstNumber * 2);
  }
  else{
  console.log("You choose right operator")
  }
  console.log("THE End")