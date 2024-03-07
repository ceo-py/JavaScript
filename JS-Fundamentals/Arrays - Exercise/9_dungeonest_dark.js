function dungeonestDark(rooms) {
    let [health, coins, alive] = [100, 0, true]
    for (const [roomNumber, room] of rooms[0].split('|').entries()) {
        let [value, number] = room.split(' ').map(x => isNaN(x) ? x : Number(x))
        if (value === 'potion') {
            if (number + health > 100) number = 100 - health
            health += number
            console.log(`You healed for ${number} hp.`)
            console.log(`Current health: ${health} hp.`)
        } else if (value === 'chest') {
            coins += number
            console.log(`You found ${number} coins.`)
        } else {
            health -= number
            if (health <= 0) {
                console.log(`You died! Killed by ${value}.`)
                console.log(`Best room: ${roomNumber + 1}`)
                alive = false
                break
            }
            console.log(`You slayed ${value}.`)
        }
    }
    if (alive) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`)
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])



// function dungeonestDark(rooms) {
//     let [health, coins, alive] = [100, 0, true];
//     for (const [roomNumber, room] of rooms[0].split('|').entries()) {
//         let [value, number] = room.split(' ').map(x => isNaN(x) ? x : Number(x));
//         if (value === 'potion') {
//             if (number + health > 100) number = 100 - health;
//             health += number;
//             console.log(`You healed for ${number} hp.`);
//             console.log(`Current health: ${health} hp.`);
//         } else if (value === 'chest') {
//             coins += number;
//             console.log(`You found ${number} coins.`);
//         } else {
//             health -= number;
//             if (health <= 0) {
//                 console.log(`You died! Killed by ${value}.`);
//                 console.log(`Best room: ${roomNumber + 1}`);
//                 alive = false;
//                 break;
//             }
//             console.log(`You slayed ${value}.`);
//         }
//     }
//     if (alive) {
//         console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
//     }
// }