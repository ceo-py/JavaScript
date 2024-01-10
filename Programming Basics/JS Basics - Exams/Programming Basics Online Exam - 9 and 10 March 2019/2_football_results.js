function footballResults(input) {
    let [wins, loses, draws] = [0, 0, 0]
    for (const score of input) {
        const [homeTeam, awayTeam] = score.split(':').map(Number)
        if (homeTeam > awayTeam) wins ++
        else if (homeTeam < awayTeam) loses ++
        else if (homeTeam === awayTeam) draws ++
    }
    console.log(`Team won ${wins} games.`)
    console.log(`Team lost ${loses} games.`)
    console.log(`Drawn games: ${draws}`)
}

footballResults(['3:1', '0:2', '0:0'])