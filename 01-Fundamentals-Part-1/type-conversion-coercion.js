"use strict";

import { assignH1Text, assignDocTitle } from "./assets/js/globals.js";

const lectureTitle = "Type conversion and Coercion";

assignDocTitle(lectureTitle);
assignH1Text(lectureTitle);

// Type Conversion
// When we manually convert from one data type to another */

// Coercion
// When JavaScript converts data types automatically from one to another

// **********************************************************

// Type Conversion examples

const inputYear = "1991";
// It will be a coercion case
console.log(inputYear + 18);

// Type Conversion
console.log(Number(inputYear) + 18);

// NaN actually means a invalid number, cause "typeof NaN" is "number"
console.log(Number("Jonas")); // NaN
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion examples
console.log("I am " + 23 + " years old");
