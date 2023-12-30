function luckyNumbers(luckyNumber) {
    let result = ''
    for (let f = 1; f <= 9; f++) {
        for (let s = 1; s <= 9; s++) {
            for (let t = 1; t <= 9; t++) {
                for (let l = 1; l <= 9; l++) {
                    const firstSum = f + s
                    if (firstSum === t + l && luckyNumber % firstSum === 0) {
                        result += `${f}${s}${t}${l} `
                    }
                }
            }
        }
    }
    console.log(result)
}

luckyNumbers(3)