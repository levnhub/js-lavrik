// bad
// import "babel-polyfill";
// true
// import "core-js/stable";
// import "regenerator-runtime/runtime";

import Timer from './timer.js';
// import * as counter2 from "./other.js";
import { gen, getDischarges } from './gen.js';

window.addEventListener('load', function () {
  let timer1 = new Timer(document.querySelector('.timer1'), 10);
  // console.log(counter2);
  // console.log(counter2.get());

  // let arr = [100, 200, 300];

  // for (let num of arr) {
  //   console.log(num);
  // }
  // for (let num of "hello") {
  //   console.log(num);
  // }

  alert('123');

  let forPassport = Symbol();

  let user = {
    firstName: 'Name',
    lastName: 'Last',
    [forPassport]: 123123213213213,
  };

  // let forOther = Symbol("name");
  // console.log(forName == forOther);

  for (let key in user) {
    console.log(`${key}: ${user[key]}`);
  }

  console.log(user[forPassport]);

  // Unique JS key
  // Symbol.iterator
  let someObj = {
    to: 10,
    [Symbol.iterator]: function () {
      let current = 0;
      let stop = this.to;

      return {
        next() {
          if (current <= stop) {
            return {
              done: false,
              value: current++,
            };
          } else {
            return {
              done: true,
            };
          }
        },
      };
    },
  };

  for (let some of someObj) {
    console.log(some);
  }

  let someGen = gen(1, 5);

  for (let some of someGen) {
    console.log(some);
  }

  let someNumber = 274893274983274;

  for (const num of getDischarges(someNumber)) {
    console.log(num);
  }
});
