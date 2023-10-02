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





// function vacation(array) {
//     let vacationPrice = Number(array.shift())
//     let availableMoney = Number(array.shift())
//     let spendingDays = 0
//     let totalDays = 0
//
//
//     while (availableMoney < vacationPrice && spendingDays !== 5) {
//         const command = array.shift()
//         const money = Number(array.shift())
//         totalDays += 1
//         if (command === 'spend') {
//             spendingDays += 1
//             availableMoney -= money
//             if (availableMoney < 0) {
//                 availableMoney = 0
//             }
//         } else  {
//             spendingDays = 0
//             availableMoney += money
//         }
//     }
//     if (spendingDays === 5) {
//         console.log(`You can\'t save the money.\n${totalDays}`)
//     } else {
//         console.log(`You saved the money for ${totalDays} days.`)
//     }
// }

//
// function vacation(array) {
//     let vacationPrice = Number(array[0])
//     let availableMoney = Number(array[1])
//     let spendingDays = 0
//     let totalDays = 0
//
//     let startingIndex = 2
//
//     while (availableMoney < vacationPrice && spendingDays !== 5) {
//         const command = array[startingIndex]
//         const money = Number(array[startingIndex + 1])
//         totalDays += 1
//         startingIndex += 2
//
//         if (command === 'spend') {
//             spendingDays += 1
//             availableMoney -= money
//             if (availableMoney < 0) {
//                 availableMoney = 0
//             }
//         } else {
//             spendingDays = 0
//             availableMoney += money
//         }
//     }
//     if (spendingDays === 5) {
//         console.log(`You can\'t save the money.\n${totalDays}`)
//     } else {
//         console.log(`You saved the money for ${totalDays} days.`)
//     }
// }
//
// vacation(["110",
//     "60",
//     "spend",
//     "10",
//     "spend",
//     "10",
//     "spend",
//     "10",
//     "spend",
//     "10",
//     "spend",
//     "10"])








savingsForVacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
