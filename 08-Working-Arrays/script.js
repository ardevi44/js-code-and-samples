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
let movementsSorted = false;

// DOC: Calculate a overall Balance of all the accounts.

const calculateOverallBalance = accounts => {
  // const overall = accounts
  //   .map(acc => acc.movements)
  //   .flat()
  //   .reduce((accum, movement) => accum + movement, 0);

  // Doing the same thing but using flatMap()
  const overall = accounts
    .flatMap(acc => acc.movements)
    .reduce((accum, movement) => accum + movement, 0);
  return overall;
};

const overallBalance = calculateOverallBalance(accounts);
console.log(overallBalance);

let currentAccount;

const curSignEntities = {
  euro: "&euro;",
};

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

// TASKS

// * DOC: It Will create Computing user names for each account in the global array of accounts

const createUserNames = accounts => {
  accounts.forEach(account => {
    account.userName = account.owner
      .toLowerCase()
      .split(" ")
      .map(eachWord => eachWord[0])
      .join("");
  });
};

// * DOC: Display the movements deposits and withdrawals of the account1

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
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
    containerMovements.insertAdjacentHTML("afterbegin", movementRow);
  });
};

// * DOC: calc and Display the balance of account 1

const calcDisplayBalance = acc => {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = `${balance} EUR`;
};

// DOC: Calc and Display the summary of the deposits, withdrawals and the interest from the bank of the account1

const calcDisplaySummary = account => {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((interest, i, arr) => {
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);

  labelSumIn.innerHTML = `${incomes}${curSignEntities.euro}`;
  labelSumOut.innerHTML = `${Math.abs(out)}${curSignEntities.euro}`;
  labelSumInterest.innerHTML = `${interest}${curSignEntities.euro}`;
};

const updateUI = function (acc) {
  // Display movements from actual account
  displayMovements(acc.movements);
  // Display balance from actual account
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

createUserNames(accounts);

// EVENT HANDLERS

// DOC: Event handler for log in to the application
// Here is where the fun BEGINS

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    // Display the welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    updateUI(currentAccount);
    containerApp.style.opacity = 100;
  }
});

// DOC: Starts or handle a new transference

btnTransfer.addEventListener("click", e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    receiverAcc &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    console.log(`Amount to transfer ${amount}`);
    console.log(`Person who receives ${receiverAcc.owner}`);
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

// DOC: handle the close account process using findIndex method

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

// Handle the loan logic

btnLoan.addEventListener("click", e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add the loan amount in the movements
    currentAccount.movements.push(amount);
    // Update de UI again
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

// handle movements sort

btnSort.addEventListener("click", () => {
  let movs;
  if (!movementsSorted) {
    // Order
    movs = currentAccount.movements.slice().sort((a, b) => a - b);
    displayMovements(movs);
    movementsSorted = true;
  } else {
    // Show as it is
    displayMovements(currentAccount.movements);
    movementsSorted = false;
  }
  // NOTE: Check the video again to see another extra solution
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 */

/* NOTE:: - Code example Filtering deposits

const deposits = movements.filter(mov => mov > 0);

*/

/* NOTE: We do the same as above but using the forEach loop

const depositsFor = [];
movements.forEach(mov => {
  if (mov > 0) {
    depositsFor.push(mov);
  }
});

*/

/* NOTE: - Code example Filtering withdrawals

const withdrawals = movements.filter(mov => mov < 0);

*/

/*
NOTE: Code example the reduce method
- The accumulator - like a snowball taking new values 
- The current value
- The index
- The array
The reduce method has a second parameter in this case is the initial
value of the accumulator.

const balance = movements.reduce((acc, cur) => {
  // console.log(`Iter: ${i}, Curr ${cur}, Accum: ${acc}`);
  return acc + cur;
}, 0);
*/

/* NOTE: Code example the find array method

const account = accounts.find(acc => acc.owner === "Jessica Davis");
console.log(account);

 */

/*TODO:
* Probably the balance of each account should be calculated
* before display all the info of the account. Because the balance property
* is created until the user logs into the app. But probably this actions impact in the
* loading of the page.
Also we going to need recalculate this balance when transfer, deposit and loan into the account */
