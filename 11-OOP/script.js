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
// Cause if we have many Person objects we'll have the same number of functions attached as well to that object.
// Instead prototypal inheritance is better with the constructor function approach.

// This function is defined only once, cause the prototypal inheritance approach.
// Remember, each function in js has a prototype property attached to them, so that allows us
// inherit methods, this actually is what we call the prototypal inheritance.
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.species = "Homo Sapiens";

// Defining many instances of Person
const jonas = new Person("Jonas", 1991);
const jack = new Person("Jack", 1975);
const matilda = new Person("Matilda", 2017);

// This functions is attached to the constructor function and not to the prototype.
// Static method behavior is like a kind of helper.
Person.sayHello = function () {
  console.log(`Hi I'm static`);
};

console.log(jonas);

// isntanceof is a kind of operator for js
console.log(matilda instanceof Person); // true

// The line 52 will return the constructor function associated to the prototype, in other words
// the prototype has a link to its constructor.
// console.log(Person.prototype.constructor);

jonas.calcAge(); // It comes from the prototype.

// We can access to __proto__ that's simply the prototype property in the object
// One comes from the instance and the other from the class
console.log(jonas.__proto__ === Person.prototype);

// The next line is actually is the prototype chaining
console.log(jonas.__proto__.__proto__);

// Its also true, and it comes from the Object.prototype
// because the chaining.
console.log(Person.prototype.isPrototypeOf(jonas));

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species")); // This is false cause is on the prototype

console.log(jonas.__proto__.__proto__.__proto__); // null

// Testing built-in Objects
const arr = [1, 45, 67, 234];
console.log(arr.__proto__);

const h1 = document.querySelector("h1");
console.dir(h1);
