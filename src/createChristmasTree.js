export default function createChristmasTree(ornaments, height) {
    const spacingSymbol = ' ';
    const getOrnamentsCount = (size) => (size * (size + 1)) / 2;
    function getLeftSpacing(currentRow, paramHeight) {
        return spacingSymbol.repeat(paramHeight - currentRow - 1);
    }

    function createAllOrnaments(baseOrnaments, totalOrnaments) {
        if (baseOrnaments.length > totalOrnaments) {
            return baseOrnaments.substring(0, totalOrnaments);
        }
        return baseOrnaments.padEnd(totalOrnaments, baseOrnaments);
    }

    const countOrnaments = getOrnamentsCount(height);
    const totalCharOrnaments = createAllOrnaments(ornaments, countOrnaments);
    let constructedTree = '';

    for (let row = 0; row < height; row += 1) {
        const positionsToIgnore = getOrnamentsCount(row);
        const leftPadding = getLeftSpacing(row, height);
        const rowOrnaments = totalCharOrnaments
            .substring(positionsToIgnore, positionsToIgnore + row + 1);

        const rowOrnamentsWithSpace = rowOrnaments.split('').join(' ');

        constructedTree += `${leftPadding}${rowOrnamentsWithSpace}\n`;
    }
    constructedTree += `${spacingSymbol.repeat(height - 1)}|\n`;

    return constructedTree;
}
