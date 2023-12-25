export default function checkIsValidCopy(original = '', copy = '') {
    // DO NOT USE /g here because you have to match only once
    // /g is used when you want to perform the logic more than once in the string
    const presedences = {
        '#': 1,
        '+': 2,
        ':': 3,
        '.': 4,
        ' ': 5,
    };

    // look if original and copy are the same string
    // if not: then check if the original is upper case,
    // and when passed to lower case it is the same as the copy
    // if not: then check if the original is a valid upper or lower case letter,
    // and the copy is a valid presedence symbol
    // if not: then check if both chars are valid symbol with valid presence between them
    // finally, return false, the copy char is not valid, and the whole copy string too.
    const UPPERCASE_REGEX = /[A-Z]/;
    const LOWERCASE_REGEX = /[a-z]/;
    return original.split('').every((charAtOriginal, index) => {
        const charAtCopy = copy.charAt(index);

        if (charAtOriginal === charAtCopy) {
            return true;
        }

        const isOriginalUpper = UPPERCASE_REGEX.test(charAtOriginal);
        const isSameLowerCase = charAtOriginal.toLowerCase() === charAtCopy;

        if (isOriginalUpper && isSameLowerCase) {
            return true;
        }

        const isOriginalLower = LOWERCASE_REGEX.test(charAtOriginal);
        const isValidPresedence = presedences[charAtCopy] > 0;
        if ((isOriginalUpper || isOriginalLower) && isValidPresedence) {
            return true;
        }
        // finally if both are valid symbols
        const hasValidPresedenceSymbol = presedences[charAtCopy] > presedences[charAtOriginal];

        if (hasValidPresedenceSymbol) {
            return true;
        }
        return false;
    });
}
