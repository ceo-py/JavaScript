function smallestTwoNumbers(array) {
    console.log(array.sort((a, b) => a - b).slice(0, 2).join(' '))
}

smallestTwoNumbers([30, 15, 50, 5])


// function smallestTwoNumbers(array) {
//     let sortedArray = array.sort((a, b) => a - b);
//     let smallestNumbers = sortedArray.slice(0, 2);
//     console.log(smallestNumbers.join(' '));
// }