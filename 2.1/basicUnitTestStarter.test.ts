describe("Testing the calculator", () => {
    test("Example test", () => {
      expect(calculator.add(2, 50)).toBe(52);
    });
    test("Addition works", () => {
      expect(calculator.add(3, 25)).toBe(28);
    });
    test("Subtraction works", () => {
      expect(calculator.subtract(15, 10)).toBe(5);
    });
    test("Multiplication works", () => {
      expect(calculator.multiply(6, 5)).toBe(30));
    });
    test("Division works", () => {
    |  expect(calculator.divide(30, 6).toBe(5));
    }
    describe("Stretch Goals", () => {
      test("(3+12)/5 == 3", () => {
        expect(calculator.divide(calculator.add(3, 12), 5)).toBe(3);
      });
      test("(12/2)*(8/2)*(24+12/(5-3)) == 432", () => {
        expect(calculator.multiply((calulator.divide(12, 20)(calculator.divide(8, 2)(calculator.divide(calculator.add(24, 12)calculator.subtract(5, 3),18)).toBe(432);
      });
    });
  });
  
  const calculator = {
    /** Takes two numbers and adds them together.
     * @example
     * calculator.add(2, 3) == 5
     */
    add: (a: number, b: number): number => a + b,
    /** Takes two numbers and subtracts the second from the first.
     * @example
     * calculator.subtract(2, 3) == -1
     */
    subtract: (a: number, b: number): number => a - b,
    /** Takes two numbers and multiplies them together.
     * @example
     * calculator.multiply(2, 3) == 6
     */
    multiply: (a: number, b: number): number => a * b,
    /** Takes two numbers and divides the first by the second.
     * @example
     * calculator.divide(2, 3) == 0.5
     */
    divide: (a: number, b: number): number => a / b,
  };
  
