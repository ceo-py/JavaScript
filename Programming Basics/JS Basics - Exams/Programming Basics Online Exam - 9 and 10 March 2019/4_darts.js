function darts(param) {
    let [playerName, field, points, winner, playerStartingPoints, successfulShots, unsuccessfulShots] = [param.shift(), param.shift(), 0, false, 301, 0, 0]

    while (field !== 'Retire') {
        points = Number(param.shift())

        if (field === 'Double') points *= 2
        else if (field === 'Triple') points *= 3

        if (points <= playerStartingPoints) {
            successfulShots++
            playerStartingPoints -= points

            if (playerStartingPoints === 0) {
                winner = !winner
                break
            }
        } else {
            unsuccessfulShots++
        }
        field = param.shift()
    }

    if (winner) {
        console.log(`${playerName} won the leg with ${successfulShots} shots.`)
    } else {
        console.log(`${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`)
    }
}

darts(['Rob Cross',
    'Triple', 20,
    'Triple', 20,
    'Triple', 20,
    'Double', 20,
    'Triple', 20,
    'Double', 5,
    'Triple', 10,
    'Double', 6,
    'Retire'
    ])