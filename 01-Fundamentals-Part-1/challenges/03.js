"use strict";

import { assignDocTitleAndH1 } from "./../assets/js/globals.js";

assignDocTitleAndH1("Challenge 3");

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

const dolphinsScores = [96, 109, 100];
const koalasScores = [90, 91, 110];

const getTeamAverageScore = (team) => {
  let finalScore = 0;
  team.forEach((score) => {
    finalScore += score;
  });

  const teamAverage = Math.ceil((finalScore / 3).toFixed(2));

  return teamAverage;
};

let dolphinsResult = getTeamAverageScore(dolphinsScores);
let koalasResult = getTeamAverageScore(koalasScores);

console.log({ dolphinsResult, koalasResult });

// if (dolphinsResult === koalasResult) {
//   console.log("It's a draw!");
// } else if (dolphinsResult > koalasResult) {
//   console.log("Dolphins wins!!");
// } else if (dolphinsResult < koalasResult) {
//   console.log("Koalas wins!!");
// }

// Bonus Practice 1
if (
  dolphinsResult >= 100 &&
  koalasResult >= 100 &&
  dolphinsResult === koalasResult
) {
  console.log("It's a draw!");
} else if (dolphinsResult >= 100 && dolphinsResult > koalasResult) {
  console.log("Dolphin Wins!");
} else if (koalasResult >= 100 && dolphinsResult < koalasResult) {
  console.log("Koalas Wins!");
} else {
  console.log("No one wins, loosers!");
}
