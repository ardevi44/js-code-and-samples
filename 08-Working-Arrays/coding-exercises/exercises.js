///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
  NOTE:
  A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
  OUTPUT:
  "Dog number 1 is an adult, and is ... years old"
  "Dog number 2 is still a puppy 🐶"
*/

// DOC: Function that evaluates an array of dog ages and outputs if is each dog is an adult or a puppy.

checkDogs = function (dogsJulia, dogsKate) {
  correctDogsJulia = dogsJulia.slice(1).slice(0, -2);
  allDogsAges = dogsKate.concat(correctDogsJulia);
  console.log(allDogsAges);
  allDogsAges.forEach((ageDog, number) => {
    if (ageDog >= 3) {
      console.log(
        `Dog number ${number + 1} is an adult, and is ${ageDog} years old`
      );
    } else {
      console.log(`Dog number ${number + 1} is still a puppy 🐶`);
    }
  });
};

let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];

console.group();
console.log("Starter Julia's Array: ", dogsJulia);
console.log("Starter Kate's Array: ", dogsKate);
console.groupEnd();

checkDogs(dogsJulia, dogsKate);

dogsJulia = [9, 16, 6, 8, 3];
dogsKate = [10, 5, 6, 1, 4];

console.group();
console.log("Starter Julia's Array: ", dogsJulia);
console.log("Starter Kate's Array: ", dogsKate);
console.groupEnd();

checkDogs(dogsJulia, dogsKate);
