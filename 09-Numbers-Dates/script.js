"use strict";

/////////////////////////////////////////////////
/*
Issues:
- Create a current date for each loan and display this correctly in the movements - is Pending
- Create some way of store the movement data like the amount, the date, and some other info that we need.
- Match each movement with each date at sort event
*/
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2024-01-28T09:15:04.904Z",
    "2024-04-01T10:17:24.185Z",
    "2024-05-08T14:11:59.604Z",
    "2024-08-01T23:36:17.929Z",
    "2024-08-03T17:01:17.194Z",
    "2024-08-07T00:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

// Locale options configuration
const localeOptions = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric",
  year: "numeric",
  // weekday: "long",
};

const currentDate = new Date();

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

// This will save time for log in
inputLoginUsername.value = "js";
inputLoginPin.value = "1111";

/////////////////////////////////////////////////
// Functions

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const stringDate = new Date(account.movementsDates[i]);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${getMovementDate(stringDate)}</div>
        <div class="movements__value">${getMovementLocale(mov)}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const setBalanceAccount = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  return acc.balance;
};

const formatBalanceLocale = function (balance) {
  return new Intl.NumberFormat(currentAccount.locale, {
    style: "currency",
    currency: currentAccount.currency,
  }).format(balance);
};

const displayBalance = function (currentAccount) {
  labelBalance.textContent = `${formatBalanceLocale(
    setBalanceAccount(currentAccount)
  )}`;
};

const calcSummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  return { incomes, out, interest };
};

const displaySummary = function ({ incomes, out, interest }) {
  labelSumIn.textContent = new Intl.NumberFormat(currentAccount.locale, {
    style: "currency",
    currency: currentAccount.currency,
  }).format(incomes);
  labelSumOut.textContent = new Intl.NumberFormat(currentAccount.locale, {
    style: "currency",
    currency: currentAccount.currency,
  }).format(out);
  labelSumInterest.textContent = new Intl.NumberFormat(currentAccount.locale, {
    style: "currency",
    currency: currentAccount.currency,
  }).format(interest);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
};

// Returns the string of the date of log in label

const getDateLocale = function (date) {
  // A way to get the locale config from the browser.
  // const locale = navigator.language;

  // Previous code
  // return (
  //   `${date.getDate().toString().padStart(2, 0)}/` +
  //   `${(date.getMonth() + 1).toString().padStart(2, 0)}/` +
  //   `${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`
  // );

  return new Intl.DateTimeFormat(currentAccount.locale, localeOptions).format(
    date
  );
};

// Return the string of each movement label

const getMovementDate = function (stringDate) {
  const date = new Date(stringDate);

  const calcDaysPassed = (date1, date2) => {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  };

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) {
    return "Today";
  } else if (daysPassed === 1) {
    return "Yesterday";
  } else if (daysPassed <= 7) {
    return `${daysPassed} days ago`;
  } else {
    return new Intl.DateTimeFormat(currentAccount.locale, {
      // hour: "numeric",
      // minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      // weekday: "long",
    }).format(date);
    // `${date.getDate().toString().padStart(2, 0)}/` +
    // `${(date.getMonth() + 1).toString().padStart(2, 0)}/` +
    // `${date.getFullYear()}`;
  }
};

const getMovementLocale = function (mov) {
  return new Intl.NumberFormat(currentAccount.locale, {
    style: "currency",
    currency: currentAccount.currency,
  }).format(mov);
};

createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc);

  displayBalance(acc);

  displaySummary(calcSummary(acc));
};

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);

    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started.`;
      labelDate.textContent = "";
      containerApp.style.opacity = 0;
    }
    // Decrease 1 second
    time--;
  };
  // Set time to 2 minutes
  let time = 120; // These are seconds

  // call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    labelDate.textContent = getDateLocale(currentDate);
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Call the logout timer before update the UI
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

// Forcing a click event for the log in
const forceEventClick = new Event("click");
btnLogin.dispatchEvent(forceEventClick);

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
      // Reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 2500);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// labelBalance.addEventListener("click", () => {
//   [...document.querySelectorAll(".movements__row")].forEach((row, i) => {
//     if (i % 2 === 0) row.style.backgroundColor = "orangered";
//   });
// });
