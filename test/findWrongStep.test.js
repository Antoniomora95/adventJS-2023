import { describe, expect, test } from '@jest/globals';
import findWrongStep from '../src/findWrongStep';

/*
    You have the original sequence of original manufacturing steps and the
    modified sequence that may include an extra step or be missing a step.
*/
describe('findWrongStep', () => {
    test('when the modified sequence includes an extra step', () => {
        const original = 'abcd';
        const modified = 'abcde';
        expect(findWrongStep(original, modified)).toBe('e');
    });
    test('when the modified sequence is missing a step', () => {
        const original = 'stepfor';
        const modified = 'stepor';
        expect(findWrongStep(original, modified)).toBe('f');
    });

    test('when there is no difference', () => {
        const original = 'abcde';
        const modified = 'abcde';
        expect(findWrongStep(original, modified)).toBe('');
    });

    test('when the original sequence is empty => modified has extra steps', () => {
        const original = '';
        const modified = 'abcde';
        expect(findWrongStep(original, modified)).toBe('a');
    });
    test('when the modified sequence is empty => modified has missing steps', () => {
        const original = 'defd';
        const modified = '';
        expect(findWrongStep(original, modified)).toBe('d');
    });

    test('when the original and modified sequences have the same size, but the modified has a different step', () => {
        expect(findWrongStep('xxxa', 'xxea')).toBe('e');
    });
});
