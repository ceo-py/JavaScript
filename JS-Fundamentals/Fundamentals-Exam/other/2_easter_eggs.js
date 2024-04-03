function findEggs(text) {
    const eggPattern = /[@#]+([a-z]{3,})[@#]+[^a-zA-Z0-9]*\/+(\d+)\/+/g;
    let match;
    const foundEggs = [];

    while ((match = eggPattern.exec(text)) !== null) {
        const color = match[1];
        const amount = match[2];
        foundEggs.push({color, amount});
    }

    foundEggs.forEach((egg) => {
        console.log(`You found ${egg.amount} ${egg.color} eggs!`);
    });

    if (foundEggs.length === 0) {
        console.log("No valid eggs found.");
    }
}

findEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])
