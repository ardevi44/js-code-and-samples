const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Enhacement 3, computed properties, make the key value takes some compute.
const openingHours = {
  [weekdays[3]]: {
    // "tue"
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// ES6 Enhanced object literals.

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Enhacement 1, just put the name of the outer object instead name : name.
  openingHours,
  // Enhacement 2, just write the name of the function instead function-name: "the function"
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
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

/* Only if the property on the left of the operator is not nullish the next
part will be executed, else it will return "undefined" immediately. */

console.log(restaurant.openingHours.mon?.open);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// Using optional chaining.

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods evaluation
// We can check if a method exists before call it.

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays evaluation
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

const users = [];

console.log(users[0]?.name ?? 'User array empty');
