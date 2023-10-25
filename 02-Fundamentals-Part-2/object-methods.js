import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("Object Methods");

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  // calcAge() {

  // }
};

console.log(jonas.calcAge());

console.log(jonas);
