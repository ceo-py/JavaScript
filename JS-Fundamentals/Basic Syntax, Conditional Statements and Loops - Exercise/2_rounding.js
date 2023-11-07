function rounding(...numbers) {
    const [number, decimalPoints] = numbers.map(Number)
    console.log(`${parseFloat(number.toFixed(decimalPoints > 15? 15: decimalPoints))}`)
}

rounding('10.5','3')