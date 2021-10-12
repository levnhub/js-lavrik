let cnt = 3; // private local variable

function inc() {
  cnt++;
}

function get() {
  return cnt;
}

export { inc, get };
