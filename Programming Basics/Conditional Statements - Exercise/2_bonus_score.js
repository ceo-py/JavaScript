function bonusPointsScore(points) {
    points = Number(points)
    let bonusPoints = points * 0.10

    if (points <= 100) {
        bonusPoints = 5
    } else if (points <= 1000) {
        bonusPoints = points * 0.20
    }
    if (points % 2 === 0) {
        bonusPoints += 1
    } else if (points % 10 === 5) {
        bonusPoints += 2
    }

    points += bonusPoints

    console.log(`${bonusPoints}\n${points}`)
}

bonusPointsScore(["2703"])
