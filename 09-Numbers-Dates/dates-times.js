// Date and Times
console.group("Testing Dates and Times");
const now = new Date();
console.log(now);

// We can create dates from strings in a certain format
console.log(new Date("2024-08-05T08:25:51.079Z"));
console.log(new Date("2024-08-05"));
console.log("December 24, 2015");

// Where the month is in cero based 10 is november
/*
1. year
2. month
3. day
4. hours 
5. minutes
6. seconds
*/
console.log(new Date(2037, 10, 19, 15, 23, 5));

// November just has 30 days, so it will be december 1st
console.log(new Date(2037, 10, 31));
// Milliseconds after unix time January 1st of 1970
// 3 days after that
// this is a time stamp 3 * 24 * 60 * 60 * 1000
console.log(new Date(3 * 24 * 60 * 60 * 1000));

console.groupEnd();

console.group("Working with dates");
// Working with dates
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
console.log(new Date.now()); // Current time stamp
future.setFullYear(2040);
console.log(future);
console.groupEnd();
