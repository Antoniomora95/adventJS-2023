export default function drawGift(figureWidth, faceIcon) {
    const SPACING = ' ';
    const borderRow = '#';
    const halfOutput = [];
    let wholeOutput = [];

    for (let index = 0; index < figureWidth; index += 1) {
        const spacing = figureWidth - 1 - index;
        const realSpacing = spacing > 0 ? spacing : 0;
        halfOutput.push(`${SPACING.repeat(realSpacing) + borderRow.repeat(figureWidth + index)}\n`);
    }

    wholeOutput = [...halfOutput];

    const lastIndex = halfOutput.length - 1;
    for (let index = 1; index < figureWidth; index += 1) {
        let inverseRow = halfOutput.at(lastIndex - index);
        // inverse the spacing
        const charsSpace = inverseRow.substring(0, index);
        inverseRow = inverseRow.substring(index, inverseRow.length - 1)
            + charsSpace + inverseRow.substring(inverseRow.length - 1);
        wholeOutput.push(inverseRow);
    }
    return wholeOutput.join('');
}

console.log(drawGift(2, '+'), 'very basic drawing');

/*
    ###
   #*##
  #*#*#
  #*##
  ###
*/
