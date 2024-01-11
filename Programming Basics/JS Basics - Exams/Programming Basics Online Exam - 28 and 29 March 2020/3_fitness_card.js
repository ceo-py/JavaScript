function fitnessCard(param) {
    const [budget, sex, age, typeSport] = param.map(x => isNaN(x)? x: Number(x));

    let fitnessCardPrice = 0;

    if (sex === "f") {
        if (typeSport === "Gym") {
            fitnessCardPrice = 35;
        } else if (typeSport === "Boxing") {
            fitnessCardPrice = 37;
        } else if (typeSport === "Yoga") {
            fitnessCardPrice = 42;
        } else if (typeSport === "Zumba") {
            fitnessCardPrice = 31;
        } else if (typeSport === "Dances") {
            fitnessCardPrice = 53;
        } else if (typeSport === "Pilates") {
            fitnessCardPrice = 37;
        }
    } else if (sex === "m") {
        if (typeSport === "Gym") {
            fitnessCardPrice = 42;
        } else if (typeSport === "Boxing") {
            fitnessCardPrice = 41;
        } else if (typeSport === "Yoga") {
            fitnessCardPrice = 45;
        } else if (typeSport === "Zumba") {
            fitnessCardPrice = 34;
        } else if (typeSport === "Dances") {
            fitnessCardPrice = 51;
        } else if (typeSport === "Pilates") {
            fitnessCardPrice = 39;
        }
    }

    if (age <= 19) {
        fitnessCardPrice *= 0.80;
    }

    if (fitnessCardPrice > budget) {
        const difference = Math.abs(fitnessCardPrice - budget);
        console.log(`You don't have enough money! You need $${difference.toFixed(2)} more.`);
    } else {
        console.log(`You purchased a 1 month pass for ${typeSport}.`);
    }

}

fitnessCard([])