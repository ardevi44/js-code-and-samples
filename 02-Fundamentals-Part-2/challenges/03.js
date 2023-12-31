///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
"use strict";

// import { assignDocTitleAndH1 } from "./../assets/js/globals.js";

// assignDocTitleAndH1("Challenge 3");

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI() {
    this.BMI = Number((this.mass / Math.pow(this.height, 2)).toFixed(2));
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.67,
};

const getHigherBMI = (obj1, obj2) => {
  const higherMessage =
    obj1.BMI === obj2.BMI
      ? `${obj1.fullName} and ${obj2.fullName} have the same BMI of (${obj1.BMI})!`
      : obj1.BMI > obj2.BMI
      ? `${obj1.fullName}'s BMI (${obj1.BMI}) is higher than ${obj2.fullName}'s (${obj2.BMI})!`
      : `${obj2.fullName}'s BMI (${obj2.BMI}) is higher than ${obj1.fullName}'s (${obj1.BMI})!`;

  return higherMessage;
};

mark.calcBMI();

// separates the calcBMI function to use it later ...
const calcBMI = mark.calcBMI;

// Calculates the john's BMI
calcBMI.call(john);

console.log(getHigherBMI(mark, john));
