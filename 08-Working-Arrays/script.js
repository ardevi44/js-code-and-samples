"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// * Array methods

let arr = ["a", "b", "c", "d", "e"];

console.log(arr);
console.log(arr.slice(2)); // Start index
console.log(arr.slice(2, 5)); // Start index and final index excluding it
console.log(arr.slice(-2)); // Two positions from the end
console.log(arr.slice(-1)); // Just the las index
console.log(arr.slice(1, -2)); // The second parameter starts from the end until the second element from the end but excluding it so this is b and c elements.
console.log(arr.slice());
console.log([...arr]);

// * The splice method

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// * The Reverse method
const arr2 = ["j", "i", "h", "g", "f"];
console.log("New arr2: ", arr2);
console.log("arr2 reversed: ", arr2.reverse());

// * The Concat method
const letters = arr.concat(arr2);
console.log("letters array concat: ", letters);

// * Join method
console.log(letters.join(" - "));

// At Method
console.log(arr2[0]);
console.log(arr2.at(0));

// Getting last array element
console.log(arr2[arr2.length - 1]);
console.log(arr2.slice(-1)[0]);
// New method
console.log(arr2.at(-1));
console.log("Ardevi44".at(0));
console.log("Ardevi44".at(-1));

// * ForEach Array method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

/*
1. The current element
2. The index
3. The array
*/

movements.forEach(function (movement, index, array) {
  console.log(
    movement > 0
      ? `[${index + 1}] -> ${movement} [deposited]`
      : `[${index + 1}] -> ${Math.abs(movement)} [withdrew]`
  );
});

// ForEach method inside Maps and Set in JS

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

/*
1. The value
2. The key
3. The map
*/

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
