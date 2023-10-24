import { assignH1Text, assignDocTitle } from "./assets/js/globals.js";

const lectureTitle = "Just Some Fundamentals";

assignDocTitle(lectureTitle);
assignH1Text(lectureTitle);

let js = "amazing";
if (js === "amazing") console.log("JavaScript is FUN!");

let firstName = "Jonas";
console.log(firstName);

// My country
let country = "Mexico";

// My continent
let continent = "North America";

// Population in millions
let population = 126;

console.log({
  continent,
  country,
  countryPopulation: population,
});

// Data Types - Dynamic Typing
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.warn("Data Types");
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(23);
console.log(typeof "Jonas");

/*
With let ...
- We can change the value, as we need
- allow "mutate" the value
*/
let petName;
let age = 28;
age = 31;

/*
With const...
We can't change the value or reassign and initialize ever using const
*/
const birthYear = 1991;
// birthYear = 1990; This is not allow.

// Operator precedence
const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.warn("Operator Precedence");
console.log({ ageJonas, ageSarah, IsJonasOld: now - 1991 > now - 2018 });
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
