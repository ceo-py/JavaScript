function calorieObject(input) {
    const foodCatalog = {}
    for (let i = 0; i < input.length; i += 2) {
        const [name, calories] = [input[i], input[i + 1]]
        foodCatalog[name] = Number(calories)
    }
    console.log(foodCatalog)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])