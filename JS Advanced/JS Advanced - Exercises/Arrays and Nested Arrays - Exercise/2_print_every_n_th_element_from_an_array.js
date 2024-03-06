function printEveryNthElementFromAnArray(input, everyNElement) {
    const result = []
    for (let i = 0; i < input.length; i += everyNElement) {
        result.push(input[i])
    }
    return result
}

printEveryNthElementFromAnArray(['5',
        '20',
        '31',
        '4',
        '20'],
    2)