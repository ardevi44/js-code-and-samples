// DOC: Array methods

let arr = ["a", "b", "c", "d", "e"];

/*
console.log(arr);
console.log(arr.slice(2)); // Start index
console.log(arr.slice(2, 5)); // Start index and final index excluding it
console.log(arr.slice(-2)); // Two positions from the end
console.log(arr.slice(-1)); // Just the las index
console.log(arr.slice(1, -2)); // The second parameter starts from the end until the second element from the end but excluding it so this is b and c elements.
console.log(arr.slice());
console.log([...arr]);

// DOC: The splice method

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// DOC: Reverse method
const arr2 = ["j", "i", "h", "g", "f"];
console.log("New arr2: ", arr2);
console.log("arr2 reversed: ", arr2.reverse());

// DOC: Concat method
const letters = arr.concat(arr2);
console.log("letters array concat: ", letters);

// DOC: Join method
console.log(letters.join(" - "));

// DOC: At Method
console.log(arr2[0]);
console.log(arr2.at(0));

// NOTE: Getting last array element
console.log(arr2[arr2.length - 1]);
console.log(arr2.slice(-1)[0]);
// New method
console.log(arr2.at(-1));
console.log("Ardevi44".at(0));
console.log("Ardevi44".at(-1));

// DOC: ForEach Array method

 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
// Using the for of method
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

 */

/*
NOTE: Parameters order
1. The current element
2. The index
3. The array
*/

/*
movements.forEach(function (movement, index, array) {
  console.log(
    movement > 0
      ? `[${index + 1}] -> ${movement} [deposited]`
      : `[${index + 1}] -> ${Math.abs(movement)} [withdrew]`
  );
});
 */

// DOC: ForEach method inside Maps and Set in JS

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

/*
NOTE: Parameters order
1. The value
2. The key
3. The map
*/

/*
// Inside a Map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Inside a Set
// A set doesn't have keys or indexes, just values and these are uniques.
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

*/

// DOC: Map method in javascript.

/* NOTE: Will give us a new array, original array will not be modified
- This will transform each element of an array 
- Map has access to the same parameters as the forEach function in the arrays
  1. Current Item
  2. Index number
  3. The array itself
*/

const eurToUsd = 1.1;

/*
NOTE: Using array methods ...
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

Using for or method ...
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

console.log(movementsUSDfor);
 */
/*
// NOTE: Chaining array methods
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
 */

// NOTE: The some array method

console.log(movements);
// includes evaluates just equality
console.log("There is a withdrawal equal to -130: ", movements.includes(-130));
// It returns true or false based on the condition
const amount = 80000;
const anyDeposits = movements.some(mov => mov > amount);
console.log(`There is any value above ${amount}:`, anyDeposits);

// NOTE: The every array method
// Every elements in the array pass the condition returns true
// console.log(typeof -12);
// Separate the function and the passed as argument
isNumberType = value => typeof value === "number";
console.log(movements.every(isNumberType));
