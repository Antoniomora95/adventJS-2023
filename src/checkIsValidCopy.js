export default function checkIsValidCopy(original = '', copy = '') {
    // DO NOT USE /g here because you have to match only once
    // /g is used when you want to perform the logic more than once in the string
    const presedences = {
        '#': 2,
        '+': 3,
        ':': 4,
        '.': 5,
        ' ': 6,
    };

    // look if original and copy are the same string
    // if not: then check if the original is upper case,
    // and when passed to lower case it is the same as the copy
    // if not: then check if the original is a valid upper or lower case letter,
    // and the copy is a valid presedence symbol
    // if not: then check if both chars are valid symbol with valid presence between them
    // finally, return false, the copy char is not valid, and the whole copy string too.
    // const UPPERCASE_REGEX = /[A-Z]/;
    const LOWERCASE_REGEX = /[a-z]/;
    return original.split('').every((originalChar, index) => {
        const copyChar = copy.charAt(index);

        const valueForOriginal = presedences[originalChar]
            ?? (LOWERCASE_REGEX.test(originalChar) ? 1 : 0);

        const valueForCopy = presedences[copyChar]
            ?? (LOWERCASE_REGEX.test(copyChar) ? 1 : 0);

        if (valueForCopy < valueForOriginal) {
            return false;
        }

        if (valueForOriginal < 2 && valueForCopy < 2
            && originalChar.toUpperCase() !== copyChar.toUpperCase()) {
            return false;
        }
        return true;
    });
}

checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#');
