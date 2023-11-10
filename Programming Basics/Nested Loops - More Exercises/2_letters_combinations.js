function lettersCombinations(input) {
    const [startRange, endRange, skipLetter] = [input[0].charCodeAt(0), input[1].charCodeAt(0), input[2].charCodeAt(0)]
    let foundCombinations = 0
    for (let firstLetter = startRange; firstLetter < endRange + 1; firstLetter += 1) {
        for (let secondLetter = startRange; secondLetter < endRange + 1; secondLetter += 1) {
            for (let thirdLetter = startRange; thirdLetter < endRange + 1; thirdLetter += 1) {
                if (firstLetter !== skipLetter && secondLetter !== skipLetter && thirdLetter !== skipLetter) {
                    foundCombinations += 1
                    process.stdout.write(`${String.fromCharCode(firstLetter)}${String.fromCharCode(secondLetter)}${String.fromCharCode(thirdLetter)} `)
                }
            }
        }
    }
    process.stdout.write(`${foundCombinations}`)
}

lettersCombinations(['a', 'c', 'b'])