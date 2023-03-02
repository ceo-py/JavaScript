function findMaxNumber(array) {
    const [numOne, numTwo] = array.map(x => Number(x))
    let result = 0

    if (numOne > numTwo) {
        result = numOne
    } else {
        result = numTwo
    }

    console.log(result)
}

findMaxNumber((["5", "3"]))
