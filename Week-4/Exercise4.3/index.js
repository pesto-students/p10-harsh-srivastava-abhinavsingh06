// Implement Fibonacci Series with Iterators

const fibonacci = {
  [Symbol.iterator]() {
    let current = 0;
    let next = 1;
    return {
      next() {
        const value = current;
        current = next;
        next = value + next;
        return { value, done: false };
      },
    };
  },
};

for (const value of fibonacci) {
  console.log(value);
  if (value > 7) {
    break;
  }
}
