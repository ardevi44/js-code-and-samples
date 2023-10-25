"use strict";

import { assignDocTitleAndH1 } from "./assets/js/globals.js";

assignDocTitleAndH1("Using strict mode");

let hasDriversLicence = false;
const passTest = true;

// Here is an error, cause hasDriverLicense is not defined yet when is used
// but without using strict mode this initialization just happend and the program
// ends without errors. We know that here we have a typo with the name of this variable
if (passTest) hasDriverLicence = true;
if (hasDriverLicence) console.log("I can drive :D");

// When we use the strict mode reserved words initialization as a variable is forbidden
// const private = "Something";
// const console = "hello!";
