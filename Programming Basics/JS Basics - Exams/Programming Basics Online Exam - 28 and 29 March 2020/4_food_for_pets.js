function foorForPets(param) {
    const [numberDays, totalFood] = [Number(param.shift()), Number(param.shift())];

    let biscuits = 0;
    let eatFoodDog = 0;
    let eatFoodCat = 0;

    for (let day = 1; day <= numberDays; day++) {
        const currentDogFood = Number(param.shift());
        const currentCatFood = Number(param.shift());
        eatFoodDog += currentDogFood;
        eatFoodCat += currentCatFood;

        if (day % 3 === 0) {
            biscuits += (currentDogFood + currentCatFood) * 0.10;
        }
    }

    const foodForAllDays = eatFoodDog + eatFoodCat;
    const percentFood = (foodForAllDays / totalFood) * 100;
    const percentDogFood = (eatFoodDog / foodForAllDays) * 100;
    const percentCatFood = (eatFoodCat / foodForAllDays) * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${percentFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCatFood.toFixed(2)}% eaten from the cat.`);

}

foorForPets([])