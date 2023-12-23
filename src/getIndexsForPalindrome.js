export default function getIndexsForPalindrome(word = '') {
    // find the indexs where the words do not match (no palindrome)

    // first letters that do not match, we stop, and return the indexs
    // these will help you to check to its right and left positions
    // we will check on each iteration if we already have a match
    // then we return the indexs which helped us find the palindrome

    const halfLengthSize = Math.floor(word.length / 2);
    function findInitialIndexesSwap(wordParam, length) {
        const originalLength = word.length;
        for (let index = 0; index < length; index += 1) {
            const indexLeft = index;
            const indexRight = originalLength - 1 - index;
            if (wordParam.at((indexLeft)) !== wordParam.at((indexRight))) {
                return {
                    indexLeft,
                    indexRight,
                };
            }
        }
        return null;
    }

    const indexs = findInitialIndexesSwap(word, halfLengthSize);

    if (!indexs) {
        // this is already a palindrome, return empty array
        return [];
    }
    const { indexLeft, indexRight } = indexs;

    const wordArrray = word.split('');

    for (let index = indexLeft + 1; index < indexRight; index += 1) {
        // going right, 2 chars
        const staticIndexLeft = indexLeft;
        const dynamiIndexLeft = index;
        const wordsCopy = wordArrray.slice();
        const auxLeft = wordsCopy.at(staticIndexLeft);
        wordsCopy.splice(staticIndexLeft, 1, wordsCopy.at(dynamiIndexLeft));
        wordsCopy.splice(dynamiIndexLeft, 1, auxLeft);
        const copyForReverse = wordsCopy.slice();
        if (copyForReverse.reverse().join('') === wordsCopy.join('')) {
            // a palindrome
            return [staticIndexLeft, dynamiIndexLeft];
        }
        // from right to left

        const staticIndexRight = indexRight;
        const dynamiIndexRight = -index - 1;
        const wordsCopyRight = wordArrray.slice();
        const auxRight = wordsCopy.at(staticIndexRight);
        wordsCopyRight.splice(staticIndexRight, 1, wordsCopy.at(dynamiIndexRight));
        wordsCopyRight.splice(dynamiIndexRight, 1, auxRight);
        const secondCopyeForReverse = wordsCopyRight.slice();
        if (secondCopyeForReverse.reverse().join('') === wordsCopyRight.join()) {
            // a palindrome
            return [staticIndexRight, dynamiIndexRight];
        }
    }
    return null;
}

getIndexsForPalindrome('abab');
