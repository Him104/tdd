const add = require("./tdd");

test("should return 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number when one number is provided", () => {
    expect(add("1")).toBe(1);
  });
  
test('should return the sum of two numbers', () => {

    expect(add("1,5")).toBe(6)

 })


 test('should return sum of multiple numbers', () => {
expect (add("1,2,3,4")).toBe(10);

  })


  test('should handle new line and commas', () => {

    expect(add("1\n2,3")).toBe(6);

   })

   test('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  