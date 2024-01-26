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