// Class

function $(selector) {
  // Check selector is string (class, id, ...) or $(this)
  const elements =
    selector instanceof HTMLElement
      ? [selector] // for single or group of elements
      : document.querySelectorAll(selector);

  return new MyJQuery(elements);
}

function MyJQuery(elements) {
  this.elements = elements;
  /**
   * Add any event on elements group
   * @param {string} eventname Event type
   * @param {callable} handle Event handle function
   */
  this.on = function (eventname, handle) {
    for (let index = 0; index < this.elements.length; index++) {
      this.elements[index].addEventListener(eventname, handle);
    }
    // for chain working
    return this;
  };
  /**
   * Add class to elements group
   * @param {string} name Classname
   */
  this.addClass = function (name) {
    for (let index = 0; index < this.elements.length; index++) {
      this.elements[index].classList.add(name);
    }
    // for chain working
    return this;
  };
  /**
   * Remove class from elements group
   * @param {string} name Classname
   */
  this.removeClass = function (name) {
    for (let index = 0; index < this.elements.length; index++) {
      this.elements[index].classList.remove(name);
    }
    // for chain working
    return this;
  };
  /**
   * Set content into elements group
   * @param {string} content Text or HTML content
   */
  this.html = function (content, callback) {
    // return data if call without arguments
    if (content === undefined) return this.elements[0].innerHTML;

    for (let index = 0; index < this.elements.length; index++) {
      this.elements[index].innerHTML = content;
    }
    // callback sample
    const cb = callback || function () {};
    // cb(); // Window context x((
    cb.call(elements); // Elements context!
    // for chain working
    return this;
  };
}

// jQuery like code! x)

let inputs = $('form input');

inputs
  .on('focus', function () {
    this.classList.add('focus');
  })
  .on('blur', function () {
    this.classList.remove('focus');
  });

// events chain (need 'this' for it)
inputs.addClass('mod1').addClass('mod2').addClass('mod3');

$('.list li')
  .html('New content')
  .addClass('list--item')
  .on('click', function () {
    $(this).html('New click content', function () {
      console.log(this); // Check context
      console.log('HTML added!');
    }); // Selector fix sample above + callback
    this.style.color = 'red';
  });

// return data if call without arguments
console.log($('.list li').html());

// Popup (OOP)
function Popup() {
  this.modal = document.querySelector('.modal');
  this.overlay = document.querySelector('.overlay');

  // Options version (settings object from argument)
  // this.modal = document.querySelector(options.modal);
  // this.overlay = document.querySelector(options.overlay);

  const popup = this;

  this.open = function (content) {
    popup.modal.innerHTML = content;
    popup.overlay.classList.add('open');
    popup.modal.classList.add('open');
  };

  this.close = function () {
    popup.overlay.classList.remove('open');
    popup.modal.classList.remove('open');
  };

  this.overlay.onclick = popup.close;
}

window.onload = function () {
  const popup = new Popup();

  // Options version
  // const popup = new Popup({
  //   modal: '.modal',
  //   overlay: '.overlay',
  // });

  // Fuckin' auto popup
  // setTimeout(() => {
  //   popup.open('Modal content');
  // }, 1000);

  document.querySelector('.call').onclick = function () {
    popup.open('Позвонить');
  };

  document.querySelector('.write').onclick = function () {
    popup.open('Написать');
  };

  document.querySelector('.modal_form').onclick = function () {
    const form = document.querySelector('.js-form');
    popup.open(form.innerHTML);
  };
};
