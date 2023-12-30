function uniquePinCodes(input) {
    const [start, middle, end] = input.map(Number)

    for (let f = 2; f <= start; f+=2) {
        for (let m = 2; m <= middle; m++) {
            for (let e = 2; e <= end; e+=2) {
                if (f % 2 ===0 && e % 2 ===0 && [2, 3, 5, 7].includes(m)) {
                    console.log(`${f} ${m} ${e}`)
                }
            }
        }
    }
}

uniquePinCodes([2, 5, 5])