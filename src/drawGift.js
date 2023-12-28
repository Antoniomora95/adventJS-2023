/**
 * @function drawGift
 * @param {number} figureWidth
 * @param {string} symbol
 * @returns string
 */
export default function drawGift(figureWidth, symbol) {
    const SPACING = ' ';
    const BORDER = '#';
    const halfOutput = [];
    // let wholeOutput = [];

    const COUNT_SYMBOL = figureWidth - 2;
    const VALID_COUNT_SYMBOL = COUNT_SYMBOL >= 0 ? COUNT_SYMBOL : 0;
    const CONSTANT_SYMBOL = symbol.repeat(VALID_COUNT_SYMBOL);
    const CONSTANT_BORDER = BORDER.repeat(VALID_COUNT_SYMBOL);

    function builsRowContent(index) {
        if (index === 0) {
            return BORDER.repeat(figureWidth);
        }

        const dynamicSymbols = symbol.repeat(index - 1);
        if (index <= COUNT_SYMBOL) {
            return BORDER + CONSTANT_SYMBOL + BORDER + dynamicSymbols + BORDER;
        }
        return BORDER + CONSTANT_BORDER + BORDER + dynamicSymbols + BORDER;
    }

    function buildRowSpacing(index) {
        const spacing = figureWidth - 1 - index;
        return SPACING.repeat(spacing);
    }

    for (let index = 0; index < figureWidth; index += 1) {
        const rowContent = builsRowContent(index);
        const rowSpacing = buildRowSpacing(index);
        halfOutput.push(`${rowSpacing + rowContent}\n`);
    }

    const lastIndex = halfOutput.length - 1;
    for (let index = 1; index < figureWidth; index += 1) {
        const inverseRow = halfOutput.at(lastIndex - index);
        // delete original spacing
        halfOutput.push(inverseRow.trimStart());
    }
    return halfOutput.join('');
}

console.log(drawGift(4, '+'), 'very basic drawing');
