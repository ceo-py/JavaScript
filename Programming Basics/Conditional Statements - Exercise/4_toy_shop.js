function moneyForVacation(array) {
    const [vacationPrice, puzzles, talkingDolls, teddyBears, minions, trucks] = array.map(x => Number(x))

    const puzzlePrice = 2.60
    const talkingDollPrice = 3
    const teddyBearPrice = 4.10
    const minionPrice = 8.20
    const truckPrice = 2


    const puzzleTotalSum = puzzles * puzzlePrice
    const talkingTotalSum = talkingDolls * talkingDollPrice
    const teddyTotalSum = teddyBears * teddyBearPrice
    const minionTotalSum = minions * minionPrice
    const truckTotalSum = trucks * truckPrice

    let totalOrderedToysSum = puzzleTotalSum + talkingTotalSum + teddyTotalSum + minionTotalSum + truckTotalSum
    const totalOrderedToyNumber = puzzles + talkingDolls + teddyBears + minions + trucks

    if (totalOrderedToyNumber >= 50) {
        totalOrderedToysSum *= 0.75
    }

    totalOrderedToysSum *= 0.90
    let leftMoney = Math.abs(vacationPrice - totalOrderedToysSum).toFixed(2)

    if (totalOrderedToysSum >= vacationPrice) {
        console.log(`Yes! ${leftMoney} lv left.`)
    } else {
        console.log(`Not enough money! ${leftMoney} lv needed.`)
    }
}

moneyForVacation(["40.8", "20", "25", "30", "50", "10"])
