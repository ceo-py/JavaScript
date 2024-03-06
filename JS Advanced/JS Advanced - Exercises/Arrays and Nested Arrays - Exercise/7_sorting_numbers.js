function sortingNumbers(input) {
    input.sort((a, b) => a - b);
    let result = [];
    while (input.length) {
        result.push(input.shift());
        if (input.length) result.push(input.pop());
    }
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))