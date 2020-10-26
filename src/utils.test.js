import { getRandom } from './utils';

const randomNumDefault = getRandom();
const randomNumWideRange = getRandom(100,-100);
const randomNumNarrowRange = getRandom(3);

test('random numbers without params', () => {
  expect(randomNumDefault).toBeGreaterThanOrEqual(0);
  expect(randomNumDefault).toBeLessThanOrEqual(100);
});
test('random numbers with params 100, -100', () => {
  expect(randomNumWideRange).toBeGreaterThanOrEqual(-100);
  expect(randomNumWideRange).toBeLessThanOrEqual(100);
});
test('random numbers with param 3', () => {
  expect(randomNumNarrowRange).toBeGreaterThanOrEqual(0);
  expect(randomNumNarrowRange).toBeLessThanOrEqual(3);
});
