function numbersInRange(array) {
    const [totalNumbers, ...allNumbers] = array.map(x => Number(x))

    function calculatePercent(targetNumber, amount) {
        return `${((amount / targetNumber) * 100).toFixed(2)}%`
    }


    let [p1, p2, p3, p4, p5] = [0, 0, 0, 0, 0]

    allNumbers.forEach(x => {
        if (x < 200) {
            p1 += 1
        } else if (x < 400) {
            p2 += 1
        } else if (x < 600) {
            p3 += 1
        } else if (x < 800) {
            p4 += 1
        } else if (x >= 800) {
            p5 += 1
        }
    })
    console.log(calculatePercent(totalNumbers, p1))
    console.log(calculatePercent(totalNumbers, p2))
    console.log(calculatePercent(totalNumbers, p3))
    console.log(calculatePercent(totalNumbers, p4))
    console.log(calculatePercent(totalNumbers, p5))
}

numbersInRange(["3",
    "1",
    "2",
    "999"])
