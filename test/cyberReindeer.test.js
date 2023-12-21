import { describe, expect, test } from '@jest/globals';
import cyberReindeer from '../src/cyberReindeer';

/*
Santa 🎅 is testing his new electric sled, the CyberReindeer,
on a North Pole road. The road is represented by a string of characters, where:

. = Road
S = Santa's Sled
* = Open barrier
| = Closed barrier
Example of a road: S...|....|.....

Each unit of time, the sled moves one position to the right.
If it encounters a closed barrier, it stops until the barrier opens.
If it is open, it goes through directly.

All barriers start closed, but after 5 units of time, they all open forever.

Create a function that simulates the sled's movement
for a given time and returns an array of strings representing
the state of the road at each unit of time:
 */

describe('cyberReindeer', () => {
    test('base scenario', () => {
        expect(cyberReindeer('S..|...|..', 10)).toStrictEqual([
            'S..|...|..',
            '.S.|...|..',
            '..S|...|..',
            '..S|...|..',
            '..S|...|..',
            '...S...*..',
            '...*S..*..',
            '...*.S.*..',
            '...*..S*..',
            '...*...S..',
        ]);
    });
});
