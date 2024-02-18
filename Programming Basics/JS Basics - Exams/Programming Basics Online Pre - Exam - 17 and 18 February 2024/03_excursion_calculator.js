function excursionCalculator(input) {
    let [countPeople, season, discount, price] = [Number(input[0]), input[1], 1, 0]
    switch (season) {
        case "spring":
            if (countPeople <= 5) {
                price = 50
            } else price = 48
            break
        case "summer":
            if (countPeople <= 5) {
                price = 48.5
            } else price = 45
            discount = 0.85
            break
        case "autumn":
            if (countPeople <= 5) {
                price = 60
            } else price = 49.5
            break
        case "winter":
            if (countPeople <= 5) {
                price = 86
            } else price = 85
            discount = 1.08
            break
    }
    console.log(`${(countPeople * price * discount).toFixed(2)} leva.`);
}