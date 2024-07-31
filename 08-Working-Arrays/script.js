"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// * DOC: Display the movements deposits and withdrawals of each user account.

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  console.log(movements);
  movements.forEach(function (mov, i) {
    const typeOfMovement = mov > 0 ? "deposit" : "withdrawal";
    const movementRow = `
      <div class="movements__row">
        <div class="movements__type movements__type--${typeOfMovement}">
          ${i + 1} ${typeOfMovement}
        </div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
    // console.log(movementRow);
    containerMovements.insertAdjacentHTML("afterbegin", movementRow);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = movements => {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// DOC: It Will create Computing user names for each account in the global array of accounts

const createUserNames = accounts => {
  accounts.forEach(account => {
    account.userName = account.owner
      .toLowerCase()
      .split(" ")
      .map(eachWord => eachWord[0])
      .join("");
  });
};

createUserNames(accounts);

// DOC: Filtering the deposits

const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

// NOTE: We do the same as above but using the forEach loop
/*
const depositsFor = [];
movements.forEach(mov => {
  if (mov > 0) {
    depositsFor.push(mov);
  }
});
 */

// DOC: Filtering the withdrawals
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

/*
NOTE: 
- The accumulator - like a snowball taking new values 
- The current value
- The index
- The array
The reduce method has a second parameter in this case is the initial
value of the accumulator.
*/
const balance = movements.reduce((acc, cur) => {
  // console.log(`Iter: ${i}, Curr ${cur}, Accum: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);
