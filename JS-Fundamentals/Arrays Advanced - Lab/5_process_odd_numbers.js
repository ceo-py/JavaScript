function processOddNumbers(array) {
    const result = []

    array.forEach((x, i) => i % 2 !== 0? result.unshift(x*2): null)
    console.log(result.join(' '))
}

processOddNumbers([3, 0, 10, 4, 7, 3])