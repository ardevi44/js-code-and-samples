///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

///////////////////////////////////////
Coding Challenge #2

Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals(...playerNames) {
    for (const name of playerNames)
      console.log(`${name} goals were scored ${playerNames.length}`);
  },
  calculateWinnerTeam() {
    const { team1: team1Odd, team2: team2Odd } = this.odds;
    const winner =
      (team1Odd === team2Odd && 'draw') ||
      (team1Odd < team2Odd && this.team1) ||
      this.team2;
    return winner;
  },
};

// coding challenge #1

/*
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const {
  odds: { team1: team1Odd, team2: team2Odd, x: draw },
} = game;

console.log({
  players1,
  players2,
  gk,
  fieldPlayers,
  allPlayers,
  players1Final,
  team1Odd,
  team2Odd,
  draw,
});

game.printGoals('Arbey', 'Daniel', 'Marisol', 'Rossi');
game.printGoals(...game.scored);
const likelyToWin = game.calculateWinnerTeam();
console.log(
  (likelyToWin != 'draw' && `Team more likely to win is: ${likelyToWin}`) ||
    'The team odds is a draw'
);
 */

// coding challenge #2

/*
// 1
for (const [goalsNumber, playerName] of game.scored.entries()) {
  console.log(`Goal ${Number(goalsNumber) + 1} ${playerName}`);
}

// 2
const {
  odds: { team1, team2 },
} = game;

const [...teamOdds] = [team1, team2];
let oddsAverage = 0;
for (const odd of teamOdds) oddsAverage += odd;
oddsAverage = oddsAverage / teamOdds.length;
console.log(Number(oddsAverage.toFixed(2)));

console.log(Object.entries(game.odds));

for (const [key, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${key != 'x' ? 'victory' : 'draw'} ${
      key != 'x' ? game[key] : ''
    }: ${value}`
  );
}

 */

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const [...events] = new Set(gameEvents.values());
console.log(events);

console.log(gameEvents.delete(64));
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${(90 / gameEvents.size).toFixed(
    2
  )} minutes`
);

let halfPart;
const gameHalf = 45;
for (const [minute, event] of gameEvents.entries()) {
  halfPart = minute < gameHalf ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${halfPart} ${minute}: ${event}`);
}

*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.title = 'Coding Challenge #4';

// Adding the input elements on the body element.

// h1 main element of the DOM
const mainTitle = document.querySelector('#main-title');

const inputDiv = document.createElement('div');
inputDiv.classList.add('flex-column', 'width-100');
const variableNames = document.createElement('textarea');
variableNames.classList.add('display-block', 'width-60', 'textarea');
variableNames.value =
  'underscore_case\n first_name\nSome_Variable \n  calculate_AGE\ndelayed_departure';
const inputButton = document.createElement('button');
inputButton.classList.add('send-button');
inputButton.textContent = 'Send Values';

// My Solution ...

/*
inputButton.addEventListener('click', () => {
  let inputVariables = variableNames.value.split('\n');
  console.log(inputVariables);
  let resultName = '';
  let checkCount = 1;
  for (let variableName of inputVariables) {
    resultName = variableName.trim().toLowerCase().split('_');
    resultName[1] = resultName[1][0].toUpperCase() + resultName[1].slice(1);
    resultName = resultName.join('');
    console.log(resultName.padEnd(resultName.length + checkCount, '✅'));
    ++checkCount;
  }
  console.log(inputVariables);
});
*/

inputDiv.append(variableNames);
inputDiv.append(inputButton);
mainTitle.after(inputDiv);

// Jonas solution

inputButton.addEventListener('click', () => {
  const text = variableNames.value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
