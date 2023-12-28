function gameOfIntervals(input) {

    let [totalIntervals, totalScore, list, nine, nineTeen, twentyNine, thirtyNine, fifty, invalidNumbers] = [input.shift(), 0, input.map(Number), 0, 0, 0, 0, 0, 0,]
    for (const interval of list) {
        if (interval < 0 || interval > 50) {
            invalidNumbers++
            if (totalScore > 0) {
                totalScore /= 2
            }
        } else if (interval < 10) {
            nine++
            totalScore += interval * 0.20
        } else if (interval < 20) {
            nineTeen++
            totalScore += interval * 0.30
        } else if (interval < 30) {
            twentyNine++
            totalScore += interval * 0.40
        } else if (interval < 40) {
            thirtyNine++
            totalScore += 50
        } else if (interval <= 50) {
            fifty++
            totalScore += 100
        }
    }
    console.log(`${totalScore.toFixed(2)}`)
    console.log(`From 0 to 9: ${(nine / totalIntervals * 100).toFixed(2)}%`)
    console.log(`From 10 to 19: ${(nineTeen / totalIntervals * 100).toFixed(2)}%`)
    console.log(`From 20 to 29: ${(twentyNine / totalIntervals * 100).toFixed(2)}%`)
    console.log(`From 30 to 39: ${(thirtyNine / totalIntervals * 100).toFixed(2)}%`)
    console.log(`From 40 to 50: ${(fifty / totalIntervals * 100).toFixed(2)}%`)
    console.log(`Invalid numbers: ${(invalidNumbers / totalIntervals * 100).toFixed(2)}%`)
}

gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20])