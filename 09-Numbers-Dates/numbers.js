// All numbers in js are treated as float numbers
console.log(23 === 23.0); // true

console.log(0.1 + 0.2); // A larger number
// NOTE: This happens by the way how js store the numbers in memory
console.log(0.1 + 0.2 === 0.3); // This is false, but it should be true

console.log(Number("23"));
// Type coercion by the plus sign
console.log(+"23");

// Parsing
// Second parameter is the radix
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e23", 10)); // NaN

// These are global functions it means you don't have to use the Number constructor
// parseFloat()
console.log(Number.parseFloat("2.5rem"));
// parseInt()
console.log(Number.parseInt("2.5rem"));
// This also works
console.log(parseInt("2.5rem"));
// This also works
const floatNumber = Number.parseFloat("   34.678px    ");
console.log(floatNumber, typeof floatNumber);

// Only returns true if the given value is (NaN) Not a Number this has to be the value.
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN(Number({}))); // true
console.log(Number.isNaN(Number("hello world"))); // true

// This bellow is the correct way to check if a certain value is a number. Not is NaN.
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));

// Check if some value is an integer
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

// NOTE: * Math and rounding

// Square root
console.log(Math.sqrt(25));

console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log("Getting the max number");
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2)); // NaN

console.log("Getting the min number");
console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

// Rounding Integers

// Just remove the decimal part

console.group("Trunc function");
console.log(Math.trunc(23.3));
console.groupEnd();

console.group("Rounding function");
console.log(Math.round(23.3));
console.log(Math.round(23.9));
console.groupEnd();

console.group("Ceil function");
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
console.groupEnd();

console.group("Floor function");
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));
// This is actually -24 cause the direction is opposite
console.log(Math.floor(-23.3));
console.groupEnd();

// Rounding decimals

// It will truncate the number but rounding it, it will return a string.
console.group("To fixed in float numbers");
console.log((2.7).toFixed(0));
console.log((2.2).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); // coercion to number
console.groupEnd();

// Playing with remainder and division arithmetic operator

console.group("Testing the remainder operator");
console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));
console.groupEnd();

// Numeric separators

console.group("Numeric separators");
const diameter = 297_460_000_000;
console.log(diameter);

const priceInCents = 345_99;
console.log(priceInCents);
console.groupEnd();
