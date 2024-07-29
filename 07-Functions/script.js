"use strict";

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // Old way to do default parameters ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 455);
createBooking("LH123", undefined, 455); // The same to skip the value it will be 1

// Passing arguments value vs reference

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 23456789284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999"; // This is a value pass
  passenger.name = "Mr. " + passenger.name; // This is a reference pass

  if (passenger.passport === 23456789284) {
    console.log("Checked in");
  } else {
    console.warn("Wrong passport");
  }
};

checkIn(flight, jonas);

console.log(flight); // This value doesn't change ...
console.log(jonas); // But this one does.

// Changing a passport

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

// Two functions manipulating the same object
newPassport(jonas);
checkIn(flight, jonas);

// High order functions and callbacks

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformerd by ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

const high5Friends = function (name) {
  console.log(`👋 Hi ${name}`);
};

const high5 = function () {
  console.log(`👋 Hi`);
};

// document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adam"].forEach(high5Friends);

// Functions returning functions example

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet("Hey")("Marisol");
greet2("Hi")("Arbey");

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtman");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// * The call method

const book = lufthansa.book;
// book(23, "Sarah Williams");

book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// The apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);
// Another way to do that buy using call instead apply
const flightData2 = [234, "Ardevi44"];
book.call(eurowings, ...flightData2);
console.log(eurowings);

// The bind function method

const bookEW = book.bind(eurowings);
bookEW(23, "Steven Williams");
bookEW(45, "Steven Universe");

// We still can specify the parameters required in the original function
// so if we specify the airline number we only going to need the name
// of the passenger this time.

const bookEW23 = book.bind(eurowings, 1234);
bookEW23("Eloisa");

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// tax impuesto
// rate tasa
