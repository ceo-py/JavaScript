function basketballTournament(param) {
    let [tournamentName, wins, loses] = [param.shift(), 0, 0]

    while (tournamentName !== 'End of tournaments') {
        const numberOfGames = Number(param.shift())

        for (let game = 1; game <= numberOfGames; game++) {
            const homeTeam = Number(param.shift())
            const awayTeam = Number(param.shift())
            const difference = Math.abs(homeTeam - awayTeam)

            let result = null
            if (homeTeam > awayTeam){
                wins++
                result = 'win'
            }
            else if (homeTeam < awayTeam){
                loses++
                result = 'lost'
            }
            console.log(`Game ${game} of tournament ${tournamentName}: ${result} with ${difference} points.`)
        }
        tournamentName = param.shift()
    }
    console.log(`${((wins / (wins + loses)) * 100).toFixed(2)}% matches win`)
    console.log(`${((loses / (wins + loses)) * 100).toFixed(2)}% matches lost`)
}

basketballTournament([])