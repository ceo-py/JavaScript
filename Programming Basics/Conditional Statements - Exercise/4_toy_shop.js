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



// function moneyForVacation([vacationPrice, puzzles, talkingDolls, teddyBears, minions, trucks]) {
//     const prices = [2.60, 3, 4.10, 8.20, 2];
//     const quantities = [puzzles, talkingDolls, teddyBears, minions, trucks].map(Number);
//
//     let totalCost = quantities.reduce((sum, quantity, index) => sum + quantity * prices[index], 0);
//     const totalToys = quantities.reduce((sum, quantity) => sum + quantity, 0);
//
//     if (totalToys >= 50) {
//         totalCost *= 0.75;
//     }
//     totalCost *= 0.90;
//
//     const leftMoney = Math.abs(vacationPrice - totalCost).toFixed(2);
//
//     if (totalCost >= vacationPrice) {
//         console.log(`Yes! ${leftMoney} lv left.`);
//     } else {
//         console.log(`Not enough money! ${leftMoney} lv needed.`);
//     }
// }