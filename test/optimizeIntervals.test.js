import { describe, expect, test } from '@jest/globals';
import optimizeIntervals from '../src/optimizeIntervals';

describe('optimizeIntervals', () => {
    test('merges the 3 intervals into one', () => {
        expect(optimizeIntervals([[5, 8], [2, 7], [3, 4]])).toStrictEqual([[2, 8]]);
    });

    test('merges 1 of the 3 intervals', () => {
        expect(optimizeIntervals([[1, 3], [8, 10], [2, 6]])).toStrictEqual([[1, 6], [8, 10]]);
    });

    test('it was not possible to merge any of the intervals', () => {
        expect(optimizeIntervals([[3, 4], [1, 2], [5, 6]])).toStrictEqual([[1, 2], [3, 4], [5, 6]]);
    });
});

/*
1.- first let's order the intervals
2.- once ordered, locate at the first position
really important: check if this cannot be joined
when ? the minor element form the current interval has to be strictically minor than both values
of the next interval.
if minor then you cannot join this interval with the next one,
and likely you have to nove to the next index ?
if not minor then you have to merge the intervals for sure, and the minor and greater values are got
from getting the Marh.min and Math.max betweeen the 2 start and 2 end time values ??? makes sens
one thing though, i have not figure out when should i stop looking.

my theory says that here we could use a while loop ? 
the reason is that you could merge or not merge
*/
