function vacationCalculator(array) {
    const [budget, season] = array.map(x => isNaN(x) ? x : Number(x))
    let [destination, moneyLeft] = ['', 0]
    let stay = season === 'summer' ? "Camp" : "Hotel"

    if (budget <= 100) {
        moneyLeft = season === 'summer' ? budget * 0.30 : budget * 0.70
        destination = 'Bulgaria'
    } else if (budget <= 1000) {
        moneyLeft = season === 'summer' ? budget * 0.40 : budget * 0.80
        destination = 'Balkans'
    } else if (budget > 1000) {
        stay = "Hotel"
        moneyLeft = budget * 0.90
        destination = 'Europe'
    }

    console.log(`Somewhere in ${destination}\n${stay} - ${moneyLeft.toFixed(2)}`)
}

vacationCalculator(["1500", "summer"])
