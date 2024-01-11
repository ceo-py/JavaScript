function pcGameShop(param) {
    const numberSellGames = Number(param.shift());

    let hearthstoneSoldGames = 0;
    let forniteSoldGames = 0;
    let overwatchSoldGames = 0;
    let otherSoldGames = 0;

    for (let i = 0; i < numberSellGames; i++) {
        const gameName = param.shift();

        if (gameName === "Hearthstone") {
            hearthstoneSoldGames += 1;
        } else if (gameName === "Fornite") {
            forniteSoldGames += 1;
        } else if (gameName === "Overwatch") {
            overwatchSoldGames += 1;
        } else {
            otherSoldGames += 1;
        }
    }

    const hearthstonePercentSoldGames = (hearthstoneSoldGames / numberSellGames) * 100;
    const fornitePercentSoldGames = (forniteSoldGames / numberSellGames) * 100;
    const overwatchPercentSoldGames = (overwatchSoldGames / numberSellGames) * 100;
    const otherPercentSoldGames = (otherSoldGames / numberSellGames) * 100;

    console.log(`Hearthstone - ${hearthstonePercentSoldGames.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePercentSoldGames.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercentSoldGames.toFixed(2)}%`);
    console.log(`Others - ${otherPercentSoldGames.toFixed(2)}%`);

}

pcGameShop([])