function findTargetDestination(array) {
    let [i, destination, budget, savedMoney] = [0, '', 0, 0]

    while (array[i] !== 'End' && array[i]) {

        let input = array[i]

        if (isNaN(input)) {
            i += 1
            destination = input
            budget = array[i]
            i += 1

            while (!isNaN(array[i])) {
                savedMoney += Number(array[i])
                i += 1
            }
        }
        console.log(`Going to ${destination}!`)
    }
}

findTargetDestination(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])

