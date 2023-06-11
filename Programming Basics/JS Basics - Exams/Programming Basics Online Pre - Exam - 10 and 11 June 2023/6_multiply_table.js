function solve(list) {
    const [firstRange, secondRange, thirdRange] = [parseInt(list[0][2]), parseInt(list[0][1]), parseInt(list[0][0])]

    for (let fNum = 1; fNum <= firstRange; fNum++) {
        for (let sNum = 1; sNum <= secondRange; sNum++) {
            for (let tNum = 1; tNum <= thirdRange; tNum++) {
                const result = fNum * sNum * tNum
                console.log(`${fNum} * ${sNum} * ${tNum} = ${result};`)
            }
        }
    }
}
