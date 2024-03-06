function processOddPositions(input) {
    input.reverse().forEach((n, i) => i % 2 !== 0? console.log(n * 2): null)
}