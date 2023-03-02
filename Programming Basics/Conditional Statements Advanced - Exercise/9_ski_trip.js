function hotelReservationCost(array) {
    let [discount, price, onePerson, apartment, presidentApartment] = [1, 0, 18, 25, 35]
    let [daysToStay, accommodateType, score] = array.map(x => isNaN(x) ? x : Number(x))

    daysToStay -= 1

    if (accommodateType === 'room for one person') {
        price = onePerson * daysToStay
    } else if (accommodateType === 'apartment') {
        price = apartment * daysToStay

        if (daysToStay <= 15) {
            discount = 0.65
        } else if (daysToStay < 10) {
            discount = 0.70
        } else if (daysToStay > 15) {
            discount = 0.50
        }
    } else if (accommodateType === 'president apartment') {
        price = presidentApartment * daysToStay

        if (daysToStay <= 15) {
            discount = 0.85
        } else if (daysToStay < 10) {
            discount = 0.90
        } else if (daysToStay > 15) {
            discount = 0.80
        }
    }

    price *= discount

    if (score === 'positive') {
        price *= 1.25
    } else if (score === 'negative') {
        price *= 0.90
    }

    console.log(price.toFixed(2))
}

hotelReservationCost(["30",
    "president apartment",
    "negative"])
