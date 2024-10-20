"use strict";

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.displaySpeed = function () {
  return `'${this.make}' going at ${this.speed} km/h`;
};

// Remember this methods is just for Car objects.
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.displaySpeed());
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.displaySpeed());
};

// This is the added code ...

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  if (chargeTo > 0) {
    this.charge = chargeTo;
  }
};

EV.prototype.displayFail = function () {
  console.log(
    `Impossible accelerate this car, charge: ${this.charge}, insufficient battery.`
  );
};

EV.prototype.accelerate = function () {
  if (this.charge >= 1) {
    this.speed += 20;
    this.charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  } else {
    this.displayFail();
  }
};

const tesla = new EV("Tesla", 120, 2);
console.log(tesla);
tesla.accelerate();
