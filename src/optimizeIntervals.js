/**
 * @function optimizeIntervals
 * @param {Array<Array<number>>} intervals
 * @returns {Array<string>}
 */
export default function optimizeIntervals(intervals) {
    const ordered = intervals.sort((a, b) => {
        const [prevStart] = a;
        const [currentStart] = b;
        return prevStart - currentStart;
    });

    const iterationsNeeded = intervals.length - 1;
    let iteration = 0;
    let index = 0;
    while (iteration < iterationsNeeded) {
        iteration += 1;
        const [start, end] = ordered[index];
        const [nextStart, nextEnd] = ordered[index + 1];
        if (end < nextStart) {
            index += 1;
        } else {
            ordered[index + 1] = [start, Math.max(end, nextEnd)];
            ordered.splice(index, 1);
        }
    }
    return ordered;
}

optimizeIntervals([[3, 4], [1, 2], [5, 6]]);
