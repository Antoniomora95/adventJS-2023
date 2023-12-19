export default function organizeGifts(gifts) {
    const paletCapacity = 50;
    const boxCapacity = 10;

    return gifts.split(/(\d+\w)/g).map((item) => {
        let leftOver = item.substring(0, item.length - 1);
        let output = '';
        const letter = item.at(-1);

        if (leftOver >= paletCapacity) {
            const quotient = Math.floor(leftOver / paletCapacity);
            leftOver %= paletCapacity;
            output += `[${letter}]`.repeat(quotient);
        }
        if (leftOver >= boxCapacity) {
            const quotient = Math.floor(leftOver / boxCapacity);
            leftOver %= boxCapacity;
            output += `{${letter}}`.repeat(quotient);
        }

        if (leftOver > 0) {
            const leftItems = `${letter}`.repeat(leftOver);
            output += `(${leftItems})`;
        }

        return output;
    }).join('');
}
