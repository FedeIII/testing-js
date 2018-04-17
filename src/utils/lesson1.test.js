import { twoSum } from './lesson1';

describe('Lesson 1', () => {
  describe('twoSum', () => {
    it('returns the positions of the elements that sum the target', () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });
    
    it('with unordered elements', () => {
      expect(twoSum([7, 11, 2, 15], 9)).toEqual([0, 2]);
    });

    it('with negative elements', () => {
      expect(twoSum([2, -3, 12, 15], 9)).toEqual([1, 2]);
    });
  });
});
