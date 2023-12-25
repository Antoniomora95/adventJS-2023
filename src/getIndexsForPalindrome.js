export default function getIndexsForPalindrome(word = '') {
    const HALF_LENGTH_SIZE = Math.floor(word.length / 2);
    function findIndexesWithSwapNeeded(wordParam, length) {
        const originalLength = word.length;
        for (let index = 0; index < length; index += 1) {
            const indexRight = originalLength - 1 - index;
            if (wordParam.at(index) !== wordParam.at(indexRight)) {
                return {
                    indexLeft: index,
                    indexRight,
                };
            }
        }
        return null;
    }

    function isPalindromeOnSwipeForIndex(wordParam, staticIndex, currentIndex) {
        const aux = wordParam.at(staticIndex);

        const partialSwap = wordParam.substring(0, staticIndex)
        + wordParam.at(currentIndex)
        + wordParam.substring(staticIndex + 1);

        const wordWithSwap = partialSwap.substring(0, currentIndex) + aux
        + partialSwap.substring(currentIndex + 1);

        const isSwapStillNeeded = findIndexesWithSwapNeeded(wordWithSwap, HALF_LENGTH_SIZE);
        // if false it means we got a palindrome with the previous swap
        return !isSwapStillNeeded;
    }

    const initialIndexs = findIndexesWithSwapNeeded(word, HALF_LENGTH_SIZE);

    if (!initialIndexs) {
        return [];
    }

    const { indexLeft } = initialIndexs;
    const { indexRight } = initialIndexs;

    for (let currentIndex = indexLeft + 1; currentIndex < indexRight; currentIndex += 1) {
        const currentRight = indexRight - currentIndex;
        const palindromeLeft = isPalindromeOnSwipeForIndex(word, indexLeft, currentIndex);
        const palindromeRight = isPalindromeOnSwipeForIndex(word, indexRight, currentRight);
        if (palindromeLeft) {
            return [indexLeft, currentIndex];
        }
        if (palindromeRight) {
            return [currentRight, indexRight];
        }
    }
    return null;
}
