function fuelType(list) {
    const [fuel, quantity, card] = list.map(x => isNaN(x) ? x : Number(x))
    let price = 0

    if ('Diesel' === fuel) {
        price = 2.33
        if ('Yes' === card) {
            price -= 0.12
        }
    } else if ('Gas' === fuel) {
        price = 0.93
        if ('Yes' === card) {
            price -= 0.08
        }
    } else if ('Gasoline' === fuel) {
        price = 2.22
        if ('Yes' === card) {
            price -= 0.18
        }
    }
    let total = price * quantity

    if (quantity >= 20 &&quantity <= 25) {
        total *= 0.92
    } else if (quantity > 25) {
        total *= 0.90
    }

    console.log(`${total.toFixed(2)} lv.`)
}

fuelType(['Diesel', '19', 'No'])

