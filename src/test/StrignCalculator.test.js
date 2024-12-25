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

});