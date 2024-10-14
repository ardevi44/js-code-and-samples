"use strict";

// Array.from is an static method
const arr = Array.from(document.querySelectorAll("h1"));
console.log(arr);

// These two are static methods, we can't accesses them from some object, just for the constructor
console.log(Number.parseInt(12.4));
console.log(Number.isInteger(12.4));
