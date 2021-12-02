class Timer {
  constructor(el, time) {
    this.el = el;
    this.time = time;
    this._interval; // _ "private" field, but not x)

    this.render();
    this.start();
  }

  start() {
    this._interval = window.setInterval(this.tick, 1000);
  }

  stop() {
    window.clearInterval(this._interval);
  }

  // only with arr function works
  tick = () => {
    this.time--;
    this.render();
    if (this.time <= 0) {
      this.stop();
    }
  };

  render() {
    this.el.innerHTML = this.time;
  }
}

export default Timer;


// styled components