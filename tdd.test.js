const add = require("./tdd");

test("should return 0 for empty string", () => {
  expect(add("")).toBe(0);
});
