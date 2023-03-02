function howMuchCost(array) {
    let [product, town, quantity] = array.map(x => isNaN(x) ? x : Number(x))
    let productPrice = 0

    if (town === 'Sofia') {
        productPrice = 1.60

        if (product === 'coffee') {
            productPrice = 0.50
        } else if (product === 'water') {
            productPrice = 0.80
        } else if (product === 'beer') {
            productPrice = 1.20
        } else if (product === 'sweets') {
            productPrice = 1.45
        }
    } else if (town === 'Plovdiv') {
        productPrice = 1.50

        if (product === 'coffee') {
            productPrice = 0.40
        } else if (product === 'water') {
            productPrice = 0.70
        } else if (product === 'beer') {
            productPrice = 1.15
        } else if (product === 'sweets') {
            productPrice = 1.30
        }
    } else if (town === 'Varna') {
        productPrice = 1.55

        if (product === 'coffee') {
            productPrice = 0.45
        } else if (product === 'water') {
            productPrice = 0.70
        } else if (product === 'beer') {
            productPrice = 1.10
        } else if (product === 'sweets') {
            productPrice = 1.35
        }
    }
    productPrice *= quantity

    console.log(productPrice)
}

howMuchCost(["coffee",
"Varna",
"2"])
