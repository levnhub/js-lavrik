class Timer {
  constructor(el, time) {
    this.el = el;
    this.time = time;
    this.interval;

    this.render();
    this.start();
  }

  start() {
    this.interval = window.setInterval(this.tick, 1000);
  }

  stop() {
    window.clearInterval(this.interval);
  }

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
