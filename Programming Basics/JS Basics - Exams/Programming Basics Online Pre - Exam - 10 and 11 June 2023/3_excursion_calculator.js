function solve(list) {
    let [peopleNumber, season, price, discount, totalSum] = [Number(list.shift()), list.shift(), 0, 1, 0]


    if (peopleNumber <= 5) {

        if (season === 'spring') {
            price = 50.00
        } else if (season === 'summer') {
            price = 48.50
        } else if (season === 'autumn') {
            price = 60.00
        } else if (season === 'winter') {
            price = 86.00
        }

    } else {

        if (season === 'spring') {
            price = 48.00
        } else if (season === 'summer') {
            price = 45.00
        } else if (season === 'autumn') {
            price = 49.50
        } else if (season === 'winter') {
            price = 85.00
        }

    }

    if (season === 'summer') {
        discount = 0.85
    } else if (season === 'winter') {
        discount = 1.08
    }

    totalSum = (peopleNumber * price) * discount

    console.log(`${totalSum.toFixed(2)} leva.`)


}
