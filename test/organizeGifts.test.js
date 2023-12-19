import { describe, expect, test } from '@jest/globals';
import organizeGifts from '../src/organizeGifts';

// `[a]{a}{a}(aaaaaa){b}(b)`

/* Explanation:

[x] Palet -> 50 gifts
{} Box -> 10 gifts
(x)Bag -> less than 10 gifts

  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left,
  resulting in 1 pallet [a] (for the first 5 boxes),
  2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)

  11b: 11 gifts type 'b' would be packed in 1 box and 1 gift would be left,
  resulting in 1 loose box {b} and a bag with 1 gift (b)
*/

describe('organizeGifts', () => {
    test('base case', () => {
        expect(organizeGifts('76a11b')).toBe('[a]{a}{a}(aaaaaa){b}(b)');
    });
});

describe('organizeGifts', () => {
    test('only one letter', () => {
        expect(organizeGifts('20a')).toBe('{a}{a}');
    });
});

describe('organizeGifts', () => {
    test('only bag of gifts', () => {
        expect(organizeGifts('9a')).toBe('(aaaaaaaaa)');
    });
});

describe('organizeGifts', () => {
    test('emty string', () => {
        expect(organizeGifts()).toBe('');
    });
});
