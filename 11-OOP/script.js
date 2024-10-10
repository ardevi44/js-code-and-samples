"use strict";

// Steps when we instantiate an object from a constructor function
// 1. New empty object is created {}
// 2. Function is called, this = {}
// 3. {} Linked to prototype
// 4. Function automatically return {}

const Person = function (firstName, birthYear) {
  // These are the instance properties, available in all different instances of this function
  this.firstName = firstName;
  this.birthYear = birthYear;

  // This is bad practice.!! in this approach.
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

// NOTE:
// Never write a method inside a constructor function
// Cause if we have many Person objects we'll have the same num of functions attached as well to that object.
// Instead prototypal inheritance is better with the constructor function approach.

// This function is defined only once, cause the prototypal inheritance approach.
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.species = "Homo Sapiens";

// Defining many instances of Person
const jonas = new Person("Jonas", 1991);
const jack = new Person("Jack", 1975);
const matilda = new Person("Matilda", 2017);

// This functions is attached to the constructor function and not to the prototype.
// Static method behavior like a kind of helper.
Person.sayHello = function () {
  console.log(`Hi I'm static`);
};

console.log(jonas);

// isntanceof is a kind of operator for js
console.log(matilda instanceof Person); // true

jonas.calcAge(); // It comes from the prototype.

// these two are the same
console.log(jonas.__proto__ === Person.prototype);
// One comes from the instance and the other from the class

console.log(Person.prototype.isPrototypeOf(jonas)); // Its also true

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species")); // This is false cause is on the prototype

console.log(jonas.__proto__.__proto__.__proto__); // null
console.log(Person.prototype.constructor);

const arr = new Array();
console.log(arr.__proto__ === Array.prototype);

const h1 = document.querySelector("h1");
console.dir(h1);
