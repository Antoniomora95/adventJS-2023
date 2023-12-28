import { describe, expect, test } from '@jest/globals';
import decodeMessage from '../src/decodeMessage';

describe('decodeMessage', () => {
    test('base scenario', () => {
        expect(decodeMessage('sa(u(cla)atn)s')).toBe('santaclaus');
    });
});
