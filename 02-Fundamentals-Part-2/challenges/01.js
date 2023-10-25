// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
"use strict";

import { assignDocTitleAndH1 } from "./../assets/js/globals.js";

const lectureTitle = "Challenge 1";

assignDocTitleAndH1(lectureTitle);

const dolphinsScores = [85, 54, 41];
const koalasScores = [23, 34, 27];

// Sum all the scores in the array and returns the average of that sum
const calcAverage = (teamScores) => {
  let finalScore = 0;
  teamScores.forEach((score) => {
    finalScore += score;
  });

  const teamAverage = Math.ceil((finalScore / 3).toFixed(2));

  return teamAverage;
};

// Check the winner team, (A team wins only if its average doubles the vs team)
const checkWinner = (avgDolphins, avgKoalas) => {
  let winnerMessage = "";

  if (avgDolphins >= 2 * avgKoalas) {
    winnerMessage = `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    winnerMessage = `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    winnerMessage = `No one wins`;
  }
  return winnerMessage;
};

// Avgs. results of each team
const avgDolphins = calcAverage(dolphinsScores);
const avgKoalas = calcAverage(koalasScores);

// log the winner
console.log(checkWinner(avgDolphins, avgKoalas));
