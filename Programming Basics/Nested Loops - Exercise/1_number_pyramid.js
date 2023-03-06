function pyramidOfNumbers(number) {
    number = Number(number)
    let [current, bigger] = [1, false]

    for (let r = 1; r <= number; r++) {
        for (let c = 1; c < r + 1; c++) {
            if (current > number) {
                bigger = true
                break
            }
            process.stdout.write(`${current} `)
            current += 1
        }
        if (bigger) {
            break
        }
        console.log()
    }

}

pyramidOfNumbers(["7"])
