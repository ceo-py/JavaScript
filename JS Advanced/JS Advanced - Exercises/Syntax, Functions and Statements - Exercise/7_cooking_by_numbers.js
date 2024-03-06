function cookingByNumbers(price, ...listCommands) {
    price = Number(price)
    const commands = {
        chop: () => {return price /2},
        dice: () => {return Math.sqrt(price)},
        spice: () => {return price + 1},
        bake: () => {return price * 3},
        fillet: () => {return Number((price * 0.80).toFixed(1))},
    }
    listCommands.forEach(c => {
        price = commands[c]()
        console.log(price)
    })
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')