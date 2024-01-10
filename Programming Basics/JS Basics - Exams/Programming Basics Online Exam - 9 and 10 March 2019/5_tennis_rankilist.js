function tennisRankList(param) {
    const [NumberTournaments, startingPoints] = [Number(param.shift()), Number(param.shift())]
    let [tournamentPoints, wins] = [0, 0]

    for (let tournament = 0; tournament < NumberTournaments; tournament++) {
        const tournamentResult = param.shift()

        if (tournamentResult === 'W') {
            tournamentPoints += 2000
            wins++
        } else if (tournamentResult === 'F') tournamentPoints += 1200
        else if (tournamentResult === 'SF') tournamentPoints += 720
    }
    console.log(`Final points: ${startingPoints + tournamentPoints}`)
    console.log(`Average points: ${Math.floor(tournamentPoints / NumberTournaments)}`)
    console.log(`${((wins / NumberTournaments) * 100).toFixed(2)}%`)
}

tennisRankList([])