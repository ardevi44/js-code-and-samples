/* This file behaves like a standard script, it means doesn't "use strict". It doesn't use the type = "module" in <script></script> tag. */

"use strict";

const subjectLecture = 'Using the "this" keyword';
let h1El = document.querySelector("h1");

document.title = subjectLecture;
h1El.textContent = subjectLecture;

console.log(this); // Window Object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // Window object without "use strict"
  // "use strict" the value is undefined
  console.log(this); // Window Object, when use strict it is undefined
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // Window no matter it is using or not strict mode, cause arrow function
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
    console.log(this); // This object
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

// Passing by reference a method definition
matilda.calcAge = jonas.calcAge;

matilda.calcAge(); // Matilda object
