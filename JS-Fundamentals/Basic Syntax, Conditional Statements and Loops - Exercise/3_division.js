function division(inputNumber) {
    const [divisibleNumbers, divisibleTo] = [[2, 3, 6, 7, 10], Number(inputNumber)]
    let divisibleNumber = null
    divisibleNumbers.forEach(x => {
        if (divisibleTo % x === 0) divisibleNumber = x
    })
    console.log(divisibleNumber ? `The number is divisible by ${divisibleNumber}`: 'Not divisible')
}

division('1643')