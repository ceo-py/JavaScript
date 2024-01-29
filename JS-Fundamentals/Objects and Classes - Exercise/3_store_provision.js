function storeProvision(stockArray, productsArray) {
    const allProducts = [...stockArray, ...productsArray]
    const productsObj = []
    class Product {
        constructor(name, quantity) {
            this.name = name
            this.quantity = Number(quantity)
        }
        addQuantity (number) {
            this.quantity += Number(number)
        }
        details () {
            console.log(`${this.name} -> ${this.quantity}`)
        }
    }

    for (let i = 0; i < allProducts.length ; i+=2) {
        const [name, quantity] = [allProducts[i], allProducts[i + 1]]
        const findProduct = productsObj.find(x => x.name === name)
        if (findProduct) findProduct.addQuantity(quantity)
        else productsObj.push(new Product(name, quantity))
    }
    productsObj.find(x => x.details())
}

storeProvision([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
])