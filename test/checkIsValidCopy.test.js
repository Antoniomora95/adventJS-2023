import { describe, expect, test } from '@jest/globals';
import checkIsValidCopy from '../src/checkIsValidCopy';

describe.only('checkIsValidCopy', () => {
    test('it is valid copy', () => {
        expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')).toBe(true);
    });

    test('it is an invalid copy, due to the p at position 0', () => {
        expect(checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')).toBe(false);
    });

    test('it has several differences, but all of them are valid', () => {
        expect(checkIsValidCopy('Santa Claus', 's#+:. c:. s')).toBe(true);
    });

    test('it is invalid, there is a # where it should not be', () => {
        expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false);
    });

    test('when params are not passed, it means both are the same empty string??', () => {
        expect(checkIsValidCopy()).toBe(true);
    });

    test('when both the original and copy strings have symbols with valid presedence', () => {
        expect(checkIsValidCopy('H#pp+ holidays', 'H+pp. holidays')).toBe(true);
    });

    test('Uppercase letters can also degrade', () => {
        expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toBe(true);
    });
});
