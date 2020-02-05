const greeting = require('../js/logic');

describe('Should return GOODEVENING or GOODMORNING', () => {
  test('Should return GOOD EVENING', () => {
    expect(greeting(13)).toBe('GOOD EVENING');
  });
  test('Should return GOOD EVENING', () => {
    expect(greeting(11)).toBe('GOOD MORNING');
  });
  test('Should return GOOD EVENING', () => {
    expect(greeting(12)).toBe('GOOD MORNING');
  });
  test('Should return GOOD EVENING', () => {
    expect(greeting(0)).toBe('GOOD MORNING');
  });
});
