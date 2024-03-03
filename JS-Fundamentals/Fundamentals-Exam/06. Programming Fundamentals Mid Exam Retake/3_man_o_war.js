function manOWar(input) {
    const pirateShip = input.shift().split(">").map(Number);
    const warShip = input.shift().split(">").map(Number);
    const maximumHealth = Number(input.shift());
    let dataInfo = input.shift();

    while (dataInfo !== "Retire") {
        if (dataInfo === "Status") {
            const count = pirateShip.filter(section => (section / maximumHealth) * 100 < 20).length;
            console.log(`${count} sections need repair.`);
        } else {
            const [command, ...data] = dataInfo.split(" ");
            if (command === "Fire") {
                const [index, damage] = data.map(Number);
                if (index >= 0 && index < warShip.length) {
                    warShip[index] -= damage;
                    if (warShip[index] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    }
                }
            } else if (command === "Defend") {
                const [startIndex, endIndex, damage] = data.map(Number);
                if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= damage;
                        if (pirateShip[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }
                }
            } else if (command === "Repair") {
                const [index, health] = data.map(Number);
                if (index >= 0 && index < pirateShip.length) {
                    if (pirateShip[index] + health > maximumHealth) {
                        pirateShip[index] = maximumHealth;
                    } else {
                        pirateShip[index] += health;
                    }
                }
            }
        }
        dataInfo = input.shift();
    }

    console.log(`Pirate ship status: ${pirateShip.reduce((acc, curr) => acc + curr, 0)}`);
    console.log(`Warship status: ${warShip.reduce((acc, curr) => acc + curr, 0)}`);

}