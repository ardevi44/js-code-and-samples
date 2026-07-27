"use strict";

import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("Introduction to Arrays");

// Arrays in javascript are objects

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(years[0]);
console.log(years[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

// We can mutate arrays elements even though they were declare with const
friends[2] = "Jay";
console.log(friends);

// A very clever way to use functions inside arrays
// very interesting
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const ages = new Array(
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
);
console.log(ages);
