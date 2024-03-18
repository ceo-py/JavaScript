function storeCatalogue(array) {
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