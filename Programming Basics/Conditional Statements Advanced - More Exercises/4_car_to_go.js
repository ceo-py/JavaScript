function carToGo(param) {
    const [budget, season] = [Number(param[0]), param[1]]
    let [classType, carType, carPrice] = [null, null, 0]

    if (budget <= 100) {
        classType = 'Economy class'
        if (season === 'Summer') {
            carType = 'Cabrio'
            carPrice = 0.35
        } else if (season === 'Winter') {
            carType = 'Jeep'
            carPrice = 0.65
        }
    } else if (budget <= 500) {
        classType = 'Compact class'
        if (season === 'Summer') {
            carType = 'Cabrio'
            carPrice = 0.45
        } else if (season === 'Winter') {
            carType = 'Jeep'
            carPrice = 0.80
        }
    } else {
        classType = 'Luxury class'
        carType = 'Jeep'
        carPrice = 0.90
    }
    carPrice = budget * carPrice
    console.log(`${classType}\n${carType} - ${carPrice.toFixed(2)}`)
}

carToGo([
    '70.50',
    'Winter'
])