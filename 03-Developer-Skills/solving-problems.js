// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM
/*
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
 */

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problems
// - What is temp amplitude? the difference between the highest and lowest temp
// - How to compute max and min tamperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore the errors?
// - Find the max value in temp array
// - Find the min value in temp array
// - Substract min from max and return it

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  let curTemp;

  for (let i = 0; i < temps.length; i++) {
    curTemp = temps[i];
    console.log(curTemp + " is :" + typeof curTemp);
    if (typeof curTemp !== "number") {
      console.log("Not a number!");
      continue;
    }
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(
    `current temperature: ${curTemp}
  maximum temperature: ${max}
  minimum temperature: ${min}`
  );

  return max - min;
};

console.log(calcTempAmplitude(temperatures));
console.log(calcTempAmplitude([3, 5, 1], [9, 0, 5]));

// PROBLEM 2:
// - With 2 arrays, should we implement functionality twice? No! just merge two arrays.

// 2) Breaking up into sub problems
// How to merge 2 arrays?
