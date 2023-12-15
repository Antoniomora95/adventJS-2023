import { describe, expect, test } from '@jest/globals';
import findFirstRepeated from '../src/findFirstRepeatated';

describe('Find first repeated element', () => {
    test('First repeated element is at index 2 => 3', () => {
        expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3);
    });
    test('First repeated element is at index -1', () => {
        expect(findFirstRepeated([1, 2, 3, 4])).toBe(-1);
    });

    test('First repeated element is at index 0 => 5', () => {
        expect(findFirstRepeated([5, 1, 5, 1])).toBe(5);
    });
    test('First repeated element is at index 0 => 1', () => {
        expect(findFirstRepeated([1, 1])).toBe(1);
    });
    test('First repeated element is at index -1', () => {
        expect(findFirstRepeated([1])).toBe(-1);
    });
    test('First repeated element is at index 0 => 1', () => {
        expect(findFirstRepeated([])).toBe(-1);
    });
    test('First repeated element is at index 0 => 5', () => {
        expect(findFirstRepeated([3, 3, 3, 3])).toBe(3);
    });
});
