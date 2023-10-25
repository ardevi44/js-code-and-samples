"use strict";

import { assignDocTitleAndH1 } from "./assets/js/globals.js";

const lectureTitle = "Basic Array Operations (Methods)";

assignDocTitleAndH1(lectureTitle);

function checkIfFriendAdded(fName) {
  friends.includes(fName) && console.log(`${fName} was added`);
}

function checkIfFriendDeleted(fName) {
  !friends.includes(fName) && console.log(`${fName} was deleted`);
}

const friends = ["Michael", "Steven", "Peter"];

console.log(friends);
let fName = "Jay";

// Add elements to the end.
friends.push(fName);
checkIfFriendAdded(fName);

// Add elements to the beginning.
fName = "John";
friends.unshift(fName);
checkIfFriendAdded(fName);

console.log(friends);

// Remove elements from the end
fName = friends.pop();
checkIfFriendDeleted(fName);

// Remove elements from the beginning
fName = friends.shift();
checkIfFriendDeleted(fName);
console.log(friends);

fName = "Steven";
console.log(
  `The index of "${fName}" in the array is ${friends.indexOf(fName)}`
);
