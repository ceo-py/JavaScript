function combinations(endNumber) {
    endNumber = Number(endNumber)
    let findCombinations = 0

    for (let x1 = 0; x1 <= endNumber; x1++) {
        for (let x2 = 0; x2 <= endNumber; x2++) {
            for (let x3 = 0; x3 <= endNumber; x3++) {
                let sum = x1 + x2 + x3
                if (sum === endNumber) {
                    findCombinations += 1
                }
            }
        }
    }

    console.log(findCombinations)
}

combinations(["25"])