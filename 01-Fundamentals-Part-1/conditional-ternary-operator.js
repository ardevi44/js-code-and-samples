import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("The conditional (Ternary) operator");

const age = 23;

// age >= 18
//   ? console.log("I like to drink wine! 😁")
//   : console.log("I like to drink water");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;

// Same logic but with "if else" statement
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}

console.log(drink2);
console.log(`I like to drink ${drink}`);
