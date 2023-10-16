function vacation(param) {
    const [budget, season] = param.map(x => isNaN(x) ? x : Number(x))
    let [location, stayingPlace, price] = [null, null, 0]

    if (budget <= 1000) {
        stayingPlace = 'Camp'
        if (season === 'Summer') {
            location = 'Alaska'
            price = 0.65
        } else if (season === 'Winter') {
            location = 'Morocco'
            price = 0.45
        }
    } else if (budget <= 3000) {
        stayingPlace = 'Hut'
        if (season === 'Summer') {
            location = 'Alaska'
            price = 0.80
        } else if (season === 'Winter') {
            location = 'Morocco'
            price = 0.60
        }
    } else {
        stayingPlace = 'Hotel'
        location = season === 'Summer'? 'Alaska':'Morocco'
        price = 0.90
    }

    price *= budget
    console.log(`${location} - ${stayingPlace} - ${price.toFixed(2)}`)

}

vacation([
    '800',
    'Summer'
])