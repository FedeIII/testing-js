import { twoSum, twoSum2 } from './lesson1';

describe('Lesson 1', () => {
  describe('twoSum', () => {
    it('generic inputs', () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });
    
    it('unordered elements', () => {
      expect(twoSum([7, 11, 2, 15], 9)).toEqual([0, 2]);
    });

    it('negative elements', () => {
      expect(twoSum([2, -3, 12, 15], 9)).toEqual([1, 2]);
    });
  });

  describe('twoSum2', () => {
    it('generic inputs', () => {
      expect(twoSum2([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });
    
    it('unordered elements', () => {
      expect(twoSum2([7, 11, 2, 15], 9)).toEqual([0, 2]);
    });

    it('negative elements', () => {
      expect(twoSum2([2, -3, 12, 15], 9)).toEqual([1, 2]);
    });
  });
});
