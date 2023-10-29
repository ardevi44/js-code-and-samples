/*
  Rest Pattern

  The premise with Rest Pattern is condense the elements into
  an array. Pack elements into an array.

  Not to expand elements as the spread operator.

  Rest name comes from "The rest of the elements" must be packaged.
*/

import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("Rest Pattern");

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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// REST is in the left side of the equal sign not in the right side
const [a, b, ...others] = [1, 2, 3, 4, 5, 6]; // 3,4,5 and 6 will be in the "others" array.

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu, // This is "SPREAD"
  ...restaurant.starterMenu, // SPREAD
];

// All the rest values inside of openingHours object will be in the weekdays object
const { sat, ...weekdays } = restaurant.openingHours;

// REST in function parameters
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(1, 2, 3, 4, 5, 6, 7));

const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza("mushrooms", "onion", "olivas", "spinach");
