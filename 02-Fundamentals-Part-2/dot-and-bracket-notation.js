"use strict";

import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("Dot and Bracket notation");

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";

// *** Use this "notation" when we need to compute de property name
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas?\n" +
    "Choose between:\n" +
    "- firstName\n" +
    "- lastName\n" +
    "- age\n" +
    "- job\n" +
    "- friends\n"
);

console.log(interestedIn);

if (jonas[interestedIn]) {
  alert(jonas[interestedIn]);
} else {
  alert("wrong request");
}

// We can add properties as well this way
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);
