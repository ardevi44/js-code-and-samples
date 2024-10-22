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

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I'm studying ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay Ramirez", 1994, "Computer Science");

console.log(jay);
console.log(jay.firstName);
console.log(jay.birthYear);
console.log(jay.course);
jay.calcAge();
jay.introduce();
