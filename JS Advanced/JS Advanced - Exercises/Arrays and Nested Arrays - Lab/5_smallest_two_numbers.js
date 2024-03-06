function smallestTwoNumbers(input) {
    const minNumber = Math.min(...input)
    input.splice(input.indexOf(minNumber), 1)
    console.log(minNumber, Math.min(...input))
}

smallestTwoNumbers([30, 15, 50, 5])