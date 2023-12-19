// challenge # 6
export default function maxTraveledDistance(movements) {
    let left = 0;
    let right = 0;
    let both = 0;
    movements.split('').forEach((value) => {
        if (value === '>') {
            right += 1;
        } else if (value === '<') {
            left += 1;
        } else {
            both += 1;
        }
    });

    return (Math.abs(right - left) + both);
}
