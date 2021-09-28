$(function () {
  // Window on load analog

  let inputs = $('form input');

  inputs
    .on('focus', function () {
      this.classList.add('focus');
    })
    .on('blur', function () {
      this.classList.remove('focus');
    });
  inputs.addClass('mod1').addClass('mod2').addClass('mod3');

  $('.list li')
    .html('New content')
    .addClass('list--item')
    .on('click', function () {
      $(this).html('New click content');
      this.style.color = 'red';
    });
});
