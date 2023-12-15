/*
In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.
Gifts are strings of text and materials are characters. Your task is to write a function that,
given a list of gifts and the available materials, returns a list of the gifts that can be made.
A gift can be made if we have all the necessary materials to make it.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
manufacture(gifts, materials) // ["tren", "oso"]
*/

function manufacturerGift(gifts, materials) {
    return gifts.filter((gift) => (
        gift.split('')
            .every((char) => materials.includes(char))
    ));
}

export default manufacturerGift;
