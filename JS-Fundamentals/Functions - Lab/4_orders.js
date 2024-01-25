function orders(product, totalOrders) {
    const coffeShop = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00,
    }
    console.log(`${(coffeShop[product] * totalOrders).toFixed(2)}`)
}

orders('water', 5)