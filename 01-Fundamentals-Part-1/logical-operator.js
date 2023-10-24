import { assignH1Text, assignDocTitle } from "./assets/js/globals.js";

const lectureTitle = "Logical Operators";

assignDocTitle(lectureTitle);
assignH1Text(lectureTitle);

let hasDriversLicense = true;
let hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision; // true

if (shouldDrive) console.log("Sarah is able to drive!");
else console.log("Someone else should drive");

const isTired = true;

// Determine when the person should not drive

hasDriversLicense = false; // Don't have License
hasGoodVision = false; // Don't have good vision

console.log(hasDriversLicense || hasGoodVision || isTired);

if (!hasDriversLicense || !hasGoodVision || isTired) {
  console.log("You shouldn't drive");
}
