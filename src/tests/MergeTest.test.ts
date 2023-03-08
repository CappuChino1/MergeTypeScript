import { merge } from '../MergeScript';
describe('merge function', () => {
    it('should return an empty array when given two empty arrays', () => {
      const result = merge([], []);
      expect(result).toEqual([]);
    });
  
    it('should return the same array when given one array and an empty array', () => {
      const result1 = merge([1, 2, 3], []);
      expect(result1).toEqual([1, 2, 3]);
  
      const result2 = merge([], [1, 2, 3]);
      expect(result2).toEqual([1, 2, 3]);
    });
  
    it('should merge two sorted arrays into a new sorted array', () => {
      const result = merge([1, 3, 5], [2, 4, 6]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
  