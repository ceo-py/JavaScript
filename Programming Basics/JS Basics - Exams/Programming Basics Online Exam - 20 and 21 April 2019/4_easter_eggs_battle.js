function easterEggsBattle(param) {
    let [player_one_eggs, player_two_eggs, command] = [Number(param.shift()), Number(param.shift()), param.shift()]

    while (command !== 'End') {
        if (command === 'one') {
            player_two_eggs -= 1;
            if (player_two_eggs === 0) {
                console.log(`Player two is out of eggs. Player one has ${player_one_eggs} eggs left.`);
                break;
            }
        } else if (command === 'two') {
            player_one_eggs -= 1;
            if (player_one_eggs === 0) {
                console.log(`Player one is out of eggs. Player two has ${player_two_eggs} eggs left.`);
                break;
            }
        }

        command = param.shift()
    }

    if (command === 'End') {
        console.log(`Player one has ${player_one_eggs} eggs left.`);
        console.log(`Player two has ${player_two_eggs} eggs left.`);
    }
}

easterEggsBattle([])