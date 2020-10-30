import { getRandom, getWholeNumberAverage } from './utils';

describe('random number generator', () => {
  test('random numbers without params', () => {
    expect(getRandom()).toBeGreaterThanOrEqual(0);
    expect(getRandom()).toBeLessThanOrEqual(100);
  });
  test('random numbers with params 100, -100', () => {
    expect(getRandom(100,-100)).toBeGreaterThanOrEqual(-100);
    expect(getRandom(100,-100)).toBeLessThanOrEqual(100);
  });
  test('random numbers with one param', () => {
    expect(getRandom(3)).toBeGreaterThanOrEqual(0);
    expect(getRandom(3)).toBeLessThanOrEqual(3);
    expect(getRandom(1000)).toBeGreaterThanOrEqual(0);
    expect(getRandom(1000)).toBeLessThanOrEqual(1000);
  });
});

describe('get average', () => {
  test('get the rounded average of a total and a count of elements', () => {
    expect(getWholeNumberAverage(5,10)).toEqual(1);
    expect(getWholeNumberAverage(100,8)).toEqual(13);
    expect(getWholeNumberAverage(50,5)).toEqual(10);
  });
});
