function nameGame(param) {
    let [totalPoints, secondName, totalPointsForName] = [0, 0, 0]
    while (true) {
        const nameOfThePlayer = param.shift();

        if (nameOfThePlayer === "Stop") {
            console.log(`The winner is ${secondName} with ${totalPoints} points!`);
            break;
        } else {
            for (const letter of nameOfThePlayer) {
                const guessesNumber = Number(param.shift());

                if (guessesNumber === letter.charCodeAt(0)) {
                    totalPointsForName += 10;
                } else {
                    totalPointsForName += 2;
                }
            }

            if (totalPointsForName >= totalPoints) {
                totalPoints = totalPointsForName;
                secondName = nameOfThePlayer;
            }

            totalPointsForName = 0;
        }
    }
}

nameGame(['Ivan', 73, 20, 98, 110, 'Ivo', 80, 65, 87, 'Stop'])