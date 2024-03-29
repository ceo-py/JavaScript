function enoughMoneyForMovie(array) {
    let [budget, extra, costumePricePerExtra] = array.map(x => Number(x))

    const decoration = budget * 0.10

    if (extra > 150) {
        costumePricePerExtra *= 0.90
    }

    const totalSum = (extra * costumePricePerExtra) + decoration
    const moneyLeft = Math.abs(budget - totalSum).toFixed(2)

    if (budget >= totalSum) {
        console.log(`Action!\nWingard starts filming with ${moneyLeft} leva left.`)
    } else {
        console.log(`Not enough money!\nWingard needs ${moneyLeft} leva more.`)
    }
}