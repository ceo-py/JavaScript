function footballTournament(param) {
    const [teamName, numberPlayedGames] = [param.shift(), Number(param.shift())];

    let wins = 0;
    let draws = 0;
    let losses = 0;
    let totalPoints = 0;

    if (numberPlayedGames <= 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
        return;
    }

    for (let game = 0; game < numberPlayedGames; game++) {
        const result = param.shift();
        if (result === "W") {
            wins += 1;
            totalPoints += 3;
        } else if (result === "D") {
            draws += 1;
            totalPoints += 1;
        } else if (result === "L") {
            losses += 1;
        }
    }

    const winPercentage = (wins / numberPlayedGames) * 100;
    const numberOfWinPoints = wins * 3;

    console.log(`${teamName} has won ${totalPoints} points during this season.`);
    console.log("Total stats:");
    console.log(`## W: ${wins}`);
    console.log(`## D: ${draws}`);
    console.log(`## L: ${losses}`);
    console.log(`Win rate: ${winPercentage.toFixed(2)}%`);

}

footballTournament([])