// Class

function $(selector) {
  const elements = document.querySelectorAll(selector);
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
  this.html = function (content) {
    // return data if call without arguments
    if (content === undefined) return this.elements[0].innerHTML;

    for (let index = 0; index < this.elements.length; index++) {
      this.elements[index].innerHTML = content;
    }
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
    this.style.color = 'red';
  });

// return data if call without arguments
console.log($('.list li').html());
