export default function createChristmasTree(ornaments, height) {
    let constructedTree = '';
    const spacingSymbol = ' ';

    function getLeftSpacing(currentRow, paramHeight) {
        return spacingSymbol.repeat(paramHeight - currentRow - 1);
    }

    function getRowOrnamentsAndLeftOver(baseRowOrnaments, baseOrnaments, width) {
        // add elements to the right, need to complete row tree

        let ornamentsForRow = null;
        if (baseRowOrnaments.length > width) {
            ornamentsForRow = baseRowOrnaments.substring(0, width);
        } else {
            ornamentsForRow = baseRowOrnaments.padEnd(width, baseOrnaments);
        }

        const lastCharInOrnament = ornamentsForRow.at(-1);
        // look for the last character in the ornaments ?
        const indexOfChar = baseOrnaments.indexOf(lastCharInOrnament);

        // indexOfChar should always appear in the ornaments
        const leftOverFromRow = baseOrnaments.substring(indexOfChar + 1);
        return {
            leftOverFromRow,
            ornamentsForRow: ornamentsForRow.split('').join(' '),
        };
    }

    for (let row = 0; row < height; row += 1) {
        const baseRowOrnaments = leftOver || ornaments;
        const leftPadding = getLeftSpacing(row, height);
        const {
            ornamentsForRow,
            leftOverFromRow,
        } = getRowOrnamentsAndLeftOver(baseRowOrnaments, ornaments, row + 1);
        constructedTree += `${leftPadding}${ornamentsForRow}\n`;
        leftOver = leftOverFromRow;
    }
    constructedTree += `${spacingSymbol.repeat(height - 1)}|\n`;

    return constructedTree;
}

console.log(createChristmasTree('A', 4));
