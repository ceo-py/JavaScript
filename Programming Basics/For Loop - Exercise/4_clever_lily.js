function howMuchMoneySave(array) {
    let [years, washingMachinePrice, toyPrice] = array.map(x => Number(x))
    let [money, savedMoney] = [0, 10]


    for (let i = 1; i < years + 1; i++) {
        if (i % 2 === 0) {
            money += savedMoney - 1
            savedMoney += 10
        } else {
            money += toyPrice
        }
    }

    let result = 'No!'

    if (money >= washingMachinePrice) {
        result = 'Yes!'
    }

    money = Math.abs(money - washingMachinePrice)

    console.log(`${result} ${money.toFixed(2)}`)
}

howMuchMoneySave(["10",
    "170.00",
    "6"])
