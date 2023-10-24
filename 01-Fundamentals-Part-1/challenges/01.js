import { assignDocTitleAndH1 } from "./../assets/js/globals.js";

assignDocTitleAndH1("Challenge 1");

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// Mark and John names
let mark = "Mark";
let john = "John";

// Marks information
let marksWeight = 81.2;
let marksHeight = 1.72;

// Johns information
let johnsWeight = 56.7;
let johnsHeight = 1.67;

// john and mark BMIs (diferents formulas)
let johnBMI = (johnsWeight / johnsHeight ** 2).toFixed(2);
let markBMI = (marksWeight / (marksHeight * marksHeight)).toFixed(2);

console.log(`DATA: ${mark} weights ${marksWeight} kg and is ${marksHeight} m tall.
${john} weights ${johnsWeight} kg and is ${johnsHeight} tall`);

let markHigherBMI = markBMI > johnBMI;

if (markBMI === johnBMI) {
  console.log(`BMI of ${johnBMI}, is the same for ${john} and ${mark}`);
} else if (markHigherBMI) {
  console.log(
    `John BMI: ${johnBMI}, Mark BMI: ${markBMI}, ${mark}'s BMI is higher than ${john}'s`
  );
} else {
  console.log(
    `Mark BMI: ${markBMI}, John BMI: ${johnBMI}, ${john}'s BMI is higher than ${mark}'s`
  );
}
