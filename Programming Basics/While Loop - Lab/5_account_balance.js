function accountBalance(array) {
    let [totalSum, i] = [0, 0]

    while (array[i] !== 'NoMoreMoney') {

        let number = Number(array[i]).toFixed(2)

        if (number < 0) {
            console.log('Invalid operation!')
            break
        }
        console.log(`Increase: ${number}`)
        totalSum += Number(number)
        i += 1
    }

    console.log(`Total: ${totalSum.toFixed(2)}`)

}

accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])
