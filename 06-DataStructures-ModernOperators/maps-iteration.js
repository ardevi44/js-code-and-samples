import { assignDocTitleAndH1 } from "./assets/js/globals.js";
assignDocTitleAndH1("Iterating over Maps");

// Another way to implement Maps
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

console.log(question);

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

console.log(restaurant.openingHours);
// This is an array, remember the value that we get of the entries method is an Array
const openingHoursArray = Object.entries(restaurant.openingHours);
// Another way to create a Map.
const openingHoursMap = new Map(openingHoursArray);
console.log(openingHoursMap);

console.log(question.get("question"));
// Loops are available also in Maps.
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Yor answer:'));

// console.log(question.get(answer === question.get('correct')));

// Convert Map to Array
console.log([...question]);
