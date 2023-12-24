import { describe, expect, test } from '@jest/globals';
import getIndexsForPalindrome from '../src/getIndexsForPalindrome';

/*
In Santa's workshop, the elves love puzzles 🧠.
This year, they have created a special one: a challenge to form a Christmas palindrome.

A palindrome is a word that reads the same forwards and backwards.
The elves want to know if it is possible to form a palindrome by making,
------AT MOST, ONE EXCHANGE------ of letters.

Create a function getIndexsForPalindrome that receives a string and returns:

If it is already a palindrome, an empty array.
If it is not possible, null.
If a palindrome can be formed with one change,
an array with the two positions (indexes) that must be swapped to create it.
*/
describe('getIndexsForPalindrome', () => {
    test('returns empty array because it is already a palindrome', () => {
        expect(getIndexsForPalindrome('anna')).toStrictEqual([]);
    });

    test('returns 0, 1 indexs needed to get a palindrome', () => {
        expect(getIndexsForPalindrome('abab')).toStrictEqual([0, 1]);
    });

    test('returns null because the palindrome could not be created', () => {
        expect(getIndexsForPalindrome('abac')).toStrictEqual(null);
    });

    test('returns empty array because it is already a palindrome', () => {
        expect(getIndexsForPalindrome('aaaaaaaa')).toStrictEqual([]);
    });

    test('returns 1, 3 indexs needed to get a palindrome', () => {
        expect(getIndexsForPalindrome('aaababa')).toStrictEqual([1, 3]);
    });

    test('returns null because the palindrome could not be created', () => {
        expect(getIndexsForPalindrome('caababa')).toStrictEqual(null);
    });

    test('return the indexes closer to index 0, when there are multiple options', () => {
        expect(getIndexsForPalindrome('baabaa')).toStrictEqual([0, 2]);
    });

    test('when the palindrome is found on the right side', () => {
        expect(getIndexsForPalindrome('rotaratov')).toStrictEqual([4, 8]);
    });

    test('whe no string is passed', () => {
        expect(getIndexsForPalindrome()).toStrictEqual([]);
    });
});
