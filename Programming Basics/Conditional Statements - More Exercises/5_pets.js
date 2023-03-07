function calculateFoodForPets(input) {
    const [number_days, left_foot_inkg, food_for_dog_per_kg, food_for_cat_per_kg, food_for_turtle_per_grams] = input.map(x => Number(x))

    let dog_food_needed = number_days * food_for_dog_per_kg;
    let cat_food_needed = number_days * food_for_cat_per_kg;
    let turtle_food_needed = (number_days * food_for_turtle_per_grams) / 1000;

    let total_food = dog_food_needed + cat_food_needed + turtle_food_needed;

    let food_left = left_foot_inkg - total_food;

    if (total_food <= left_foot_inkg) {
        console.log(`${Math.floor(food_left)} kilos of food left.`)
        ;
    } else {
        total_food = total_food - left_foot_inkg;
        console.log(`${Math.ceil(total_food)} more kilos of food are needed.`)
        ;
    }
}

calculateFoodForPets(['2', '10', '1', '1', '1200'])