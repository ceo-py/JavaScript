function guineaPig(input) {
    let [foodKgs, hayKgs, coverKgs, guineaWeightKgs] = input.map(x => Number(x) * 1000);

    const cover = guineaWeightKgs / 3;
    let feedEaten = 0;

    for (let day = 1; day <= 30; day++) {
        feedEaten += 300;
        foodKgs -= 300;

        if (day % 2 === 0) {
            const hay = foodKgs * 0.05;
            hayKgs -= hay;
            feedEaten += hay;
        }

        if (day % 3 === 0) {
            coverKgs -= cover;
        }
    }

    if (foodKgs > 0 && hayKgs > 0 && coverKgs > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodKgs / 1000).toFixed(2)}, Hay: ${(hayKgs / 1000).toFixed(2)}, Cover: ${(coverKgs / 1000).toFixed(2)}.`);
    } else {
        console.log("Merry must go to the pet store!");
    }

}