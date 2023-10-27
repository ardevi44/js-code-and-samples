"use strict";

const isPerson = true;
const myName = "Arbey";

if (isPerson) {
  const str = "You have an RFC";

  function sayHello() {
    console.log(`Hello ${myName} ${str}`);
  }

  sayHello();
}

// This two calls don't executes
// console.log(str);
// sayHello();
