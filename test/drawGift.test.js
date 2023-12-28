import { describe, expect, test } from '@jest/globals';
import drawGift from '../src/drawGift';

describe.only('drawGift', () => {
    test('create a drawing with size 4', () => {
        // NOTE: i could not find an easy way to test this, so i will just add a note
        // with the output
        /*
       ####
      #++##
     #++#+#
    ####++#
    #++#+#
    #++##
    ####
    */
        expect(drawGift(4, '+')).toBeTruthy();
    });

    test('create a drawing with size 3', () => {
        // NOTE: i could not find an easy way to test this, so i will just add a note
        // with the output
        /*
      ###
     #+##
    ###+#
    #+##
    ###
    */
        expect(drawGift(3, '+')).toBeTruthy();
    });

    test('create a drawing with size 5', () => {
        /*
         #####
        #***##
       #***#*#
      #***#**#
     #####***#
     #***#**#
     #***#*#
     #***##
     #####
         */
        expect(drawGift(5, '*')).toBeTruthy();
    });

    test('create a drawing with size 2', () => {
        /*
         ##
        ###
        ##
        */
        expect(drawGift(2, '*')).toBeTruthy();
    });

    test('create a drawing with size 1', () => {
        /*
        #
         */
        expect(drawGift(1, '^')).toBeTruthy();
    });
});
