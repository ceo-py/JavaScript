function costOfHome(array) {
    const [typeFlowers, numberFlowers, budget] = array.map(x => isNaN(x) ? x : Number(x))
    const [roses, dahlias, tulips, narcissus, gladiolus] = [5, 3.80, 2.80, 3, 2.50]
    let [discount, price] = [1, 0]


    if (typeFlowers === 'Roses') {
        price = roses
        if (numberFlowers > 80) {
            discount = 0.90
        }
    } else if (typeFlowers === 'Dahlias') {
        price = dahlias
        if (numberFlowers > 90) {
            discount = 0.85
        }
    } else if (typeFlowers === 'Tulips') {
        price = tulips
        if (numberFlowers > 80) {
            discount = 0.85
        }
    } else if (typeFlowers === 'Narcissus') {
        price = narcissus
        if (numberFlowers < 120) {
            discount = 1.15
        }
    } else if (typeFlowers === 'Gladiolus') {
        price = gladiolus
        if (numberFlowers < 80) {
            discount = 1.20
        }
    }
    let totalSum = (price * numberFlowers) * discount
    let moneyLeft = Math.abs(totalSum - budget).toFixed(2)

    if (totalSum <= budget) {
        console.log(`Hey, you have a great garden with ${numberFlowers} ${typeFlowers} and ${moneyLeft} leva left.`)
    } else {
        console.log(`Not enough money, you need ${moneyLeft} leva more.`)
    }
}

costOfHome(["Roses", "55", "250"])

