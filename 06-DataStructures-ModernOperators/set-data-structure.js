import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("The set data structure");

// A set is just a collection of UNIQUE VALUES, IT CAN NEVER HAVE DUPLICATES.
// Order inside a set is irrelevant. So there are no indexes and is no way
// to retrieve a value.

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);
console.log(new Set("Jonas"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
console.log(ordersSet);

const food = "Risotto";
ordersSet.has(food) && ordersSet.delete(food);

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

ordersSet.clear();
console.log(ordersSet);

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
console.log(staff);

// This is not the same (New Set as a data structure)
let staffUnique = new Set(staff);
// Than this ...(New destructured Array)
staffUnique = [...new Set(staff)];
console.log(staffUnique);

let myName = "JoseArbeyLopezMartinez";
console.log({
  myName,
  sizeName: myName.length,
  sizeNameSet: new Set(myName).size,
});
