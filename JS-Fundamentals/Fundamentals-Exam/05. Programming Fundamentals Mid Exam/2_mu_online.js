function muOnline(input) {
    const dungeonRooms = input.split("|");

    let heroHealth = 100;
    let heroCollectedBitcoins = 0;

    for (let i = 0; i < dungeonRooms.length; i++) {
        const [command, number] = dungeonRooms[i].split(' ').map(x => isNaN(x) ? x : parseInt(x));

        if (command === 'potion') {
            let healed = Math.min(100 - heroHealth, number);
            heroHealth += healed;
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${heroHealth} hp.`);
        } else if (command === 'chest') {
            heroCollectedBitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            heroHealth -= number;
            if (heroHealth > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }
    }

    if (heroHealth > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${heroCollectedBitcoins}`);
        console.log(`Health: ${heroHealth}`);
    }


}
