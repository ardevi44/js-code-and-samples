import { assignH1Text, assignDocTitle } from "./assets/js/globals.js";

const lectureTitle = "Truly and Falsy values";

assignDocTitle("Truly and Falsy");
assignH1Text(lectureTitle);

// The falsy values in js are: "", null, undefined, NaN, 0.
// Any other value is truthy

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;

if (money) console.log("Don't spend it all ;)");
else console.log("You should get a job!");

let height;
if (height) console.log("YaY! Height is defined!");
else console.log("Height is UNDEFINED actually!");
