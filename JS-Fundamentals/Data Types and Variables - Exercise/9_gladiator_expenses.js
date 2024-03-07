
function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    const helmetBroken = Math.floor(lostFights / 2);
    const swordBroken = Math.floor(lostFights / 3);
    const shieldBroken = Math.floor(lostFights / 6);
    const armorBroken = Math.floor(lostFights / 12);

    const total = helmetPrice * helmetBroken +
                  swordPrice * swordBroken +
                  armorPrice * armorBroken +
                  shieldPrice * shieldBroken;

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

// function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
//     let [helmetBroken, swordBroken, shieldBroken, armorBroken] = [0, 0, 0, 0]
//     for (let day = 1; day <= lostFights; day++) {
//         if (day % 2 === 0) helmetBroken++
//         if (day % 3 === 0) swordBroken++
//         if (day % 3 === 0 && day % 2 === 0) {
//             shieldBroken++
//             armorBroken += shieldBroken % 2 === 0 ? 1 : 0
//         }
//     }
//     const total = helmetPrice * helmetBroken + swordPrice * swordBroken + armorBroken * armorPrice + shieldPrice * shieldBroken
//     console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`)
// }

gladiatorExpenses(23,
12.50,
21.50,
40,
200)