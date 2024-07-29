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
