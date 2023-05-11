const calculator = require("./index.js");

describe("add", function () {
  test("addition", () => {
    console.log(calculator.sum(1, 2));
    expect(calculator.sum(1, 2)).toBe(3);
  });
  test("subtraction", () => {
    console.log(calculator.diff(3, 4));
    expect(calculator.diff(3, 4)).toBe(-1);
  });
  test("multiplication", () => {
    console.log(calculator.sum(4, 5));
    expect(calculator.product(4, 5)).toBe(20);
  });
});
