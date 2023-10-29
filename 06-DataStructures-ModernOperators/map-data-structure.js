import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("The Map data structure");

// A data structure that we can use for map values to keys, just like an
// objects maps store like key values pairs, but the difference is that in
// maps the keys can have any types.

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
// After the set method returns the Map structure
console.log(rest.set(2, "Lisbon, Portugal"));
// Chaining the set() method.
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed :(");

console.log(rest.get("name")); // 'Classico Italiano'
console.log(rest.get(true)); // 'We are open'
console.log(rest.get(1)); // 'Firenze, Italy'

const time = 21;
// We are infering the value of the get method.
rest.get(time > rest.get("open") && time < rest.get("close")); // 'We are open'
console.warn("Current value of the Map 'rest'");
console.log(rest);
console.log(rest.has("categories"));
rest.delete(2);
console.log(`'rest' size: ${rest.size}`);
console.warn("Cleaning the 'rest' Map");
rest.clear();
console.log(rest);

// Asign an array as a key of the Map

// rest.set([1, 2], 'Test');
// console.log(rest); This is undefined
/*Because remember the object types are pasing by reference
the array in the get method is a different reference than the key in the definition of the set method. */

// console.log(rest.get([1, 2])); // This could be an error.

// The way to solve this ...
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.get(arr)); // Test as we spected.
