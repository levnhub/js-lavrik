const sum = (a, b) => {
  return a + b;
};

// private function
function divide(a, b) {
  if (b === 0) {
    // return false; // need to return to all parent functions x((
    throw new Error('division by zero');
  }

  return a / b;
}

// public function
export default function mathOp(a, b, op) {
  switch (op) {
    case '+':
      return sum(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
  }
}
