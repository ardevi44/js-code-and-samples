"use strict";

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // This is how we protect things in js between developers
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  get movements() {
    return this._movements;
  }

  // These two methods are our public interface for this object.
  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // This method is not part of the public API of this class.
  _approveLoan() {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// We should never be allowed to access this method, cause is internal and responsibility of the requestLoan method
acc1._approveLoan(1000);
// We can access to this property, but it should be hide.
// console.log(acc1.pin);

console.log(acc1);

// We're still able to change this data, although the underscore
// It's a convention put that for any other dev doesn't change that property directly
// acc1._movements.push(34);

console.log(acc1.movements);
