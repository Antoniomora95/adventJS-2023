import { describe, expect, test } from '@jest/globals';
import drawGift from '../src/drawGift';

describe('drawGift', () => {
    test('base case', () => {
        expect(drawGift(4, '+'));
    });
});

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/
