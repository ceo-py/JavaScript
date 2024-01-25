function listOfProducts(array) {
    array.sort().forEach((x, i) => console.log(`${i +1}.${x}`))
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])