import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("Object Methods");

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1992,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,
  // calcAge: function () {
  // },
  //But you can also do it this way
  calcAge(birthYear = this.birthYear) {
    this.age = 2023 - birthYear;
    return this.age;
  },
};
console.warn(jonas.calcAge());
// And here you can call this like so. You can pass an argument or not and that's it
// console.log(jonas["calcAge"]());

console.log(jonas);
