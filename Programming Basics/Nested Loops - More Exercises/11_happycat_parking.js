function happyCatParking(param) {
    const [days, hoursPerDay] = param.map(Number)
    let [dayTaxes, dayTax] = [0, 0]
    for (let day = 1; day <= days; day++) {
        dayTax = 0
        for (let hours = 1; hours <= hoursPerDay; hours++) {
            if (day % 2 === 0 && hours % 2 !== 0) {
                dayTaxes += 2.50
                dayTax += 2.50
            } else if (day % 2 !== 0 && hours % 2 === 0) {
                dayTaxes += 1.25
                dayTax += 1.25
            } else {
                dayTaxes += 1
                dayTax += 1
            }
        }
        console.log(`Day: ${day} - ${dayTax.toFixed(2)} leva`)
    }
    console.log(`Total: ${dayTaxes.toFixed(2)} leva`)
}

happyCatParking([2, 5])