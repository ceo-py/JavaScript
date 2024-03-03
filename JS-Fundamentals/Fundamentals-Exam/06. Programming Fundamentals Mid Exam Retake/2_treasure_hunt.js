function treasureHunt(arr) {
    let initialLoot = arr.shift().split("|");

    for (const line of arr) {
        let [command, ...currentCommandArray] = line.split(" ");

        switch (command) {
            case "Loot":
                for (let el of currentCommandArray) {
                    if (!initialLoot.includes(el)) {
                        initialLoot.unshift(el);
                    }
                }

                break;
            case "Drop":
                let startingIndex = Number(currentCommandArray[0]);

                if (startingIndex >= 0 && startingIndex < initialLoot.length) {
                    let oldLoot = initialLoot.splice(startingIndex, 1)
                    initialLoot.push(...oldLoot);
                }

                break;
            case "Steal":
                let index = Number(currentCommandArray);
                let stolenTreasure = initialLoot.slice(-index);
                initialLoot.splice(-index);
                console.log(stolenTreasure.join(', '));

                break;
        }
    }

    let itemSum = initialLoot.reduce((sum, initialTresure) => {
        return sum + initialTresure.length;
    }, 0) / initialLoot.length;


    if (initialLoot.length > 0) {
        console.log(`Average treasure gain: ${itemSum.toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }
}