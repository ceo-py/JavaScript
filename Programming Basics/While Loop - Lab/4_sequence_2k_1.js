function numbersInARow(array) {
    let [target, currentNumber] = [array.pop(), 1]

    while (target >= currentNumber) {
        console.log(currentNumber)
        currentNumber = (currentNumber * 2) + 1
    }
}

numbersInARow(["8"])