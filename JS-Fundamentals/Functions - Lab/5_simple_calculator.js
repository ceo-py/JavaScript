function simpleCalculator(n1, n2, operator) {
    let mathOperations = {
        'multiply': n1 * n2,
        'divide': n1 / n2,
        'add': n1 + n2,
        'subtract': n1 - n2,
    };
    console.log(mathOperations[operator])
}

simpleCalculator(5, 5, 'multiply')