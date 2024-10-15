"use strict";

// This will be the prototype
const PersonProto = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const ardevi = Object.create(PersonProto);

// At this moment this is an empty object
console.log(ardevi);
console.log(ardevi.__proto__ === PersonProto);

ardevi.init("ardevi44", 1990);

console.log(ardevi);
console.log(ardevi.firstName);
console.log(ardevi.birthYear);

// ardevi.name = "ardevi44";
// ardevi.birthYear = 2002;
// ardevi.calcAge();
