function findMinNumber(array) {
    let [i, minNumber] = [0, Number(array.shift())]

    while (array[i] !== 'Stop') {
        let number = Number(array[i])

        if (number < minNumber) {
            minNumber = number
        }

        i += 1
    }

    console.log(minNumber)
}


findMinNumber(["100",
"99",
"80",
"70",
"Stop"])
