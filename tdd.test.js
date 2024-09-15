const add = require("./tdd");

test("should return 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number when one number is provided", () => {
    expect(add("1")).toBe(1);
  });
  