function starEnigma(messages) {
    let planets = {attacked: [], destroyed: []};
    messages.shift();

    for (const line of messages) {
        const pattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*?:(?<planetPopulation>\d+)[^@\-!:>]*?!(?<attackType>[AD])![^@\-!:>]*?->(?<soldierCount>\d+)/g;

        let encryptionKey = 0;
        if (line.match(/[star]/gi) !== null) {
            encryptionKey = line.match(/[star]/gi).length;
        }
        const match = pattern.exec(line.split('').map(letter => letter.charCodeAt(0) - encryptionKey).map(code => String.fromCharCode(code)).join(''));
        if (match === null) continue

        const attackType = match.groups.attackType;
        const planetName = match.groups.planetName;

        attackType === 'A' ? planets.attacked.push(planetName) : attackType === 'D' ? planets.destroyed.push(planetName) : null
    }
    planets.attacked.sort((a, b) => a.localeCompare(b));
    planets.destroyed.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${planets.attacked.length}`);
    planets.attacked.forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${planets.destroyed.length}`);
    planets.destroyed.forEach(planet => console.log(`-> ${planet}`));
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])


// function starEnigma(messages) {
//     let planets = {attacked: [], destroyed: []};
//     messages.shift();
//
//     messages.forEach(line => {
//         const pattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*?:(?<planetPopulation>\d+)[^@\-!:>]*?!(?<attackType>[AD])![^@\-!:>]*?->(?<soldierCount>\d+)/g;
//
//         let encryptionKey = 0;
//         if (line.match(/[star]/gi) !== null) {
//             encryptionKey = line.match(/[star]/gi).length;
//         }
//         line = line.split('').map(letter => letter.charCodeAt(0) - encryptionKey);
//         line = line.map(code => String.fromCharCode(code)).join('');
//
//         const match = pattern.exec(line);
//
//         if (match !== null) {
//             const attackType = match.groups.attackType;
//             const planetName = match.groups.planetName;
//
//             switch (attackType) {
//                 case 'A':
//                     planets.attacked.push(planetName);
//                     break;
//                 case 'D':
//                     planets.destroyed.push(planetName);
//                     break;
//             }
//         }
//
//     })
//     planets.attacked.sort((a, b) => a.localeCompare(b));
//     planets.destroyed.sort((a, b) => a.localeCompare(b));
//
//     console.log(`Attacked planets: ${planets.attacked.length}`);
//     planets.attacked.forEach(planet => console.log(`-> ${planet}`));
//
//     console.log(`Destroyed planets: ${planets.destroyed.length}`);
//     planets.destroyed.forEach(planet => console.log(`-> ${planet}`));
//
// }