export default function getIndexsForPalindrome(word = '') {
    const halfLengthSize = Math.floor(word.length / 2);
    function findInitialIndexesSwap(wordParam, length) {
        const originalLength = word.length;
        for (let index = 0; index < length; index += 1) {
            const indexLeft = index;
            const indexRight = originalLength - 1 - index;
            if (wordParam.at(indexLeft) !== wordParam.at(indexRight)) {
                return [
                    indexLeft,
                    indexRight,
                ];
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

        const reversedString = wordWithSwap.split('').reverse().join('');
        // compare against swapped word (the idea)
        // is to get a palindrome after the positions swap, and ensure
        // the reversed string is the same
        return reversedString === wordWithSwap;
    }

    const initialIndexs = findInitialIndexesSwap(word, halfLengthSize);

    if (!initialIndexs) {
        // already a palindrome
        return [];
    }

    const [indexLeft, indexRight] = initialIndexs;

    for (let currentIndex = indexLeft + 1; currentIndex < indexRight; currentIndex += 1) {
        const currentRight = indexRight - currentIndex;
        const palindromeLeft = isPalindromeOnSwipeForIndex(word, indexLeft, currentIndex);
        const palindromeRight = isPalindromeOnSwipeForIndex(word, indexRight, currentRight);
        if (palindromeLeft) {
            return [
                indexLeft,
                currentIndex,
            ].sort((a, b) => a - b);
        }
        if (palindromeRight) {
            return [
                indexRight,
                currentRight,
            ].sort((a, b) => a - b);
        }
    }
    return null;
}

// console.log(getIndexsForPalindrome('baabaa'));
