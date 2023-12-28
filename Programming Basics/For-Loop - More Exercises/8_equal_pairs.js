function equalPairs(input) {
    const [totalPairs, list] = [input.shift(), input.map(Number)]
    let previousSum = 0
    let maxDifference = 0
    for (let pair=0; pair < totalPairs; pair++) {
        const currentSum = list.shift() + list.shift()
        if (pair === 0) {
            previousSum = currentSum
        }
        const sumAbs = Math.abs(currentSum - previousSum)
        if (sumAbs > maxDifference) {
            maxDifference = sumAbs
        }
        previousSum = currentSum
    }
    if (maxDifference === 0) {
        console.log(`Yes, value=${previousSum}`)
    } else {
        console.log(`No, maxdiff=${maxDifference}`)
    }
}

equalPairs([3,
1,
2,
0,
3,
4,
-1,
])