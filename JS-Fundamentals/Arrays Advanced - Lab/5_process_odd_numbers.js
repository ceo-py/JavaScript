function processOddNumbers(array) {
    const result = []

    array.forEach((x, i) => i % 2 !== 0? result.unshift(x*2): null)
    console.log(result.join(' '))
}

processOddNumbers([3, 0, 10, 4, 7, 3])


// function processOddNumbers(array) {
//   const result = array
//     .filter((_, i) => i % 2 !== 0)
//     .map(x => x * 2)
//     .reverse();
//   console.log(result.join(' '));
// }