function smallestTwoNumbers(array) {
    console.log(array.sort((a, b) => a - b).slice(0, 2).join(' '))
}

smallestTwoNumbers([30, 15, 50, 5])