import { assignDocTitleAndH1 } from "./assets/js/globals.js";
assignDocTitleAndH1("Hoisting and TDZ");

// Hoisting with Variables
console.log(me); // undefined
// console.log(job); // Cannot access 'job' before initialization
// console.log(year); // Cannot access 'year' before initialization

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Hoisting with Functions
// console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

// const addExp = function (a, b) {
//   return a + b;
// };

/*This is hoisting, when the function is called above the value of addExp
is 'undefined' because will find de variable but not the value. */
var addExp = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example of a truble hoisting
console.log(numProducts);
// This will be true and some unexpected actions may happen
if (!numProducts) deleteShoppingCart();

// It is a hoisting variable
var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}
