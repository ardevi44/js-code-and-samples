"use strict";

import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("Destructuring Objects");
// Destructuring objects

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
};

// Same as the array destructuring but using key names of the target object
// Although here is not question of order but key name.
const { name, openingHours, categories } = restaurant;

// Also is easily change the name of the default keys. Using a colon
const {
  name: restaurantName, // restaurantName instead name and so on.
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

/*
- Set a default value is useful when the property doesn't exist,
the "menu" property doesn't exist then, just set an empty array.

- If the property doesn't exist and isn't set as a default value,
this just take an undefined value.

- If the starterMenu property doesn't exist set an empty array,
also change the name of the default property for "starters".
*/
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log({
  menu,
  starters,
});

// Mutating variables with objects

// Just declare some new variables ...
let a = 111;
let b = 999;

// Declare a new object with de same key values.
const obj = { a: 23, b: 7, c: 14 };

// Then we are triying to change the value of the global variables "a" and "b"
// by the values inside de object "obj".
// {a, b} = obj -> But this line is going to set an error.

// The correct way to do this is put it into parentheses.
({ a, b } = obj);

// Destructuring nested objects

const {
  fri: { open: o, close: c },
} = hours;

// Destructuring parameters in a function call using an object

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
