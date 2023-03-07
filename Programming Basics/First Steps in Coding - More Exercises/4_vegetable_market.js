function calculateVegInEu(numbers) {
    let [vegKgPrice, fruitKgPrice, totalVegKg, totalFruitKG] = numbers.map((x => Number(x)))

    let total = ((vegKgPrice * totalVegKg) + (fruitKgPrice * totalFruitKG)) / 1.94
    console.log(`${total.toFixed(2)}`)
}

calculateVegInEu(['0.194',
    '19.4',
    '10',
    '10'])