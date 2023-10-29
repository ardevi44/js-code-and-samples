import { assignDocTitleAndH1 } from "./assets/js/globals.js";
assignDocTitleAndH1("Working with Strings");

document.title = "Working with Strings ⛓ Part 1";

const airline = "TAP Air Portugal";
let plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.lastIndexOf("Portugal"));

// With indexOf we found the first ocurence of a letter in a string
// We need to find every single ocurrence of the same letter.
// Create a variable "countOcurrences" that store the num of ocurrences of the letter e.
// Use the indexOf method and its optional value index to find what you need.

const getOccurrencesInAWord = (word, wordToFind) => {
  let baseIndex = 0;
  let countOcurrences = 0;

  while (baseIndex > -1 && baseIndex < word.length) {
    baseIndex = word.indexOf(wordToFind, baseIndex);
    countOcurrences = (baseIndex > -1 && ++countOcurrences) || countOcurrences;
    baseIndex =
      baseIndex === -1 ? -1 : countOcurrences > 0 ? ++baseIndex : baseIndex;
  }

  return countOcurrences;
};

const word = "Jose Arbey Lopez Marinez";
const wordToFind = "e";

// console.log(
//   `"${wordToFind}" appears ${getOccurrencesInAWord(
//     word,
//     wordToFind
//   )} times in ${word}`
// );

console.log(airline);
console.log(airline.slice(4));
// Take the slice between this two values but the second parameter is not included
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

/* Just a sample about how to get a specific string just using indexOf and slice plus the length of
the string. */

/*
const str = 'The quick brown fox jumps over the lazy dog.';
const term = 'quick brown';
const start = str.indexOf(term);
const result = str.slice(start, term.length + start);
console.log(
  `string: "${str}", word to get: "${term}", index to start: ${start}, index to finish: ${
    term.length + (start - 1)
  }, result: ${result}`
);

for (let i = 0; i < str.length; i++) {
  console.log(i, str[i]);
}
 */

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1); // Take the last letter
  if (s === "B" || s === "E") console.log("You got the middle seat!");
  else console.log("You got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// More methods of strings ...

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "jOnAs";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails

const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.Io \n";
const correctEmail = loginEmail.toLowerCase().trim();
console.log(correctEmail);

// replacing

const priceGB = "288,97€";
const priceUS = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll('door', 'gate'));
// Using regular expressions
console.log(announcement.replace(/door/g, "gate"));

// Booleans
plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo"))
  console.log("Part of the NEW Airbus family");

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// split

// split returns an array
console.log("a+very+nice+string".split("+"));
const fullNameArr = "Jonas Schmedtmann".split(" ");
const [firstName, lastName] = fullNameArr;
console.log(firstName + "\n" + lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (fullName) {
  const names = fullName.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

// Separate the string in words
// Then conver each first letter of each word in the array to uppercase
// Then Join the words in one result string
// console.log(capitalizeName('Jessica ann smith davis'));
// capitalizeName('jonas schmedtmann');

capitalizeName("jonas schmedtmann");
capitalizeName("Jessica ann smith davis");

// paddStart and paddEnd
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

const number1 = "345";
let resultingString = number1.padStart(number1.length + 5, "*");
console.log(number1, resultingString);
const number2 = "990";
resultingString = number2.padEnd(number2.length + 10, "#");
console.log(resultingString);
