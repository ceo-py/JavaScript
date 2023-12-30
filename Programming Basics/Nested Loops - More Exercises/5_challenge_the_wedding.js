function challengeTheWedding(param) {
    let [man, woman, table] = param.map(Number)
    let result = ''
    for (let m = 1; m <= man; m++) {
        for (let w = 1; w <= woman; w++) {
            if (table === 0) {
                break
            }
            result += `(${m} <-> ${w}) `
            table -=1
        }
    }
    console.log(result)
}

challengeTheWedding([2, 2, 6])