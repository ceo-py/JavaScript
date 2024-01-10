function gymnastics(input) {
    const [country, apparatus] = input.map(e => isNaN(e) ? e : Number(e))
    let [difficulty, turn] = [0, 0]

    if (apparatus === 'ribbon') {
        if (country === 'Russia') {
            difficulty = 9.100
            turn = 9.400
        } else if (country === 'Bulgaria') {
            difficulty = 9.600
            turn = 9.400
        } else if (country === 'Italy') {
            difficulty = 9.200
            turn = 9.500
        }
    } else if (apparatus === 'hoop') {
        if (country === 'Russia') {
            difficulty = 9.300
            turn = 9.800
        } else if (country === 'Bulgaria') {
            difficulty = 9.550
            turn = 9.750
        } else if (country === 'Italy') {
            difficulty = 9.450
            turn = 9.350
        }
    } else if (apparatus === 'rope') {
        if (country === 'Russia') {
            difficulty = 9.600
            turn = 9.000
        } else if (country === 'Bulgaria') {
            difficulty = 9.500
            turn = 9.400
        } else if (country === 'Italy') {
            difficulty = 9.700
            turn = 9.150
        }
    }
    const totalScore = difficulty + turn
    const differenceToMaxScore = 20 - totalScore
    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${apparatus}.`)
    console.log(`${((differenceToMaxScore / 20) * 100).toFixed(2)}%`)
}

gymnastics(['Bulgaria', 'ribbon'])