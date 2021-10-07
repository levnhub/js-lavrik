(function ($) {
  // rewrite $ tu jQuery!

  $.fn.duplicate = function (settings) {
    let defaults = {
      d: ' ',
      cnt: 2,
    };

    let options = $.extend(defaults, settings); // extend like array_merge in PHP

    console.log(options);
    this.each(function () {
      // for one or array of elements
      let elem = $(this);
      let text = elem.html();
      let out = '';

      for (let index = 0; index < options.cnt; index++) {
        out += text;

        if (index < options.cnt - 1) {
          out += options.d;
        }
      }

      elem.html(out);
    });

    return this; // for jQuery chain works
  };
})(jQuery);
