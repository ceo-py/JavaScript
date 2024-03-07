function sorting(array) {
    const result = []
    array.sort((a, b) => a - b)
    while (array.length > 0) {
        const smallest = array.shift()
        const biggest = array.pop()
        if (biggest) result.push(biggest)
        if (smallest) result.push(smallest)
    }
    console.log(result.join(' '))
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])


// function sorting(array) {
//     array.sort((a, b) => a - b);
//     const result = [];
//     while (array.length) {
//         if (array.length) result.push(array.shift());
//         if (array.length) result.push(array.pop());
//     }
//     console.log(result.join(' '));
// }