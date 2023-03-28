function fuelTank(list) {
    const [fuelType, fuelQuantity] = [list[0].toLowerCase(), Number(list[1])]

    if ('diesel gasoline gas'.includes(fuelType) && fuelQuantity >= 25) {
        console.log(`You have enough ${fuelType}.`)
    } else if ('diesel gasoline gas'.includes(fuelType) && fuelQuantity < 25) {
        console.log(`Fill your tank with ${fuelType}!`)
    } else {
        console.log('Invalid fuel!')
    }

}

fuelTank(['Diesel', '10'])
