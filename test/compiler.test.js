import { describe, expect, test } from '@jest/globals';
import compiler from '../src/compiler';

describe('compiler, instructions start at 0', () => {
    test('basic operations + - *', () => {
        expect(compiler('++*-')).toBe(3);
    });

    test('with return points % <', () => {
        expect(compiler('++%++<')).toBe(6);
    });

    test('the instruction < is ignored because there is no previous %', () => {
        expect(compiler('++<--')).toBe(0);
    });

    test('executes the operations inside ¿...?', () => {
        expect(compiler('++¿+?')).toBe(3);
    });

    test('instructions inside ¿...? are ignored because the counter is < 0', () => {
        expect(compiler('--¿+++?')).toBe(-2);
    });

    test('no param passed', () => {
        expect(compiler()).toBe(0);
    });
});
