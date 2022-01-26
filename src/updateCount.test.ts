import {updateCount} from "./updateCount";

describe('updateCount', () => {
  it('counts up', () => {
      const actual = updateCount(20, '+');
      expect(actual).toBe(21);
  });

  it('counts down', () => {
    const actual = updateCount(20, '-');
    expect(actual).toBe(19);
  });
});