function calculateGrigorPoints(array) {
    let [tournaments, startingPoints, ...qualifications] = array.map(x => isNaN(x) ? x : Number(x))
    let [accumulatedPoints, wins] = [0, 0]

    for (let i = 0; i < tournaments; i++) {
        let result = qualifications[i]

        if (result === 'W') {
            wins += 1
            accumulatedPoints += 2000
        } else if (result === 'F') {
            accumulatedPoints += 1200
        } else if (result === 'SF') {
            accumulatedPoints += 720
        }
    }
    console.log(`Final points: ${accumulatedPoints + startingPoints}\nAverage points: ${parseInt(accumulatedPoints / tournaments)}\n${((wins / tournaments) * 100).toFixed(2)}%`)
}

calculateGrigorPoints(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])