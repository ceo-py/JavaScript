function validityChecker(x1, y1, x2, y2) {
    function distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    }

    function isValid(x1, y1, x2, y2) {
        const dist = distance(x1, y1, x2, y2)
        return Number.isInteger(dist)
    }

    function printResult(x1, y1, x2, y2) {
        const result = isValid(x1, y1, x2, y2) ? 'valid' : 'invalid'
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result}`)
    }

    printResult(x1, y1, 0, 0)
    printResult(x2, y2, 0, 0)
    printResult(x1, y1, x2, y2)
}
