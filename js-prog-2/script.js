// Generator

function* some() {
  // Series execute
  console.log('yield a');
  yield 'a';
  console.log('yield b');
  yield 'b';
  console.log('yield c');
  yield 'c';
}

for (let a of some()) {
  // Series execute
  console.log(a);
}

// Parse string with generator

const str = ' Привет! Привет... Ура-ура! ';

function cleanStr(str) {
  return str.trim().replace(/ +/g, ' '); // trim & multiple spaces
}

function* getWords(str) {
  let text = cleanStr(str) + ' ';
  let start = 0;
  let current = text.indexOf(' ', start);

  while (current !== -1) {
    yield text.substr(start, current - start);
    start = current + 1;
    current = text.indexOf(' ', start);
  }
}

for (let word of getWords(str)) {
  console.log(word);
}

// Call & apply methods (Custom context add)

let cap = {
  i: 2,
};

// arrow func doesn't work
// const capDouble = (n, m) => {
//   return this.i * this.i * n * m;
// }

function capDouble(n, m) {
  return this.i * this.i * n * m;
}

console.log(capDouble.call(cap, 3, 2)); // give context to function (params)
console.log(capDouble.apply(cap, [3, 2])); // give context to function (array)

let capDouble2 = capDouble.bind(cap); // give context with double
console.log(capDouble2(3, 4));

// Carring (block params to constants)

let capDouble3 = capDouble.bind(cap, 2, 3);

for (var index = 0; index < 5; index++) {
  window.setTimeout(
    function (index) {
      console.log(index);
    }.bind(null, index),
    index * 200
  );
}

// Same things, but for this "call" and "apply" will not work
// const capDoubleArr = (n, m) => {
//   //
// }
// const capDoubleNotArr = function (n, m) {
//   //
// }.bind(this);

// Getters & Setters

import someGetter from './getters.js';

console.log(someGetter.cntNew);
someGetter.cntNew = 5;
console.log(someGetter.cntNew);
someGetter.cntNew = -5;
console.log(someGetter.cntNew);
someGetter.cntNew = 100;
console.log(someGetter.cntNew);

// Proxy getter & setters

import data from './proxy.js';
console.log('Proxy', data.a);
console.log('Proxy', data.b);
data.a = 5;
data.b = 7;
console.log('Proxy', data.a);
console.log('Proxy', data.b);

// Vue getters

import VueGetters from './vue-getters.js';

let vg = new VueGetters({
  el: '.elem1',
  data: {
    click: 1,
    name: 'Some name!',
  },
  template: `<div><h2>{{ click }}</h2>{{ name }}</div>`,
});

document.querySelector('.elem1').addEventListener('click', function () {
  vg.data.click++; // Reactive code without DOM modification, only data routes!
});

// Vue proxy

import VueProxy from './vue-proxy.js';

let vp = new VueProxy({
  el: '.elem2',
  data: {
    click: 1,
    name: 'Some name!',
  },
  template: `<div><h2>{{ click }}</h2>{{ name }}</div>`,
});

document.querySelector('.elem2').addEventListener('click', function () {
  vp.data.click++;
});
