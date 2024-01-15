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


//
// function operationBetweenNumbers(array) {
//     let [numberOne, numberTwo, operator] = array.map(x => isNaN(x) ? x : Number(x))
//     let output = ''
//     const result = eval(`${numberOne}${operator}${numberTwo}`)
//     if (numberTwo !== 0 && '/%'.includes(operator)) {
//         output = `${numberOne} ${operator} ${numberTwo} = ${operator === '/' ? result.toFixed(2) : result}`
//     } else if ('+-*'.includes(operator)) {
//         output = `${numberOne} ${operator} ${numberTwo} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`
//     } else {
//         output = `Cannot divide ${numberOne} by zero`
//     }
//
//     console.log(output)
// }