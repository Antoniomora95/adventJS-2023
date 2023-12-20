import { describe, expect, test } from '@jest/globals';
import adjustLights from '../src/adjustLights';

describe('adjustLights', () => {
    test('you change the fourth light to 🔴', () => {
        expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toBe(1);
    });

    test('you change the second light to 🟢 and the third to 🔴', () => {
        expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toBe(2);
    });

    test('they are already alternating', () => {
        expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toBe(0);
    });

    test('you change the second light to 🟢', () => {
        expect(adjustLights(['🔴', '🔴', '🔴'])).toBe(1);
    });

    test('test 10', () => {
        expect(adjustLights(['🔴', '🔴', '🔴', '🔴', '🟢'])).toBe(2);

        expect(adjustLights(['🔴', '🔴', '🟢', '🟢'])).toBe(2);
    });

    test('test empty array', () => {
        expect(adjustLights()).toBe(0);
    });
});
