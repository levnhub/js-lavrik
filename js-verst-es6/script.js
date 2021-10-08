'use strict';

// {
// 	let a = 1; // limited variable
// }

var index = 10;
for (var index = 0; index < 100; index++) {}
console.log(index); // fuck

const a = { some: 1 };
a.some = 6;
console.log(a); // const & but property i not const x))

// New loops

function sum(...args) {
  // spread operator get any parametrs
  let sum = 0;

  // for (let index = 0; index < args.length; index++) {
  //   sum += args[index];
  // }

  // return sum;

  for (const val of args) {
    // for of loop!
    sum += val;
  }

  return sum;
}

console.log(sum(1, 2, 3, 4, 5));

// True Class vs Function

class Timer {
  constructor(time = 100) {
    // default aurguments (new)
    this.time = time;
  }

  tick() {
    this.time--;
    console.log(this.time);
  }

  start() {
    setInterval(() => {
      // arrow func heal the context lost!
      this.tick();
    }, 1000);
  }
}

const t = new Timer(500);
// t.start(); // Start class

// Arrow function

// let min = function (a, b) { // old
//   return a - b;
// };

let min = (a, b) => a - b; // new

console.log(min(5, 3));
