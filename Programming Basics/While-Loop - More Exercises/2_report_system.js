function reportSystem(list) {
    list = list.map(x => isNaN(x) ? x : Number(x))
    let [sumNeeded, money, collected, cash, cashCounter, card, cardCounter, counter, average_cash, average_card] = [list.shift(), 0, 0, 0, 0, 0, 0, 0, 0, 0]

    while (list.length > 0 && list[0] !== 'End') {
        money = list.shift()
        counter += 1

        if (counter % 2 === 0) {
            if (money < 10) {
                console.log('Error in transaction!')
            } else {
                collected += money
                card += money
                cardCounter += 1
                console.log('Product sold!')
            }
        } else {
            if (money > 100) {
                console.log('Error in transaction!')
            } else {
                collected += money
                cash += money
                cashCounter += 1
                console.log('Product sold!')
            }
        }

        if (collected >= sumNeeded) {
            average_cash = cash / cashCounter
            average_card = card / cardCounter
            console.log(`Average CS: ${average_cash.toFixed(2)}`)
            console.log(`Average CC: ${average_card.toFixed(2)}`)
            break
        }

    }

    if (average_cash === 0) {
        console.log('Failed to collect required money for charity.')
    }
}

reportSystem(['600',
'86',
'150',
'98',
'227',
'End'])
