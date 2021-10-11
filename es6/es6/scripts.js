// bad (to heavy)
// import "babel-polyfill";
// true
// import "core-js/stable";
// import "regenerator-runtime/runtime";

// "import" must have "export" in src
// can't mutate, read only!

// "require" must have "module.exports" in src
// can mutate

import Timer from './timer.js';
// import * as counter2 from "./other.js";
import { gen, getDischarges } from './gen.js'; // Generator of Iterator!

window.addEventListener('load', function () {
  // OOP Timer
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

  let forPassport = Symbol();

  let user = {
    firstName: 'Name',
    lastName: 'Last',
    [forPassport]: 123123213213213, // key is dynamic es6 key
  };

  // Unique symbol sample
  // let forName = Symbol('name');
  // let forOther = Symbol('name');
  // console.log('Symbol equals?', forName == forOther);

  for (let key in user) {
    console.log('Standart loop', `${key}: ${user[key]}`);
  }
  console.log('Secret key', user[forPassport]);

  // Unique JS key
  // Symbol.iterator
  // Need for custom "for..of" loop iteration
  // How generator is working
  let someObj = {
    to: 10,
    [Symbol.iterator]: function () {
      // against example "next" property that can breaks all world code =//
      let current = 0;
      let stop = this.to;

      return {
        next() {
          if (current <= stop) {
            return {
              done: false, // iteration go on
              value: current++,
            };
          } else {
            return {
              done: true, // iteration end
            };
          }
        },
      };
    },
  };

  for (let some of someObj) {
    // Iterator needed, you can use generator
    // new es6 loop
    console.log(some);
  }

  // Work sync with generator

  let someGen = gen(1, 5);

  for (let some of someGen) {
    console.log('Generated iterator', some);
  }

  // Parse integer by number with generator

  let someNumber = 274893274983274;
  for (const num of getDischarges(someNumber)) {
    console.log(num);
  }

  // For in (not custom loop for object)

  const myObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
  };

  for (const key in myObject) {
    if (Object.hasOwnProperty.call(myObject, key)) {
      const element = myObject[key];
      console.log(element);
    }
  }
});
