function operationBetweenNumbers(array) {
    let [numberOne, numberTwo, operator] = array.map(x => isNaN(x) ? x : Number(x))

    function outputAddMultiSubtract(nOne, nTwo, pOperator, result) {
        return `${nOne} ${pOperator} ${nTwo} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`
    }

    let output = ''

    if (operator === '+') {
        output = outputAddMultiSubtract(numberOne, numberTwo, operator, numberOne + numberTwo)
    } else if (operator === '-') {
        output = outputAddMultiSubtract(numberOne, numberTwo, operator, numberOne - numberTwo)
    } else if (operator === '*') {
        output = outputAddMultiSubtract(numberOne, numberTwo, operator, numberOne * numberTwo)
    } else if (operator === '%') {
        if (numberOne === 0 || numberTwo === 0) {
            output = `Cannot divide ${numberOne} by zero`
        } else {
            output = `${numberOne} % ${numberTwo} = ${numberOne % numberTwo}`
        }
    } else if (operator === '/') {
        if (numberOne === 0 || numberTwo === 0) {
            output = `Cannot divide ${numberOne} by zero`
        } else {
            output = `${numberOne} / ${numberTwo} = ${(numberOne / numberTwo).toFixed(2)}`
        }
    }

    console.log(output)
}

operationBetweenNumbers(["10",
    "12",
    "+"])