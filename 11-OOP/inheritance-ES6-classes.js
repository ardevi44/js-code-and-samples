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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always need to happen first
    // If we don't need add more attributes but those who already are in the super class we can avoid
    // the super call constructor. And the object inherits all those attributes anyway.
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I'm studying ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha Sanchez", 2012, "Computer Science");
martha.introduce();
martha.calcAge();
