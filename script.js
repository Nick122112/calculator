"use strict";
function add(a, b) {
  const result = a + b;
  return result;
}

function subtract(a, b) {
  const result = a - b;
  return result;
}

function multiply(a, b) {
  const result = a * b;
  return result;
}

function divide(a, b) {
  const result = a / b;
  return result;
}

function operate(operator, a, b) {
  if (operator === "+") {
    const result = add(a, b);
    return result;
  } else if (operator === "-") {
    const result = subtract(a, b);
    return result;
  } else if (operator === "*") {
    const result = multiply(a, b);
    return result;
  } else if (operator === "/") {
    const result = divide(a, b);
    return result;
  }
}

//creates display value array
let numberSet = [];

//sets displayContainer variable
const displayContainer = document.createElement("div");
document
  .querySelector(".calculator-container")
  .insertBefore(displayContainer, document.querySelector("#button-container"));
displayContainer.setAttribute(
  "style",
  "background-color: #BDC69F; height: 8rem; border-radius: 0.8rem; padding: 0.5rem 2rem; display: flex; flex-direction:column; justify-content: flex-end; align-items: flex-end"
);

// sets displayEquation variable
const displayEquation = document.createElement("p");
displayContainer.appendChild(displayEquation);
displayEquation.setAttribute("style", "font-size: 3.2rem;");

//sets displaySolution variable
const displaySolution = document.createElement("p");
displayContainer.appendChild(displaySolution);
displaySolution.setAttribute("style", "font-size: 3.2rem;");

//sets initial displayEquation to 0
let equation = 0;
displayEquation.textContent = equation;
displaySolution.textContent = "";

//adds value to the equation array
function addValue(buttonValue) {
  numberSet.push(buttonValue);
  joinValue();
}

// joins displayEquation array so that it makes a single string
function joinValue() {
  numberSet.join("");
  equation = numberSet.join("");
  displayEquation.textContent = equation;
  displaySolution.textContent = "";
}

//**********************************
//BUTTONS
//**********************************
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clickClearBtn);

const button1 = document.getElementById("button1");
button1.addEventListener("click", clickBtn1);

const button2 = document.getElementById("button2");
button2.addEventListener("click", clickBtn2);

const button3 = document.getElementById("button3");
button3.addEventListener("click", clickBtn3);

const button4 = document.getElementById("button4");
button4.addEventListener("click", clickBtn4);

const button5 = document.getElementById("button5");
button5.addEventListener("click", clickBtn5);

const button6 = document.getElementById("button6");
button6.addEventListener("click", clickBtn6);

const button7 = document.getElementById("button7");
button7.addEventListener("click", clickBtn7);

const button8 = document.getElementById("button8");
button8.addEventListener("click", clickBtn8);

const button9 = document.getElementById("button9");
button9.addEventListener("click", clickBtn9);

const button0 = document.getElementById("button0");
button0.addEventListener("click", clickBtn0);

const backspaceBtn = document.getElementById("backspace-button");
backspaceBtn.addEventListener("click", clickBackSpaceBtn);

const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", clickAddBtn);

const subtractBtn = document.querySelector("#subtract-btn");
subtractBtn.addEventListener("click", clickSubtractBtn);

const multBtn = document.querySelector("#mult-btn");
multBtn.addEventListener("click", clickMultBtn);

const divBtn = document.querySelector("#div-btn");
divBtn.addEventListener("click", clickDivBtn);

const equalBtn = document.querySelector("#equal-btn");
equalBtn.addEventListener("click", clickEqualBtn);

function clickClearBtn() {
  numberSet = [];
  displayEquation.textContent = 0;
  displaySolution.textContent = "";
}

function clickBtn1() {
  addValue(1);
}

function clickBtn2() {
  addValue(2);
}
function clickBtn3() {
  addValue(3);
}
function clickBtn4() {
  addValue(4);
}
function clickBtn5() {
  addValue(5);
}
function clickBtn6() {
  addValue(6);
}
function clickBtn7() {
  addValue(7);
}
function clickBtn8() {
  addValue(8);
}
function clickBtn9() {
  addValue(9);
}
function clickBtn0() {
  addValue(0);
}

function clickBackSpaceBtn() {
  numberSet.pop();
  displayEquation.textContent = numberSet.join("");
  displaySolution.textContent = "";
  if (numberSet.length == 0) {
    displayEquation.textContent = 0;
  }
}

let numberSetArray1;
let numberSetArray2;
let numberSetNumber1;
let numberSetNumber2;
let operator;

function clickAddBtn() {
  if (
    numberSet.includes("+") ||
    numberSet.includes("-") ||
    numberSet.includes("*") ||
    numberSet.includes("/")
  ) {
    addEqual();
  } else {
    operator = "+";
    clickOperatorFunc();
    operatorBeginning();
  }
}

function clickSubtractBtn() {
  if (
    numberSet.includes("+") ||
    numberSet.includes("-") ||
    numberSet.includes("*") ||
    numberSet.includes("/")
  ) {
    subtractEqual();
  } else {
    operator = "-";
    clickOperatorFunc();
    operatorBeginning();
  }
}

function clickMultBtn() {
  if (
    numberSet.includes("+") ||
    numberSet.includes("-") ||
    numberSet.includes("*") ||
    numberSet.includes("/")
  ) {
    multEqual();
  } else {
    operator = "*";
    clickOperatorFunc();
    operatorBeginning();
  }
}

function clickDivBtn() {
  if (
    numberSet.includes("+") ||
    numberSet.includes("-") ||
    numberSet.includes("*") ||
    numberSet.includes("/")
  ) {
    divEqual();
  } else {
    operator = "/";
    clickOperatorFunc();
    operatorBeginning();
  }
}

