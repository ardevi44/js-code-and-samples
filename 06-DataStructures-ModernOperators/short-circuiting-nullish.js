"use strict";

import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("Short circuit and Nullish Coalescing Operator");

// Short circuit 3 is the first truly value. So we get 3
console.log(3 || "Jonas");

// Here we get 'Jonas' cause the first value is false then pass to next one
// and it's true and also the last one so if the last value
//  is false the circuit will show it anyway.
console.log("" || 0 || false || "Jonas");
console.log(undefined || 0 || "" || "Hello" || 23 || null);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.numGuests = 23;

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1); // 23 cause the value is true

const guest2 = restaurant.numGuests || 10;
console.log(guest2); // 23 again

console.log(0 && "Jonas");
console.log(7 && "Jonas");
console.log("Hello" && 23 && null && "Jonas");

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// TAKE NOTES LATER ...
console.warn("---- Nullish Coalescing Operator ?? ----");
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
