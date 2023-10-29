"use strict";

import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("The spread operator");

// Spread Operator - Operador de propagación

/*

- Spread operator behaves like the destructuring but
it doesn't create a new variables, it is useful just in
cases that the elements are separated by commas, like arrays and arguments for a
functions.

- Spread operator makes a copy of an original array.

*/

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    return `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`;
  },
};

const arr1 = [1, 2, 7, 9];

// This going to separate each value inside arr1 into newArray
const newArray = [-1, 0, ...arr1];

// Also we can display all the values separately
console.log(...newArray);

// The Spread operator creates a copy of the original array.
// So we can mutate the copy instead the original one.
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// We can also join two arrays
const completeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// We can use the spread operator in iterables like arrays, strings, maps, sets, but NOT objects.
const str = "Jonas";

const letters = [...str, " ", "S."];
console.log(...letters);

// We can declare an array with executable functions
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];

// console.log(restaurant.orderPasta(...ingredients));

/*
- We can also use spread operator in objects too.
- Spread operator creates a copy of the original object not the same, 
diferent reference.
*/

const newRestaurant = { ...restaurant, founder: "Guiseppe", foundedIn: 1998 };
console.log(newRestaurant);
