function calculator(number, operator, number2) {
    console.log(eval(`${number}${operator}${number2}`).toFixed(2))
}

calculator(5,
'+',
10)