function validateInputs(inputs) {
    const inputCount = Number(inputs.shift());
    const bossPattern = /^\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#$/;

    for (let i = 0; i < inputCount; i++) {
        const input = inputs[i];
        const match = input.match(bossPattern);

        if (match) {
            const bossName = match[1];
            const title = match[2];
            console.log(`${bossName}, The ${title}`);
            console.log(`>> Strength: ${bossName.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log("Access denied!");
        }
    }
}

validateInputs([
    "3",
    "|PETER|:#Lead architect#",
    "|GEORGE|:#High Overseer#",
    "|ALEX|:#Assistant Game Developer#",
]);
