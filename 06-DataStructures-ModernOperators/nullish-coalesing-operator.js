const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
// console.log(guests);

// This operator evals if the value on the left side
// is "null or undefined" we take 10 as the value instead the real value.
// this operator doesn't ask for 0 or ''.
const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

let a = undefined;
let b = null;
let c = 0;
let d = '';
let e = [];

console.log(a ?? 'Some text'); // Some text
console.log(b ?? 'Some text'); // Some text
console.log(c ?? 'Some text'); // 0
console.log(d ?? 'Some text'); // ""
console.log(e ?? 'Some text'); // []