function clickEqualBtn() {
  if (numberSet.includes("+")) {
    operator = "+";
    clickEqualFunc();
  } else if (numberSet.includes("-")) {
    operator = "-";
    clickEqualFunc();
  } else if (numberSet.includes("*")) {
    operator = "*";
    clickEqualFunc();
  } else if (numberSet.includes("/")) {
    operator = "/";
    clickEqualFunc();
    divideByZeroAlert();
  }
}

function clickOperatorFunc() {
  numberSet.push(operator);
  numberSetArray1 = numberSet.slice(0, numberSet.indexOf(operator)).join("");
  numberSetNumber1 = Number(numberSetArray1);
  displayEquation.textContent = numberSet.join("");
  displaySolution.textContent = "";
}

function clickEqualFunc() {
  numberSetArray1 = numberSet.slice(0, numberSet.indexOf(operator)).join("");
  numberSetNumber1 = Number(numberSetArray1);
  numberSetArray2 = numberSet
    .slice(numberSet.indexOf(operator) + 1, numberSet.length)
    .join("");
  numberSetNumber2 = Number(numberSetArray2);
  operate(operator, numberSetNumber1, numberSetNumber2);
  const solution = operate(operator, numberSetNumber1, numberSetNumber2);
  const roundedSolution = Math.round(solution * 1000) / 1000;
  displaySolution.textContent = roundedSolution;
  if (typeof solution !== "undefined") {
    numberSet.splice(0, numberSet.length);
    numberSet.push(roundedSolution);
  }
}

function addEqual() {
  numberSetArray1 = numberSet.slice(0, numberSet.indexOf(operator)).join("");
  numberSetArray2 = numberSet
    .slice(numberSet.indexOf(operator) + 1, numberSet.length)
    .join("");
  numberSetNumber1 = Number(numberSetArray1);
  numberSetNumber2 = Number(numberSetArray2);
  const solution = operate(operator, numberSetNumber1, numberSetNumber2);
  const roundedSolution = Math.round(solution * 1000) / 1000;
  displaySolution.textContent = roundedSolution;
  if (typeof solution !== "undefined") {
    operator = "+";
    numberSet.splice(0, numberSet.length);
    numberSet.push(roundedSolution);
    numberSet.push(operator);
  }
}

function subtractEqual() {
  numberSetArray1 = numberSet.slice(0, numberSet.indexOf(operator)).join("");
  numberSetArray2 = numberSet
    .slice(numberSet.indexOf(operator) + 1, numberSet.length)
    .join("");
  numberSetNumber1 = Number(numberSetArray1);
  numberSetNumber2 = Number(numberSetArray2);
  const solution = operate(operator, numberSetNumber1, numberSetNumber2);
  const roundedSolution = Math.round(solution * 1000) / 1000;
  displaySolution.textContent = roundedSolution;
  if (typeof solution !== "undefined") {
    operator = "-";
    numberSet.splice(0, numberSet.length);
    numberSet.push(roundedSolution);
    numberSet.push(operator);
  }
}

function multEqual() {
  numberSetArray1 = numberSet.slice(0, numberSet.indexOf(operator)).join("");
  numberSetArray2 = numberSet
    .slice(numberSet.indexOf(operator) + 1, numberSet.length)
    .join("");
  numberSetNumber1 = Number(numberSetArray1);
  numberSetNumber2 = Number(numberSetArray2);
  const solution = operate(operator, numberSetNumber1, numberSetNumber2);
  const roundedSolution = Math.round(solution * 1000) / 1000;
  displaySolution.textContent = roundedSolution;
  if (typeof solution !== "undefined") {
    operator = "*";
    numberSet.splice(0, numberSet.length);
    numberSet.push(roundedSolution);
    numberSet.push(operator);
  }
}

function divEqual() {
  numberSetArray1 = numberSet.slice(0, numberSet.indexOf(operator)).join("");
  numberSetArray2 = numberSet
    .slice(numberSet.indexOf(operator) + 1, numberSet.length)
    .join("");
  numberSetNumber1 = Number(numberSetArray1);
  numberSetNumber2 = Number(numberSetArray2);
  const solution = operate(operator, numberSetNumber1, numberSetNumber2);
  const roundedSolution = Math.round(solution * 1000) / 1000;
  displaySolution.textContent = roundedSolution;
  if (typeof solution !== "undefined") {
    operator = "/";
    numberSet.splice(0, numberSet.length);
    numberSet.push(roundedSolution);
    numberSet.push(operator);
  }
  divideByZeroAlert();
}

function operatorBeginning() {
  if (
    numberSet[0] === "+" ||
    numberSet[0] === "-" ||
    numberSet[0] === "*" ||
    numberSet[0] === "/"
  ) {
    numberSet.pop();
  }
}

function divideByZeroAlert() {
  if (numberSetNumber2 === 0) {
    alert(`You cannot divide by zero. Calcuator has been reset.`);
    numberSet = [];
    displayEquation.textContent = 0;
    displaySolution.textContent = "";
  }
}

//decimal button
const decimalBtn = document.querySelector("#decimal-button");
decimalBtn.addEventListener("click", () => {
  numberSetArray2 = numberSet
    .slice(numberSet.indexOf(operator) + 1, numberSet.length)
    .join("");
  if (
    numberSet.includes("+") === false &&
    numberSet.includes("-") === false &&
    numberSet.includes("*") === false &&
    numberSet.includes("/") === false &&
    numberSet.includes(".")
  ) {
    addValue("");
  } else if (numberSetArray2.includes(".")) {
    addValue("");
  } else {
    addValue(".");
  }
});
