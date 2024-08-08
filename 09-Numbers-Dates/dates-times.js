// Date and Times
// console.group("Testing Dates and Times");
// const now = new Date();
// console.log(now);

// We can create dates from strings in a certain format
// console.log(new Date("2024-08-05T08:25:51.079Z"));
// console.log(new Date("2024-08-05"));
// console.log("December 24, 2015");

// Where the month is in cero based 10 is november
/*
1. year
2. month
3. day
4. hours 
5. minutes
6. seconds
*/
// console.log(new Date(2037, 10, 19, 15, 23, 5));

// November just has 30 days, so it will be december 1st
// console.log(new Date(2037, 10, 31));
// Milliseconds after unix time January 1st of 1970
// 3 days after that
// this is a time stamp 3 * 24 * 60 * 60 * 1000
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// console.groupEnd();

// console.group("Working with dates");
// Working with dates
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log("Year: ", future.getFullYear());
console.log("Month : ", future.getMonth());
console.log("Day : ", future.getDate());
console.log("Day of week : ", future.getDay());
console.log("Hours : ", future.getHours());
console.log("Minutes : ", future.getMinutes());
console.log("Seconds : ", future.getSeconds());
console.log(future.toISOString());
console.log("Time Stamp : ", future.getTime());
console.log(Date.now()); // Current time stamp
future.setFullYear(2040);
console.log(future);
console.groupEnd();
 */

/*
const calcDaysPassed = function (date1, date2) {
  return Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)); // To convert to days
};
 */
/*
console.group("Operations with dates: ");
const future2 = new Date(2037, 10, 19, 15, 23);
console.log("This is the future2 in numbers", Number(future2));
const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
console.groupEnd();
 */

const myDate = new Date();

// Get locale int he browser
// const browserLocale = navigator.language;

// In node actually
const locale = Intl.DateTimeFormat().resolvedOptions().locale;

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};
const IntlDate = new Intl.DateTimeFormat(locale, options).format(myDate);
console.log(IntlDate);
