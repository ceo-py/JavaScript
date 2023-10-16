function averageNumber(numbers) {
    // numbers.shift()
    // console.log(`${(eval(numbers.join('+'))/numbers.length).toFixed(2)}`)


    let output = 0
    for (let i = 1; i < numbers.length; i++) {
        output += Number(numbers[i])
    }
    console.log(`${(output / (numbers.length - 1)).toFixed(2)}`)
}

averageNumber([
    2,6,4
])