function savingsForVacation(array) {
    let [i, output, spendingDaysInAROW, vacationPrice, currentMoney, ...operations] = [0, '', 0, Number(array.shift()), Number(array.shift()), array]

    while (currentMoney < vacationPrice) {

        let [command_type, money] = [operations[0][i], Number(operations[0][i + 1])]

        if (command_type === 'spend') {
            spendingDaysInAROW += 1
            currentMoney -= money
            if (currentMoney < 0) {
                currentMoney = 0
            }
            if (spendingDaysInAROW === 5) {
                output = `You can't save the money.\n${parseInt(i / 2) + 1}`


            }
        } else {
            spendingDaysInAROW = 0
            currentMoney += money
        }
        i += 2
    }

    if (!output) {
        output = `You saved the money for ${parseInt(i / 2)} days.`
    }

    console.log(output)

}

savingsForVacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
