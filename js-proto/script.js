// __proto__ can be object or null

let animal = {
  eats: true,
  poops: false,
  walk() {
    console.log('animal walk');
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  jumps: true,
  // __proto__: animal can set like that
};

rabbit.__proto__ = animal; // prototype setter

console.log(rabbit.eats); // true
rabbit.walk(); // animal walk

rabbit.sleep(); // this links for object before dot (to rabbit).
console.log('rabbit.isSleeping', rabbit.isSleeping); // true
console.log('animal.isSleeping', animal.isSleeping); // undefined

// Only own keys
console.log('keys', Object.keys(rabbit)); // ['jumps', 'isSleeping']
// All keys (with proto)
for (const prop in rabbit) console.log('keys', prop); // jumps isSleeping eats poops walk sleep
// Check for own properties
for (const prop in rabbit) {
  if (Object.hasOwnProperty.call(rabbit, prop)) {
    console.log(`own prop: ${prop}`); // jumps, isSleeping
  } else {
    console.log(`parent prop: ${prop}`); // eats, poops, walk, sleep
  }
}
// Other methods like Object.keys or Object.values don't show proto's props

// Prototype properties Set & Get
let user = {
  name: 'John',
  surname: 'Smith',

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },

  get fullName() {
    console.log('this', this);
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

// proto getter
console.log(admin.fullName); // John Smith

// proto setter
admin.fullName = 'Alice Cooper';
console.log(admin.name); // Alice
console.log(admin.surname); // Cooper

// Hamster task
let hamster = {
  stomach: [],

  eat(food) {
    // this.stomach.push(food);
    this.stomach = [food]; // or like than against below (rewrite property)
  },
};

let speedy = {
  __proto__: hamster,
  // stomach: [], // need to fix prototype link
};

let lazy = {
  __proto__: hamster,
  // stomach: [],
};

// Этот хомяк нашёл еду
lazy.eat('apple');
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple
// Ответ: Получается, что у хомяков один живот на двоих!
