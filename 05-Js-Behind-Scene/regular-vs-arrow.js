'use strict';

// This is not a block scope (execution context), this is a object literal, so the this keyword is different for regular and arrow functions
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object itself
    console.log(2017 - this.year);

    // Solution 1
    // const self = this; // Self or that
    // const isMillenial = function () {
    //   console.log(this); // undefiden when strict / Window when is not
    //   console.log(self.year >= 1991 && self.year <= 1996);
    // };

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1991 && this.year <= 1996);
    };

    isMillenial();
  },
  /*
    The this keyword is undefined cause the arrow function is
    looking up for surrounding blocks and the closest is Window Object where doesn't exist
    the value of firstName.

    *You should never ever use an arrow function as a method*
  */
  /* 
    greet: () => {
      console.log(`Hey ${this.firstName}`);
    }
  */
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

// jonas.greet();
jonas.calcAge();
