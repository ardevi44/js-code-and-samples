"use strict";

import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("Destructuring arrays");

// Destructuring arrays

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Without destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// With destructuring. The original array doesn't change.
const [x, y, z] = arr;
console.log(x, y, z);

// Take the first and second categories in the object's array. The order matters.
const [first, second] = restaurant.categories;
console.log(first, second);

/* Take the first and third categories in the object's array. The hole means
ignore that position. */
let [main, , secondary] = restaurant.categories;
console.log({ main, secondary });

// Switch the main and the secondary category
// Without destructuring ...
/*
const tmp = main;
main = secondary;
secondary = tmp;
console.log(main, secondary);
 */

// Using destructuring ...
// With destructuring is easely change order.
[main, secondary] = [secondary, main]; // Remember the order matters.
console.log({ main, secondary });

// Receive an array of two values from the object's function.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log("Starter: " + starter);
console.log("Main Course: " + mainCourse);

const nested = [2, 4, [5, 6]];
/*
const [i, , j] = nested;
console.log({ i, j });
*/

// Easely manage nesting values from the arrays, just jumping positions.
const [i, , [j, k]] = nested;
console.log({
  i,
  j,
  k,
});

// Defaul values in destructuring
const [p = 1, q = 1, r = 12] = [8, 9];
console.log({ p, q, r }); // p = 8, q = 9 and r = 12
