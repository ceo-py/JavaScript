function typeFruit(fruit) {
    fruit = fruit [0]
    let output = 'unknown'

    if ('banana, apple, kiwi, cherry, lemon, grapes'.includes(fruit)) {
        output = 'fruit'
    } else if ('tomato, cucumber, pepper, carrot'.includes(fruit)) {
        output = 'vegetable'
    }

    console.log(output)
}

typeFruit(["banana"])
