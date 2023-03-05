function findMaxNumber(array) {
    let [i, maxNumber] = [0, Number(array.shift())]

    while (array[i] !== 'Stop') {
        let number = Number(array[i])

        if (number > maxNumber) {
            maxNumber = number
        }

        i += 1
    }

    console.log(maxNumber)
}


findMaxNumber(["-1",
    "-2",
    "Stop"])
