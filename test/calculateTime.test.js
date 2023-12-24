import { describe, expect, test } from '@jest/globals';
import calculateTime from '../src/calculateTime';

describe.only('calculateTime', () => {
    test('two hours and 20 minutes remaining -> -02:20:00', () => {
        expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe('-02:20:00');
    });

    test('thirty minutes late -> 00:30:00', () => {
        expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toBe('00:30:00');
    });

    test('five hours and 29 minutes remaining -> -05:29:00', () => {
        expect(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])).toBe('-05:29:00');
    });

    test('test undefined param', () => {
        expect(calculateTime()).toBe('-07:00:00');
    });
});
