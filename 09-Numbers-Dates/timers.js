const ingredients = ["olives", "spinach"];

// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
//   3000,
//   ...ingredients // This will convert the above array into arguments
// );

console.log("\x1b[32m Waiting ...\x1b[0m");

// If the array contains the "spinach" value we won't wait anything so the code inside timeout never happens.
// if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

const getInMilliseconds = function (seconds) {
  return seconds * 1000;
};

// setInterval
// setInterval(() => {
//   console.log("Hello, I'm Ardevi");
// }, getInMilliseconds(1.1));

setInterval(() => {
  const now = Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date());
  process.stdout.write(`\r\x1b[45m ${now} \x1b[0m`);
}, getInMilliseconds(1));
