function printNumbersDivision(array) {
    const [startNum, endNum] = array.map(x => isNaN(x) ? x : Number(x))
    let sum = 0
    let output = ''

    for (let i = startNum; i < endNum + 1; i++) {
        if (i % 9 === 0) {
            sum += i
            output += `${i}\n`
        }
    }

    console.log(`The sum: ${sum}`)
    console.log(output.trim())
}

printNumbersDivision(["100", "200"])
