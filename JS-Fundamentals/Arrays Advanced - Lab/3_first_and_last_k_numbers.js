function firstAndLastKNumbers(array) {
    const k = array.shift()
    console.log(array.slice(0, k).join(' '))
    console.log(array.slice(array.length - k, array.length).join(' '))
}

firstAndLastKNumbers([3, 6, 7, 8, 9])


// function firstAndLastKNumbers(array) {
//     const k = array.shift();
//     const firstKNumbers = array.slice(0, k);
//     const lastKNumbers = array.slice(-k);
//     return { firstKNumbers, lastKNumbers };
// }