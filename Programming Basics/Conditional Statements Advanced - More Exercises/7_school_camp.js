function schoolCamp(strings) {
    const [season, groupType, students, nights] = strings.map(x => isNaN(x) ? x : Number(x))
    let [sportType, price, discount] = [null, 0, 1]

    if (groupType === 'girls') {
        if (season === 'Winter') [sportType = 'Gymnastics', price = 9.60]
        else if (season === 'Spring') [sportType = 'Athletics', price = 7.20]
        else if (season === 'Summer') [sportType = 'Volleyball', price = 15]
    } else if (groupType === 'boys') {
        if (season === 'Winter') [sportType = 'Judo', price = 9.60]
        else if (season === 'Spring') [sportType = 'Tennis', price = 7.20]
        else if (season === 'Summer') [sportType = 'Football', price = 15]
    } else {
        if (season === 'Winter') [sportType = 'Ski', price = 10]
        else if (season === 'Spring') [sportType = 'Cycling', price = 9.50]
        else if (season === 'Summer') [sportType = 'Swimming', price = 20]
    }
    if (students < 10) discount = 1
    else if (students < 20) discount = 0.95
    else if (students < 50) discount = 0.85
    else if (students >= 50) discount = 0.50
    price = (price * students * nights) * discount
    console.log(`${sportType} ${price.toFixed(2)} lv.`)
}

schoolCamp([
    'Spring',
    'girls',
    '20',
    '7'
])