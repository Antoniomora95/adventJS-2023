import { describe, expect, test } from '@jest/globals';
import manufacturerGift from '../src/manufactureGift';

describe('manufacturerGift', () => {
    test('Return only one gift from the original list', () => {
        expect(manufacturerGift(['tren', 'osox', 'pelota'], 'tronesa')).toStrictEqual(['tren']);
    });

    test('Return 2 gifts from the original list', () => {
        expect(manufacturerGift(['tren', 'oso', 'pelota'], 'tronesa')).toStrictEqual(['tren', 'oso']);
    });

    test('Return 0 gifts from the original list', () => {
        expect(manufacturerGift(['tren', 'oso'], 'xdf')).toStrictEqual([]);
    });

    test('Return all the gifts from the original list', () => {
        expect(manufacturerGift(['a', 'b', 'c'], 'cdxab')).toStrictEqual(['a', 'b', 'c']);
    });
});
