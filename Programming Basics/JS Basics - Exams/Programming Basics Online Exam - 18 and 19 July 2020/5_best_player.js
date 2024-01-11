function bestPlayer(param) {
    let player = param.shift();
    let playerName = '';
    let playerGoals = 0;
    while (player !== 'END') {
        const goals = Number(param.shift());

        if (goals > playerGoals) {
            playerName = player;
            playerGoals = goals;
        }

        if (goals >= 10) {
            break;
        }

        player = param.shift();
    }

    console.log(`${playerName} is the best player!`);

    if (playerGoals >= 3) {
        console.log(`He has scored ${playerGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${playerGoals} goals.`);
    }

}

bestPlayer([])