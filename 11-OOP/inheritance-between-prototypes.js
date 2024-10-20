const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// First we create the Student constructor function, and call to the parent constructor if exists
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Immediately we create the prototype of Student from the Person.prototype.
// Linking prototypes
Student.prototype = Object.create(Person.prototype);
// And we have to link again the right constructor function to the Student.prototype
Student.prototype.constructor = Student;

// After that we add more methods to that prototype, in other case we will override what was in there before
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I'm studying ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.warn("The prototype of Student");
console.log(mike.__proto__);
console.warn("The prototype of that prototype");
console.log(mike.__proto__.__proto__);
console.warn("And the constructor function of the Student");
console.log(mike.__proto__.constructor);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.dir(Student.prototype.constructor);
