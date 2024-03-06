function sameNumbers(input) {
    const numberToString = String(input)
    console.log(new Set(numberToString.split('')).size === 1)
    console.log(eval(numberToString.split('').join('+')))
}
