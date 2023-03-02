function clothSuggestion(array) {
    const [degree, dayTime] = array.map(x => isNaN(x) ? x : Number(x))

    let [outfit, shoes] = ['', '']

    if (dayTime === 'Morning') {
        [outfit, shoes] = ['T-Shirt', 'Sandals']

        if (degree >= 10 && degree <= 18) {
            [outfit, shoes] = ['Sweatshirt', 'Sneakers']
        } else if (degree <= 24) {
            [outfit, shoes] = ['Shirt', 'Moccasins']
        }
    } else if (dayTime === 'Afternoon') {
        [outfit, shoes] = ['Swim Suit', 'Barefoot']

        if (degree >= 10 && degree <= 18) {
            [outfit, shoes] = ['Shirt', 'Moccasins']
        } else if (degree <= 24) {
            [outfit, shoes] = ['T-Shirt', 'Sandals']
        }
    } else if (dayTime === 'Evening') {
        [outfit, shoes] = ['Shirt', 'Moccasins']

        if (degree >= 10 && degree <= 18) {
            [outfit, shoes] = ['Shirt', 'Moccasins']
        } else if (degree <= 24) {
            [outfit, shoes] = ['Shirt', 'Moccasins']
        }
    }

    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`)
}

clothSuggestion(["16",
    "Morning"])
