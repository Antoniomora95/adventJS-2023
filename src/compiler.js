export default function compiler(code = '') {
    let index = 0;
    let total = 0;
    let returnPoint = null;

    while (index < code.length) {
        const instruction = code.at(index);
        index += 1;
        if (instruction === '+') {
            total += 1;
        } else if (instruction === '-') {
            total -= 1;
        } else if (instruction === '*') {
            total *= 2;
        } else if (instruction === '%') {
            returnPoint = index;
        } else if (instruction === '<' && returnPoint) {
            index = returnPoint;
            returnPoint = null;
        } else if (instruction === '¿' && total < 1) {
            // if counter < 1 then skip block instruction
            const indexAhead = code.indexOf('?', index);
            index = indexAhead;
        }
    }
    return total;
}

/*
    +: Increments the counter value by 1.
    *: Multiplies the counter value by 2.
    -: Subtracts 1 from the counter value.
    %: Mark a return point. Does not modify the counter.
    <: Go back once to the last instruction with the % symbol it has seen.
        If there is no previous %, it does nothing.
    ¿: Starts a conditional block that executes if the counter is greater than 0.
    ?: Ends a conditional block.
*/
