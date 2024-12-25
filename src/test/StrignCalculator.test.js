import { createStringCalculator } from '../utils/StringCalculator.js';

describe('String Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = createStringCalculator();
  });

  // ------------Initial Test---------------

  describe('Basic Functionality', () => {
    test('return 0 for empty string', () => {
      expect(calculator.add("")).toBe(0);
    });

    test('return number for single number string', () => {
      expect(calculator.add("1")).toBe(1);
    });

    test('return sum for two numbers', () => {
      expect(calculator.add("1,5")).toBe(6);
    });
  });

    // ---------Test for Any Amount Of Number--------
    describe('Multiple Numbers', () => {
      test('handle any amount of numbers', () => {
        expect(calculator.add("1,2,3,4,5")).toBe(15);
        expect(calculator.add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
      });
    });

    // -------------Test For New Line-----------------
    describe('New Line Handling', () => {
      test('handle new lines between numbers', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
        expect(calculator.add("1,2\n3")).toBe(6);
        expect(calculator.add("1\n2\n3")).toBe(6);
      });
    });
});