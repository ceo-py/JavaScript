function truckDriver(param) {
    const [season, kilometers] = param.map(x => isNaN(x) ? x : Number(x))
    let [price, taxes, seasonLen] = [0, 0.90, 4]

    if (kilometers <= 5000) {
        if ('Spring, Autumn'.includes(season)) price = 0.75
        else if (season === 'Summer') price = 0.90
        else if (season === 'Winter') price = 1.05
    } else if (kilometers <= 10000) {
        if ('Spring, Autumn'.includes(season)) price = 0.95
        else if (season === 'Summer') price = 1.10
        else if (season === 'Winter') price = 1.25
    } else price = 1.45

    price = ((price * kilometers) * seasonLen) * taxes
    console.log(price.toFixed(2))
}

truckDriver([
    'Autumn',
    '8600'
])