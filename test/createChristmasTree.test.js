import { describe, expect, test } from '@jest/globals';
import createChristmasTree from '../src/createChristmasTree';

describe('createChristmasTree', () => {
    test('base case scenario', () => {
        expect(createChristmasTree('123', 4)).toBeTruthy();
    });

    test('More initial ornaments than the total ornaments needed for the whole christmas tree', () => {
        expect(createChristmasTree('123456789', 3)).toBeTruthy();
    });
});
