export default class VueGetters {
  constructor(settings) {
    this.$el = document.querySelector(settings.el);
    this.$template = settings.template;
    this.$data = settings.data;
    this.data = {};

    // Object.defineProperty variant
    for (let name in this.$data) {
      Object.defineProperty(this.data, name, {
        // Like watcher for value changes
        get: () => {
          // arr for right context
          return this.$data[name];
        },
        set: (value) => {
          this.$data[name] = value;
          this.render();
        },
      });
    }

    // Proxy variant
    // this.data = new Proxy(this.$data, {
    //   get: (target, name) => {
    //     return target[name];
    //   },
    //   set: (target, name, value) => {
    //     target[name] = value;
    //     this.render();
    //     return true;
    //   },
    // });

    this.render();
  }

  render() {
    let html = this.$template.replace(/{{(.*?)}}/g, (match, name) => {
      // replace with function
      // console.log(match); // all reqexp match
      // console.log(name); // regexp match what in curly brackets
      let key = name.trim();
      return this.$data[key];
    });

    this.$el.innerHTML = html;
  }
}

// Virtual DOM sample (in real Vue/React)
// Give possibility to write single properties and save eventListeners

/*
  {
    tag: 'div',
    listeners: [],
    classes: [],
    children: [
      {
        tag: 'h2',
        innerText: '{{click}}',
      },
      {
        tag: 'div',
        innerText: '{{some}},
      }
    ]
  }
*/
