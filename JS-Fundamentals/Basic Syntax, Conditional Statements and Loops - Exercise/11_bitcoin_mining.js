function bitcoinMining(list) {
    let [bitcoins, dayFirstBitcoin, totalMoney, days, goldPrice, bitcoinPrice] = [0, 0, 0, 0, 67.51, 11949.16]

    list.forEach((gold, day) => {
        gold *= (day + 1) % 3 === 0 ? 0.70 : 1
        totalMoney += gold * goldPrice
        while (totalMoney >= bitcoinPrice) {
            bitcoins += 1
            totalMoney -= bitcoinPrice
            if (dayFirstBitcoin === 0) {
                dayFirstBitcoin = day + 1
            }
        }
    })

    console.log(`Bought bitcoins: ${bitcoins}`)
    if (bitcoins) console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoin}`)
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}


// function bitcoinMining(array) {
//     let [gold, currentBitcoin, count, day, totalBitcoin] = [0, 0, 0, 0, 0];
//     for (let i = 0; i < array.length; i++) {
//         count++;
//         if ((i + 1) % 3 === 0) {
//             gold += array[i] * 67.51 * 0.7;
//         } else {
//             gold += array[i] * 67.51;
//         }
//         if (gold >= 11949.16) {
//             currentBitcoin = Math.floor(gold / 11949.16);
//             gold = gold - 11949.16 * currentBitcoin;
//             totalBitcoin += currentBitcoin;
//             if (!day) {
//                 day = count;
//             }
//         }
//     }
//     console.log(`Bought bitcoins: ${totalBitcoin}`);
//     if (day) {
//         console.log(`Day of the first purchased bitcoin: ${day}`);
//     }
//     console.log(`Left money: ${gold.toFixed(2)} lv.`);
// }

bitcoinMaining([3124.15, 504.212, 2511.124]);
