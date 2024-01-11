function tournamentOfChristmas(param) {
    let tournamentDays = Number(param.shift());
    let totalWins = 0;
    let totalMoney = 0;

    for (let day = 0; day < tournamentDays; day++) {
        let currentDayWins = 0;
        let currentDayMoney = 0;

        while (true) {
            let sport = param.shift();
            if (sport === "Finish") {
                totalWins += currentDayWins;
                if (currentDayWins > 0) {
                    currentDayMoney *= 1.10;
                }
                totalMoney += currentDayMoney;
                break;
            }

            let gameOutput = param.shift();

            if (gameOutput === "win") {
                currentDayWins += 1;
                currentDayMoney += 20;
            } else if (gameOutput === "lose") {
                currentDayWins -= 1;
            }
        }
    }

    if (totalWins > 0) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }

}

tournamentOfChristmas([])