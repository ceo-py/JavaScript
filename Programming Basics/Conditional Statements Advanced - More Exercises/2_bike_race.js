function bikeRace(strings) {
    // const [juniors, seniors, raceType] = [Number(strings[0]), Number(strings[1]), strings[2]]
    const [juniors, seniors, raceType] = strings.map(x => isNaN(x) ? x : Number(x))
    let [juniorsTax, seniorsTax, expenses] = [0, 0, 0.95]

    if (raceType === 'trail') {
        juniorsTax = 5.50
        seniorsTax = 7
    } else if (raceType === 'cross-country') {
        juniorsTax = 8
        seniorsTax = 9.50
        if (juniors + seniors >= 50) {
            juniorsTax *= 0.75
            seniorsTax *= 0.75
        }
    } else if (raceType === 'downhill') {
        juniorsTax = 12.25
        seniorsTax = 13.75
    } else if (raceType === 'road') {
        juniorsTax = 20
        seniorsTax = 21.50
    }

    let total_sum = ((juniors * juniorsTax) + (seniors * seniorsTax)) * expenses
    console.log(total_sum.toFixed(2))

}

bikeRace(['10',
    '20',
    'trail'])