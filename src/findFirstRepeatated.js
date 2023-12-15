export default function findFirstRepeated(gifts) {
    const memory = new Map();
    for (let i = 0; i < gifts.length; i += 1) {
        const currentGift = gifts[i];
        const validIndex = memory.get(currentGift);
        if (typeof validIndex === 'number') {
            return currentGift;
        }
        memory.set(currentGift, i);
    }
    return -1;
}

// export default function findFirstRepeated(gifts) {
//     let memory = '';
//     for (let i = 0; i < gifts.length; i += 1) {
//         const gift = gifts[i];
//         if (memory.search(gift) !== -1) {
//             return gift;
//         }
//         memory += gift;
//     }
//     return -1;
// }

/*
{
    4: 0,
    3: 1,
    6: 2
}

*/
