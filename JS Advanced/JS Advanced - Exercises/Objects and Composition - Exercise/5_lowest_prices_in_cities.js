function lowestPricesInCities(cityProducts) {
    const uniqueCityPriceLowest = []
    const findProduct = (productToFind) => uniqueCityPriceLowest.find(product => product.name === productToFind)
    cityProducts.forEach(city => {
        const [town, name, price] = city.split(' | ').map(x => isNaN(x) ? x : Number(x))
        const product = findProduct(name)
        if (product && product.hasOwnProperty('price') && price < product.price) {
            product.town = town
            product.name = name
            product.price = price
        } else if (!product) {
            uniqueCityPriceLowest.push({
                town, name, price
            })
        }
    })
    Object.values(uniqueCityPriceLowest).forEach(product => {
        console.log(`${product.name} -> ${product.price} (${product.town})`)
    })
}


lowestPricesInCities(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'Mexico City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Washington City | Mercedes | 1000',])