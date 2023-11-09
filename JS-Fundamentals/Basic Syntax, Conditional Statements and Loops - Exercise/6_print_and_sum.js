function print_and_sum(...input) {
    const [start, end] = input.map(Number)
    let totalSum = 0
    for (let x = start; x <= end; x +=1) {
        process.stdout.write(`${x} `)
        totalSum += x
    }
    console.log(`\nSum: ${totalSum}`)
}

print_and_sum('5', '10')