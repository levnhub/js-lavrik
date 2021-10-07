$(function () {
  // Window on load analog

  let form = $('form');
  // Parent is learnin children! (всплытие)
  form
    .on('focus', 'input', function () {
      this.classList.add('focus');
    })
    .on('blur', 'input', function () {
      this.classList.remove('focus');
    });
  form.addClass('mod1').addClass('mod2').addClass('mod3');

  $('.list li')
    .html('New content')
    .addClass('list--item')
    .on('click', function () {
      $(this).html('New click content');
      this.style.color = 'red';
    });
  // one time event
  $('.anim_block').one('click', function () {
    // reset animation on next clicks
    $(this).stop(true, true).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
  });

  $('.anim_block').on('contextmenu', function (e) {
    e.preventDefault();
    // chain is always chain
    // $(this)
    //   .animate(
    //     {
    //       height: 200,
    //     },
    //     500
    //   )
    //   .animate(
    //     {
    //       opacity: 0.5,
    //     },
    //     500
    //   );
    // so it is few properties
    $(this).animate(
      {
        height: '+=50px',
        opacity: 0.5,
      },
      500,
      $.bez([0.8, 0.16, 0.18, 0.73])
    );
  });

  // smooth scroll
  $('.menu a').on('click', function (e) {
    e.preventDefault();
    // add active class by filter
    $('.menu a').removeClass('active').filter(this).addClass('active');

    let selector = $(this).attr('href');
    let h = $(selector).offset().top;

    $('html, body').animate(
      {
        scrollTop: h - 32,
      },
      700
    );
  });

  // Add elements
  $('.add_field').on('click', function () {
    $('<input class="form--input">').appendTo('.form'); // simple add element x)
  });
  // All parents get a click, if not stopPropagation()
  $('*').on('click', function (e) {
    e.stopPropagation();
    console.log('1');
  });

  // Call plugin
  $('.plugin_block').duplicate({ d: ' - ' }).css('color', 'red');
});
