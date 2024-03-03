function counterStrike(input) {
    let [initialEnergy, distance, wins] = [parseInt(input.shift()), input.shift(), 0];

    while (distance !== "End of battle") {
        distance = parseInt(distance);
        initialEnergy -= distance;

        if (initialEnergy < 0) {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${initialEnergy + distance} energy`);
            break;
        }

        wins++;
        if (wins % 3 === 0) {
            initialEnergy += wins;
        }

        distance = input.shift();
    }

    if (distance === "End of battle") {
        console.log(`Won battles: ${wins}. Energy left: ${initialEnergy}`);
    }

}