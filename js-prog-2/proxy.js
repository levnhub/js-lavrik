let data = {
  a: 1,
  b: 2,
};

export default new Proxy(data, {
  get(target, name) {
    // Here we have target (against this)
    // console.log(target);
    // console.log(name);
    return target[name];
  },
  set(target, name, value) {
    target[name] = value;
    console.log(`set ${name} = ${value}`);
    return true;
  },
});
