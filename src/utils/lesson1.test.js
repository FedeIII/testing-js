import { twoSum, noRepetition } from './lesson1';

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

  describe('noRepetition', () => {
    it('returns another array without repetitions', () => {
      expect(noRepetition([1, 2, 1, 3, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('with unordered elements', () => {
      expect(noRepetition([4, 2, 1, 3, 3, 1, 5])).toEqual([4, 2, 1, 3, 5]);
    });

    it('if the order does not matter', () => {
      expect(noRepetition([1, 2, 1, 3, 1, 4, 5])).toContain(1);
      expect(noRepetition([1, 2, 1, 3, 1, 4, 5])).toContain(2);
      expect(noRepetition([1, 2, 1, 3, 1, 4, 5])).toContain(3);
      expect(noRepetition([1, 2, 1, 3, 1, 4, 5])).toContain(4);
      expect(noRepetition([1, 2, 1, 3, 1, 4, 5])).toContain(5);
    });
  });
});
