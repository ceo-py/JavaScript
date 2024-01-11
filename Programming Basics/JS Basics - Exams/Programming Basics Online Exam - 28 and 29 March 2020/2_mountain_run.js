function mountainRun(param) {
    const [recordInSeconds, distanceMeters, timeForOneMeter] = param.map(Number);

    const claimingTime = distanceMeters * timeForOneMeter;
    const slowingTime = Math.floor(distanceMeters / 50) * 30;
    const totalTime = claimingTime + slowingTime;

    if (totalTime < recordInSeconds) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        const difference = Math.abs(totalTime - recordInSeconds);
        console.log(`No! He was ${difference.toFixed(2)} seconds slower.`);
    }

}

mountainRun([])