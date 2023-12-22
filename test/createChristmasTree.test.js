import { describe, expect, test } from '@jest/globals';
import createChristmasTree from '../src/createChristmasTree';

describe('createChristmasTree', () => {
    test('you change the fourth light to 🔴', () => {
        expect(createChristmasTree('123', 4)).toBeTruthy();
    });
});
