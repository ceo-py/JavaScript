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


// bitcoinMining([3124.15, 504.212, 2511.124])
bitcoinMining([100, 200, 300])
