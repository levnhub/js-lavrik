let someGetter = {
  _private: {
    cnt: 3,
  },
  // old way
  // cnt:§ 3,
  // setCnt(value) {
  // 	...
  // }
  min: 1,
  max: 10,
};

// new way (like object hooks)
Object.defineProperty(someGetter, 'cntNew', {
  // writable: false, // 100% constant
  // value: 10 // 200% constant
  // autorun on someGetter.cnt
  get() {
    console.log('getter', this._private.cnt);
    // return value
    return this._private.cnt;
  },
  // autorun on someGetter.cnt = n
  set(value) {
    console.log('setter', value);
    // set value
    this._private.cnt = value;
  },
});

export default someGetter;
