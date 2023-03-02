function onTimeForExam(array) {
    let [hoursTest, minutesTest, hoursArrival, minutesArrival] = array.map(x => isNaN(x) ? x : Number(x))
    let remainHour = 0;
    let remainMinutes = 0;

    const allTestTime = hoursTest * 60 + minutesTest;
    const allArrivalTime = hoursArrival * 60 + minutesArrival;

    if (allTestTime - allArrivalTime > 30) {
        console.log('Early');
        remainHour = Math.floor((allTestTime - allArrivalTime) / 60);
        remainMinutes = allTestTime - allArrivalTime - (remainHour * 60);
        if (remainHour <= 0) {
            console.log(`${remainMinutes} minutes before the start`);
        } else {
            console.log(`${remainHour}:${remainMinutes.toString().padStart(2, '0')} hours before the start`);
        }
    } else if (allTestTime - allArrivalTime >= 0) {
        console.log('On time');
        remainHour = Math.floor((allTestTime - allArrivalTime) / 60);
        remainMinutes = allTestTime - allArrivalTime - (remainHour * 60);
        if (allArrivalTime !== allTestTime) {
            console.log(`${remainMinutes} minutes before the start`);
        }
    } else {
        console.log('Late');
        remainHour = Math.floor((allArrivalTime - allTestTime) / 60);
        remainMinutes = allArrivalTime - allTestTime - (remainHour * 60);
        if (remainHour <= 0) {
            console.log(`${remainMinutes} minutes after the start`);
        } else {
            console.log(`${remainHour}:${remainMinutes.toString().padStart(2, '0')} hours after the start`);
        }
    }
}

onTimeForExam(["9",
    "30",
    "9",
    "50"])
