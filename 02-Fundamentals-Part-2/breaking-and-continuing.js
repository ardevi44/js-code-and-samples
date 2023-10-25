const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "Teacher",
  ["Michael", "Peter", "Steven"],
];
const types = [];

/* I don't want this happens now ...

for (let i = 0; i < jonas.length; i++) {
  // Reading from array
  console.log(jonas[i], typeof jonas[i]);
  // One of the ways to fill an array not using its methods.
  types[i] = typeof jonas[i];
}

*/

const years = [1991, 2007, 1969, 2020];
const ages = [];

/* I don't want this happens now ...

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

*/

// console.log(ages);

// continue and break

console.warn("ONLY STRINGS");
for (let i = 0; i < jonas.length; i++) {
  // Show only the values that are strings.
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i]);
}
