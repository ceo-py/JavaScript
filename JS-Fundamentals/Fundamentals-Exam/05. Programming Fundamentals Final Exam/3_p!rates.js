function pirates(input) {
    const townsInfo = {};

    const commands = {
        Plunder: (town, people, gold) => {
            townsInfo[town][0] -= people;
            townsInfo[town][1] -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (townsInfo[town][0] <= 0 || townsInfo[town][1] <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete townsInfo[town];
            }
        },
        Prosper: (town, gold) => {
            if (parseInt(gold) < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                townsInfo[town][1] += parseInt(gold);
                console.log(`${gold} gold added to the city treasury. ${town} now has ${townsInfo[town][1]} gold.`);
            }
        }
    }

    let town = input.shift();
    while (town !== "Sail") {
        const [cityName, population, gold] = town.split("||").map(x => isNaN(x) ? x : parseInt(x));
        townsInfo[cityName] = townsInfo[cityName] || [0, 0];
        townsInfo[cityName][0] += population;
        townsInfo[cityName][1] += gold;
        town = input.shift();
    }


    let data = input.shift();
    while (data !== "End") {
        const [command, ...info] = data.split("=>").map(x => isNaN(x) ? x : Number(x));
        commands[command](...info);
        data = input.shift();
    }

    if (Object.keys(townsInfo).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(townsInfo).length} wealthy settlements to go to:`);
        for (const town in townsInfo) {
            console.log(`${town} -> Population: ${townsInfo[town][0]} citizens, Gold: ${townsInfo[town][1]} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }

}