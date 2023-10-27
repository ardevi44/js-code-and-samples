"use strict";

import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("Working with the Scope in JavaScript");

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // var is function scope millenial is accessible inside the printAge()
      var millenial = false;
      const str = `Oh, and you're a millenial, ${firstName}`;
      // str exists just here in the if statement because const is block scope
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // Here str doesn't exist

    // console.log(str);

    // Here "millenial still exists"

    /*
    if (millenial) {
      console.log("*Millenial");
    } else {
      console.log("*Not millenial");
    }
     */

    // When using "use strict" or 'type = "module"' add is not accessible
    // Else It is accessible
    // console.log(add(2, 3));
  }

  //Here "millenial" is unaccessible

  printAge();

  console.log(firstName);
  return age;
}

const firstName = "Jonas";
calcAge(1991);
