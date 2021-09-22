window.onload = function (e) {
  var buttons = document.querySelectorAll('.actions input');

  // Array loop

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = btnClick;
  }

  // Object loop

  var object = {
    russia: 'Moscow',
    usa: 'Washington',
    china: 'Beijing',
  };

  for (const key in object) {
    console.log(key);
    console.log(object[key]);
    // if (Object.hasOwnProperty.call(object, key)) {
    // 	const element = object[key];

    // }
  }

  // Product items handle

  var items = document.querySelectorAll('.items .item');
  var divPrice = document.querySelector('.value');

  for (var index = 0; index < items.length; index++) {
    items[index].onclick = function () {
      this.classList.toggle('item-active');
      //  Call func in context
      // calcPrice.call(this);
      // Call func in window context
      calcPrice();
    };
  }

  function calcPrice(e) {
    var price = 0;

    for (var index = 0; index < items.length; index++) {
      if (items[index].classList.contains('item-active')) {
        price += parseInt(items[index].getAttribute('data-price'));
      }
    }

    divPrice.innerHTML = price;
  }

  // Calculator

  var calcBtns = document.querySelectorAll('input[name=calc]');
  var calcNum1 = document.querySelector('input[name=num1]');
  var calcNum2 = document.querySelector('input[name=num2]');
  var calcRes = document.querySelector('.res');

  for (var index = 0; index < calcBtns.length; index++) {
    calcBtns[index].onclick = function () {
      doCalc(this.getAttribute('data-op'));
    };
  }

  function doCalc(op) {
    var a = parseInt(calcNum1.value);
    var b = parseInt(calcNum2.value);
    var res;

    if (op === '+') {
      res = a + b;
    } else if (op === '-') {
      res = a - b;
    } else if (op === '/') {
      res = a / b;
    } else if (op === '*') {
      res = a * b;
    } else {
      res = 'Операция недопустима';
    }
    calcRes.innerHTML = res;
    btnDisable();
  }

  function btnDisable() {
    for (let index = 0; index < calcBtns.length; index++) {
      calcBtns[index].disabled = true;
    }
  }

  function btnEnable() {
    for (let index = 0; index < calcBtns.length; index++) {
      calcBtns[index].disabled = false;
    }
  }

  calcNum1.oninput = btnEnable;
  calcNum2.oninput = btnEnable;

  // "this" context

  function btnClick(e) {
    var name = this.getAttribute('name');
    if (name === 'save') {
      console.log(1);
    } else if (name === 'delete') {
      console.log(2);
    }
  }

  // Prevent default actions

  var links = document.querySelectorAll('a[target="_blank"]');

  for (let index = 0; index < links.length; index++) {
    links[index].onclick = confirmAway;
  }

  function confirmAway() {
    if (!confirm('Не качественный сайт. Перейти?')) {
      return false;
    }
  }

  var pictures = document.querySelectorAll('.pictures img');

  for (let index = 0; index < pictures.length; index++) {
    pictures[index].onmousedown = stopMove;
    pictures[index].oncontextmenu = stopMove;
  }

  function stopMove() {
    return false;
  }
};

// OOP

// not OOP
// var cat = {
//   name: '1',
//   age: '3',
//   run: function () {
//     console.log(1);
//   },
// };

function Cat(name) {
  this.name = name;
  this.age = 0;
  this.weight = 1;
  this.eat = function () {
    this.weight++;
  };
  this.run = function () {
    this.weight--;
  };
}

var cat1 = new Cat('Murzik');
var cat2 = new Cat('Murzik2');
var cat3 = new Cat('Murzik3');
console.log(cat1);
console.log(cat2);

cat3.eat();
cat3.eat();
cat3.eat();
console.log(cat3);
cat3.run();
cat3.run();
cat3.age++;
console.log(cat3);

// Slider OOP

function Slider(images) {
  this.images = images;
  var slider = this;
  var i = 0;

  slider.prev = function () {
    slider.images[i].classList.remove('showed');
    i--;
    if (i < 0) i = slider.images.length - 1;
    slider.images[i].classList.add('showed');
  };

  slider.next = function () {
    slider.images[i].classList.remove('showed');
    i++;
    if (i >= slider.images.length) i = 0;
    slider.images[i].classList.add('showed');
  };
}

// Slider 2

var images2 = document.querySelectorAll('.gallery-2 img');
var slider2 = new Slider(images2);

document.querySelector('.gallery-2 .prev').onclick = function () {
  slider2.prev();
};

document.querySelector('.gallery-2 .next').onclick = function () {
  slider2.next();
};

// Slider 1

var images = document.querySelectorAll('.gallery-1 img');
var slider = new Slider(images);

document.querySelector('.gallery-1 .prev').onclick = function () {
  slider.prev();
};

document.querySelector('.gallery-1 .next').onclick = function () {
  slider.next();
};

// Context lost, but it works! x0
setInterval(slider.next, 2000);

// Context fix
// setInterval(function () {
//   slider.next();
// }, 3000);
