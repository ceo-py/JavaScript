function calculateTransportCost(input) {
    const [km, type] = input.map(x => isNaN(x) ? x : Number(x))

    let total = 0

    if (km < 20) {
        if (type === 'day') {
            total = 0.70 + km * 0.79
        } else {
            total = 0.70 + km * 0.90
        }
    } else if (km < 100) {
        total = km * 0.09
    } else if (km >= 100) {
        total = km * 0.06
    }
    console.log(total.toFixed(2))
}

calculateTransportCost(['5', 'day'])