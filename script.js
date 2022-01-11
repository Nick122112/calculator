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

console.log(add(50, 25));
console.log(subtract(50, 25));
console.log(multiply(50, 25));
console.log(divide(50, 25));

//creates display value array
let numberSet = [];

//sets displayContainer variable
const displayContainer = document.createElement("div");
document.querySelector(".calculator-container").appendChild(displayContainer);

// sets displayEquation variable
const displayEquation = document.createElement("p");
displayContainer.appendChild(displayEquation);

//sets displaySolution variable
const displaySolution = document.createElement("p");
displayContainer.appendChild(displaySolution);

//sets initial displayEquation to 0
let equation = 0;
displayEquation.textContent = equation;

//adds value to the equation array
function addValue(buttonValue) {
  numberSet.push(buttonValue);
  console.log(numberSet);
  joinValue();
}

// joins displayEquation array so that it makes a single string
function joinValue() {
  equation = numberSet.join("");
  displayEquation.textContent = equation;
}
//creates backspaceBtn variable and adds event listener that calls backspaceBtn
// const backspaceBtn = document.getElementById("backspace-button");
// backspaceBtn.addEventListener("click", clickBackspaceBtn);

//creates clearButton variable and adds event listener that call clickClearBtn function
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clickClearBtn);

// creates button1 variable and adds and event listener that calls clickBtn1 function
const button1 = document.getElementById("button1");
button1.addEventListener("click", clickBtn1);

// creates button2 variable and adds an event listener that calls clickBtn2 function
const button2 = document.getElementById("button2");
button2.addEventListener("click", clickBtn2);

// creates button3 variable and adds an event listener that calls clickBtn3 function
const button3 = document.getElementById("button3");
button3.addEventListener("click", clickBtn3);

// creates button4 variable and adds an event listener that calls clickBtn4 function
const button4 = document.getElementById("button4");
button4.addEventListener("click", clickBtn4);

// creates button5 variable and adds an event listener that calls clickBtn5 function
const button5 = document.getElementById("button5");
button5.addEventListener("click", clickBtn5);

// creates button6 variable and adds an event listener that calls clickBtn6 function
const button6 = document.getElementById("button6");
button6.addEventListener("click", clickBtn6);

// creates button7 variable and adds an event listener that calls clickBtn7 function
const button7 = document.getElementById("button7");
button7.addEventListener("click", clickBtn7);

// creates button8 variable and adds an event listener that calls clickBtn9 function
const button8 = document.getElementById("button8");
button8.addEventListener("click", clickBtn8);

// creates button9 variable and adds an event listener that calls clickBtn9 function
const button9 = document.getElementById("button9");
button9.addEventListener("click", clickBtn9);

// creates button0 variable and adds an event listener that calls clickBtn0 function
const button0 = document.getElementById("button0");
button0.addEventListener("click", clickBtn0);

//creates addBtn variable and adds an event listener that calls clickAddBtn function
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", clickAddBtn);

//creates subtractBtn variable and adds an event listener that calls clickSubtractBtn function
const subtractBtn = document.querySelector("#subtract-btn");
subtractBtn.addEventListener("click", clickSubtractBtn);

//creates multBtn variable and adds an event listener that calls clicMultBtn function
const multBtn = document.querySelector("#mult-btn");
multBtn.addEventListener("click", clickMultBtn);

//creates multBtn variable and adds an event listener that calls clicMultBtn function
const divBtn = document.querySelector("#div-btn");
divBtn.addEventListener("click", clickDivBtn);

//creates equalBtn variable and adds an event listener that calls equalBtn variable
const equalBtn = document.querySelector("#equal-btn");
equalBtn.addEventListener("click", clickEqualBtn);

function clickClearBtn() {
  numberSet = [];
  displayEquation.textContent = 0;
}

// function clickBackspaceBtn() {
//   numberSet.pop();
//   displayEquation.textContent = numberSet.join("");
// }

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

let numberSetArray1;
let numberSetArray2;
let numberSetNumber1;
let numberSetNumber2;
let operator;

function clickAddBtn() {
  operator = "+";
  clickOperatorFunc();
}

function clickSubtractBtn() {
  operator = "-";
  clickOperatorFunc();
}

function clickMultBtn() {
  operator = "*";
  clickOperatorFunc();
}

function clickDivBtn() {
  operator = "/";
  clickOperatorFunc();
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
  }
}

function clickOperatorFunc() {
  numberSet.push(operator);
  console.log(numberSet);
  console.log(numberSet.indexOf(operator));
  numberSetArray1 = numberSet.slice(0, numberSet.indexOf(operator)).join("");
  numberSetNumber1 = Number(numberSetArray1);
  console.log(numberSetNumber1);
  return numberSetNumber1;
}

function clickEqualFunc() {
  numberSetArray2 = numberSet
    .slice(numberSet.indexOf(operator) + 1, numberSet.length)
    .join("");
  numberSetNumber2 = Number(numberSetArray2);
  console.log(numberSetNumber2);
  operate(operator, numberSetNumber1, numberSetNumber2);
  const solution = operate(operator, numberSetNumber1, numberSetNumber2);
  console.log(solution);
  displaySolution.textContent = solution;
  if (typeof solution !== "undefined") {
    numberSet.splice(0, numberSet.length);
    numberSet.push(solution);
    console.log(numberSet);
  }
}
