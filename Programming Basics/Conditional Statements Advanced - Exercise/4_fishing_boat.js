function priceForRentingBoat(array) {
    const [budget, season, numberFisherman] = array.map(x => isNaN(x) ? x : Number(x))

    let [discount, price] = [1, 0]

    if (season === 'Spring') {
        price = 3000
    } else if (season === 'Winter') {
        price = 2600
    } else  {
        price = 4200
    }

    if (numberFisherman <= 6) {
        price *= 0.90
    } else if (numberFisherman <= 11) {
        price *= 0.85
    } else if (numberFisherman >= 12) {
        price *= 0.75
    }


    if (numberFisherman % 2 === 0 && season !== 'Autumn') {
        price *= 0.95
    }

    let moneyLeft = Math.abs(price - budget).toFixed(2)

    if (price <= budget) {
        console.log(`Yes! You have ${moneyLeft} leva left.`)
    } else {
        console.log(`Not enough money! You need ${moneyLeft} leva.`)
    }
}

priceForRentingBoat(["3600",
"Autumn",
"6"])

