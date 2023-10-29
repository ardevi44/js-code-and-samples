import { assignDocTitleAndH1 } from "./assets/js/globals.js";
assignDocTitleAndH1("String methods practice");

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.replaceAll("_", " ")} ${from} ${to} ${time.replace(
    ":",
    "h"
  )}`;
  console.log(output);
}
