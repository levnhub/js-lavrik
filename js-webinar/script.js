window.onload = function () {
  var items = document.querySelectorAll(".items .item");

  for (let index = 0; index < items.length; index++) {
    // items[index].onclick = activeItem;
    items[index].onclick = function () {
      fade(this, 1000, function () {
        alert("Fade complete callback");
        this.style.display = "none";
      });
    };
  }

  function activeItem(e) {
    // e.target.classList.toggle("active");
    this.classList.toggle("active");
  }

  setInterval(function () {
    var rand = mtRand(0, items.length - 1);
    // Context send by call()
    activeItem.call(items[rand]);
  }, 500);
};

function mtRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

function fade(elem, t, f) {
  var fps = 50;
  var time = t || 500;
  var steps = time / fps;
  var op = 1;
  var dO = op / steps;

  // Callback!
  var callback = f || function () {};

  var timer = setInterval(function () {
    op -= dO;
    elem.style.opacity = op;
    steps--;

    if (steps === 0) {
      clearInterval(timer);
      callback.call(elem);
    }
  }, 1000 / fps);
}

// Timer
// window.onload = function () {
//   var div = document.querySelector(".items .item");
//   var timer = new Timer(60, div);

//   setInterval(function () {
//     timer.tick();
//   }, 1000);
// };

// function Timer(time, elem) {
//   this.time = time;
//   this.elem = elem;

//   this.tick = function () {
//     this.time--;
//     this.elem.innerHTML = this.time;
//   };
// }
