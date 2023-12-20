export default function adjustLights(lights = []) {
    const stateLights = {
        countRed: 0,
        countGreen: 0,
        defaultRed: '🔴',
        defaultGreen: '🟢',
    };

    const stateUpdated = lights.reduce((paramState, light) => {
        const {
            countGreen,
            countRed,
            defaultGreen,
            defaultRed,
        } = paramState;

        let green = countGreen;
        let red = countRed;

        if (light !== defaultGreen) {
            green += 1;
        } if (light !== defaultRed) {
            red += 1;
        }

        return {
            countGreen: green,
            countRed: red,
            defaultRed: defaultGreen,
            defaultGreen: defaultRed,
        };
    }, stateLights);

    return Math.min(stateUpdated.countGreen, stateUpdated.countRed);
}
