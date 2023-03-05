function sumNumberUntil(array) {
    let [targetNumber, numbers, i, sum] = [array.shift(), array, 0, 0]

    while (sum < targetNumber) {
        sum += Number(numbers[i])
        i += 1
    }

    console.log(sum)

}

sumNumberUntil(["100",
    "10",
    "20",
    "30",
    "40"])
