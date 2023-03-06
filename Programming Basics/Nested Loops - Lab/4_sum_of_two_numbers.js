function combinationSumBetweenTwoNumbers(array) {
    let [output, combinations] = ['', 0]
    const [start, end, magicNumber] = array.map(x => Number(x))

    for (let i = start; i <= end; i++) {
        for (let x = start; x <= end; x++) {
            let sum = i + x
            combinations += 1
            if (sum === magicNumber) {
                output = `Combination N:${combinations} (${i} + ${x} = ${sum})`
                break
            }
        }
        if (output) {
            break
        }
    }

    if (!output) {
        output = `${combinations} combinations - neither equals ${magicNumber}`
    }

    console.log(output)
}

combinationSumBetweenTwoNumbers(["23",
    "24",
    "20"])
