function catalogue(array) {
    const products = {}
    array.forEach(x => {
        const [name, price] = x.split(' : ')
        const capitalLetter = name[0]
        if (!products.hasOwnProperty(capitalLetter)) products[capitalLetter] = {}
        products[capitalLetter][name] = price
    })
    Object.keys(products).sort().forEach(x => {
        console.log(x)
        Object.keys(products[x])
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
            .forEach(p => console.log(`  ${p}: ${products[x][p]}`))
    })
}

catalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])