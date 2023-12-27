import { describe, expect, test } from '@jest/globals';
import transformTree from '../src/transformTree';

describe('organizeGifts', () => {
    test('base case', () => {
        expect(transformTree([3, 1, 0, 8, 12, null, 1], 0)).toStrictEqual(
            JSON.stringify({
                value: 3,
                left: {
                    value: 1,
                    left: {
                        value: 8,
                        left: null,
                        right: null,
                    },
                    right: {
                        value: 12,
                        left: null,
                        right: null,
                    },
                },
                right: {
                    value: 0,
                    left: null,
                    right: {
                        value: 1,
                        left: null,
                        right: null,
                    },
                },
            }, null, 4),
        );
    });

    test('when there are null values you should not create its node', () => {
        expect(transformTree([17, 0, null, null, 1])).toStrictEqual(
            JSON.stringify({
                value: 17,
                left: {
                    value: 0,
                    left: null,
                    right: {
                        value: 1,
                        left: null,
                        right: null,
                    },
                },
                right: null,
            }, null, 4),
        );
    });
});
