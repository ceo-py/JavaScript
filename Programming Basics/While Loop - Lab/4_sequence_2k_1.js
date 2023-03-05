function numbersInARow(array) {
    let [target, currentNumber] = [array.pop(), 0]

    while ((currentNumber * 2) + 1 < target) {
        currentNumber = (currentNumber * 2) + 1
        console.log(currentNumber)
    }
}

numbersInARow(["8"])