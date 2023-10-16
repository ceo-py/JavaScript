function flowers(param) {
    // const [chrysanthemums, rose, tulips, season, holiday] = [Number(param[0]), Number(param[1]), Number(param[2]), param[3], param[4]]
    const [chrysanthemums, rose, tulips, season, holiday] = param.map(x => isNaN(x) ? x : Number(x))
    let [chrysanthemumsPrice, rosePrice, tulipsPrice, totalSUm, decoration] = [0, 0, 0, 0, 2]

    if ('Spring, Summer'.includes(season)) {
        chrysanthemumsPrice = 2
        rosePrice = 4.10
        tulipsPrice = 2.50
    } else if ('Autumn, Winter'.includes(season)) {
        chrysanthemumsPrice = 3.75
        rosePrice = 4.50
        tulipsPrice = 4.15
    }
    totalSUm = chrysanthemumsPrice * chrysanthemums + rosePrice * rose + tulipsPrice * tulips
    if (holiday === 'Y') totalSUm *= 1.15

    if (tulips > 7 && season === 'Spring') totalSUm *= 0.95
    if (rose >= 10 && season === 'Winter') totalSUm *= 0.90
    if (tulips + rose + chrysanthemums > 20 ) totalSUm *= 0.80

    totalSUm += decoration
    console.log(totalSUm.toFixed(2))
}

flowers(['3',
    '10',
    '9',
    'Winter',
    'N'])