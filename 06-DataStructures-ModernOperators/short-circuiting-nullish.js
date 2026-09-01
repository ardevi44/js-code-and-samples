"use strict";

import { assignDocTitleAndH1 } from "./assets/js/globals.js";
// Restaurant object reference file
import { restaurant } from "./restaurant-object.js";

assignDocTitleAndH1("Short circuit and Nullish Coalescing Operator");

// Logical Operators example

// We get 3
console.log(3 || "Jonas");

/*Here we gonna get "Jonas" cause the OR operator will continue evaluating till it finds
a truthy value in this case is "Jonas" so the operator's evaluation ends there.*/
console.log("" || 0 || false || "Jonas");
console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello

restaurant.numGuests = 23;

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1); // 23 cause the value is true

const guest2 = restaurant.numGuests || 10;
console.log(guest2); // 23 again

console.log(0 && "Jonas");
console.log(7 && "Jonas");
console.warn("Hello" && 23 && null && "Jonas"); // null

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// Nullish Coalescing Operator example

console.warn("---- Nullish Coalescing Operator ?? ----");
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10 because the op. evaluates the 0 as falsy value

// Nullish: just excludes null and undefined, the value of 0 is accepted
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0
