function calculateNeededMoneyForFlowers(input) {
    const [magnolias, hyacinths, rose, cacti, giftPrice] = input.map(x => Number(x))

    const totalSum = magnolias * 3.25 + hyacinths * 4 + rose * 3.50 + cacti * 8
    const totalSumAfterTaxes = totalSum - ((totalSum * 0.5) / 10)

    if (totalSumAfterTaxes < giftPrice) {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - totalSumAfterTaxes)} leva.`)
    } else {
        console.log(`She is left with ${Math.floor(totalSumAfterTaxes - giftPrice)} leva.`)
    }
}

calculateNeededMoneyForFlowers(['2', '3', '5', '1', '50'])

