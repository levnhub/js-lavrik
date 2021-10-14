class Timer {
  constructor(el, time) {
    this.el = el;
    this.time = time;
    this._interval; // _ "private" field, but not x)

    this.render();
    this.start();
  }

  start() {
    this._interval = window.setInterval(this.tick.bind(this), 1000); // heal context with "bind"
  }

  stop() {
    window.clearInterval(this._interval);
  }

  tick() {
    this.time--;
    this.render();
    if (this.time <= 0) {
      this.stop();
    }
  }

  render() {
    this.el.innerHTML = this.time;
  }
}

export default Timer;
