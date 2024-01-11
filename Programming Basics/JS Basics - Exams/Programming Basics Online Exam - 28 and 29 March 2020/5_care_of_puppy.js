function careOfPuppy(param) {
    let kgDogFood = Number(param.shift());
    kgDogFood *= 1000;

    let eatenFoodPerDay = param.shift();

    while (eatenFoodPerDay !== "Adopted") {
        const eatenFood = parseInt(eatenFoodPerDay);
        kgDogFood -= eatenFood;
        eatenFoodPerDay = param.shift();
    }

    if (kgDogFood >= 0) {
        console.log(`Food is enough! Leftovers: ${kgDogFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(kgDogFood)} grams more.`);
    }

}

careOfPuppy([])