// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  // working as the constructor function
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // This will be in the prototype of the object.
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hi, I'm ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // This is a static method in ES6 classes
  static hey() {
    console.log("Hello there!");
  }
}

const jessica = new PersonCl("Jessica Daniels", 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// NOTE:
// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are always executed in strict mode

// Getters and Setters in Javascript, with literal objects

const walter = new PersonCl("Walter Carl", 1956);

const account = {
  owner: "jonas",
  movements: [200, 530, 120, 300],

  // Available ans common in al objects inside js
  // just prepend the get keyword
  // the slice is for not to change the array
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// just using it as a property a getter
console.log(account.latest);
// just using it as a property as well
account.latest = 400;
// console.log(account.latest);

console.log(walter);
