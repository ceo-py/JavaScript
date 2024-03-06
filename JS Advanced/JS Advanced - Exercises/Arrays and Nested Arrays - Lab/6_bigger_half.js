function biggerHalf(input) {
    input.sort((a, b) => a - b)
    console.log(input.slice(Math.floor(input.length / 2)))
}

biggerHalf([3, 19, 14, 7, 2, 19, 6])