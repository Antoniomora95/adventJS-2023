// challenge # 3
export default function findWrongStep(original, modified) {
    const isModifiedEqualOrGrater = modified.length >= original.length;
    const lengthIteration = Math.max(original.length, modified.length);

    for (let index = 0; index < lengthIteration; index += 1) {
        const atOriginal = original.charAt(index);
        const atModified = modified.charAt(index);

        const isDifferent = atOriginal !== atModified;

        if (isDifferent && isModifiedEqualOrGrater) {
            return atModified;
        } if (isDifferent && !isModifiedEqualOrGrater) {
            return atOriginal;
        }
    }
    return '';
}
