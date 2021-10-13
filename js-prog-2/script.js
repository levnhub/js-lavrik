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
