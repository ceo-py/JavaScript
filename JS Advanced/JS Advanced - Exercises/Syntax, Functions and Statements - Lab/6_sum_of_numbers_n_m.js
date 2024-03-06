function sumOfNumbersNM(...input) {
    let [start, end, result] = [...input.map(Number), 0]
    for (let i = start; i <= end ; i++) {
        result += i
    }
    return result
}

console.log(sumOfNumbersNM('-8', '20'))