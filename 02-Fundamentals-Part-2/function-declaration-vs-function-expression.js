"use strict";

import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("Function Declarations vs. Function Expressions");

// We can call the function before its initialization
// Hoisting behavior
const age1 = calcAge1(1991);

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
console.log(age1);

// This line below will not work
// const age2 = calcAge2(1991)

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);
