function multiplyBy2(numbers) {
    numbers.map(x => console.log(x >= 0? `Result: ${(x*2).toFixed(2)}`: 'Negative number!'))
}

multiplyBy2([
    12,
    43.2144,
    12.3,
    543.23,
    -20
])