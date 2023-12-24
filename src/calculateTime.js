export default function calculateTime(deliveries = []) {
    const limitSeconds = 25200;

    const initialTime = {
        hours: 0,
        minutes: 0,
        seconds: 0,
    };
    const finalTime = deliveries.reduce((sumTime, currentTime) => {
        const { hours, minutes, seconds } = sumTime;
        const [currentHours, currentMinutes, currentSeconds] = currentTime.split(':').map((time) => parseInt(time, 10));

        return {
            hours: hours + currentHours,
            minutes: minutes + currentMinutes,
            seconds: seconds + currentSeconds,
        };
    }, initialTime);

    function getFormattedTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        let remainingSeconds = seconds - (hours * 3600);
        const minutes = Math.floor(remainingSeconds / 60);
        remainingSeconds -= minutes * 60;

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    const { hours, minutes, seconds } = finalTime;

    const finalSeconds = (hours * 60 * 60) + (minutes * 60) + seconds;

    const difference = limitSeconds - finalSeconds;

    const formattedTime = getFormattedTime(Math.abs(difference));
    if (difference > 0) {
        return `-${formattedTime}`;
    }
    return formattedTime;
}
