import { describe, expect, test } from '@jest/globals';
import maxTraveledDistance from '../src/maxDistanceTraveled';

describe('manufacturerGift', () => {
    test('Returns 2 as maximum distance (right)', () => {
        expect(maxTraveledDistance('>>*<')).toBe(2);
    });

    test('Returns 3 as maximum distance (left)', () => {
        expect(maxTraveledDistance('<<<>')).toBe(2);
    });

    test('Return 5 as maximum distance it can be both sides', () => {
        expect(maxTraveledDistance('>***>')).toBe(5);
    });
});
