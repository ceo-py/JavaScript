function catWalking(param) {
    const [minutesWalkPerDay, numberWalksPerDay, takenCalories] = param.map(Number);

    const totalMinutesWalk = minutesWalkPerDay * numberWalksPerDay;
    const totalBurnCalories = totalMinutesWalk * 5;
    const targetBurnCalories = takenCalories / 2;

    if (totalBurnCalories >= targetBurnCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnCalories}.`);
    }

}

catWalking([])