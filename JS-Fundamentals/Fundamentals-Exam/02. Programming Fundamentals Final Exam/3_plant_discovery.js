function plantDiscovery(input) {
    const [numberOfPlants, plantsInfo] = [parseInt(input.shift()), {}];

    for (let plant = 0; plant < numberOfPlants; plant++) {
        const [plantName, rarity] = input.shift().split("<->");
        plantsInfo[plantName] = [rarity, []];
    }

    function checkPlantExist(plant) {
        if (plant in plantsInfo) {
            return true;
        }
        console.log("error");
    }

    function rate(info) {
        const [plant, rating] = info.split(" - ");
        plantsInfo[plant][1].push(parseInt(rating));
    }

    function update(info) {
        const [plant, newRarity] = info.split(" - ");
        plantsInfo[plant][0] = newRarity;
    }

    function reset(info) {
        const plant = info;
        plantsInfo[plant][1] = [];
    }

    const commandFunc = {
        "Rate": rate,
        "Update": update,
        "Reset": reset
    };

    let command = input.shift();
    while (command !== "Exhibition") {
        const [commandType, info] = command.split(": ");
        if (checkPlantExist(info.split(" - ")[0])) {
            commandFunc[commandType](info);
        }
        command = input.shift();
    }

    console.log("Plants for the exhibition:");
    for (let plant in plantsInfo) {
        let averageRating = 0;
        if (plantsInfo[plant][1].length !== 0) {
            averageRating = plantsInfo[plant][1].reduce((a, b) => a + b, 0) / plantsInfo[plant][1].length;
        }
        console.log(`- ${plant}; Rarity: ${plantsInfo[plant][0]}; Rating: ${averageRating.toFixed(2)}`);
    }

}

plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])