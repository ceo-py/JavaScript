function club(param) {
    const targetedProfit = Number(param.shift())
    let cocktailsProfit = 0;

    while (cocktailsProfit < targetedProfit) {
        const command = param.shift();
        if (command === "Party!") {
            const diff = Math.abs(targetedProfit - cocktailsProfit);
            console.log(`We need ${diff.toFixed(2)} leva more.`);
            break;
        }

        const cocktailsNumber = Number(param.shift());
        const lenNN = command.length;

        let currentCocktailPrice = lenNN * cocktailsNumber;
        if (currentCocktailPrice % 2 === 1) {
            currentCocktailPrice *= 0.75;
        }

        cocktailsProfit += currentCocktailPrice;
    }

    if (cocktailsProfit >= targetedProfit) {
        console.log('Target acquired.');
    }

    console.log(`Club income - ${cocktailsProfit.toFixed(2)} leva.`);

}

club([])