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

// sets displayValueScreen variable
const displayValueScreen = document.createElement("span");
displayContainer.appendChild(displayValueScreen);

//sets initial displayValueScreen to 0
let displayValue = 0;
displayValueScreen.textContent = displayValue;

//adds value to the displayValue array
function addValue(buttonValue) {
  numberSet.push(buttonValue);
  console.log(numberSet);
  joinValue();
}

// joins displayValue array so that it makes a single string
function joinValue() {
  console.log(numberSet.join(""));
  console.log(typeof numberSet.join(""));
  displayValue = numberSet.join("");
  displayValueScreen.textContent = displayValue;
}

// creates button1 variable and adds and event listener that calls clickBtn1 function
const button1 = document.getElementById("button1");
button1.addEventListener("click", clickBtn1);

// creates button2 variable and adds an event listener that calls clickBtn2 function
const button2 = document.getElementById("button2");
button2.addEventListener("click", clickBtn2);

//creates addBtn variable and adds an event listener that calls clickAddBtn function
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", clickAddBtn);

//creates equalBtn variable and adds an event listener that calls equalBtn variable
const equalBtn = document.querySelector("#equal-btn");
equalBtn.addEventListener("click", clickEqualBtn);

function clickBtn1() {
  addValue(1);
}
function clickBtn2() {
  addValue(2);
}

function clickAddBtn() {
  const operator = "+";
  numberSet.push(operator);
  console.log(numberSet);
  console.log(numberSet.indexOf(operator));
  let numberSet1 = numberSet.slice(0, numberSet.indexOf(operator));
  console.log(numberSet1.join(""));
}

function clickEqualBtn() {
  const operator = "+";
  let numberSet2 = numberSet.slice(
    numberSet.indexOf(operator) + 1,
    numberSet.length
  );
  console.log(numberSet2.join(""));
}
