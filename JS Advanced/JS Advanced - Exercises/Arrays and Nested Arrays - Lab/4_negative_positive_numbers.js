function negativePositiveNumbers(input) {
    const result = []
    input = input.map(Number)
    input.forEach(n => n >= 0? result.push(n): result.unshift(n))
    console.log(result.join('\n'))
}