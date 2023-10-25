import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("Looping through arrays");

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "Teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  // fill an array dinamicly, it works cause iterator works as a property for the array
  types[i] = typeof jonas[i];
}

console.log(types);
