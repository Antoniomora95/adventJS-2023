export default function cyberReindeer(road, time) {
    const roadUnit = '.';
    const sled = 'S';
    const closedBarrier = '|';
    const openBarrier = '*';
    const finalResult = [];

    let cleanRoadSate = road.replace(sled, roadUnit);
    let currentIndex = road.indexOf(sled);
    let countToOpen = 5;

    let modifiedRoad = road;

    for (let index = 0; index < time; index += 1) {
        // check if i can modify the string, meaning if can or cannot move.

        if (countToOpen === 0) {
            cleanRoadSate = cleanRoadSate.replace(/\|/g, openBarrier);
        }
        const canGoAhead = cleanRoadSate.charAt(currentIndex + 1) !== closedBarrier;

        if (canGoAhead && index > 0) {
            modifiedRoad = cleanRoadSate.substring(0, currentIndex + 1)
            + sled + cleanRoadSate.substring(currentIndex + 2);

            currentIndex += 1;
        }

        countToOpen -= 1;

        finalResult.push(modifiedRoad);
    }
    return finalResult;
}
