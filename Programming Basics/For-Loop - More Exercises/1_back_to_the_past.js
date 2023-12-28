function backToThePast(list) {
    const [inheritance, yearToLive] = list.map(Number)
    let [spendMoney, ivanchoYears, yearlySavings] = [0, 18, 12000]

    for (let i = 1800; i <= yearToLive; i++) {
        if (i % 2 === 0) {
            spendMoney += yearlySavings
        } else {
            spendMoney += yearlySavings + (ivanchoYears * 50)
        }
        ivanchoYears++
    }

    const difference = inheritance - spendMoney
    if (difference >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${difference.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${Math.abs(difference).toFixed(2)} dollars to survive.`)
    }
}

backToThePast(['100000.15',
    "1808"])