function vacation(...input) {
    const [people, groupType, day] = input.map(x => isNaN(x) ? x : Number(x))
    const prices = {
        Students: {
            Friday: 8.45,
            Saturday: 9.80,
            Sunday: 10.46,
            price: (people, day) => {
                return people * prices.Students[day] * (people >= 30 ? 0.85 : 1);
            }
        },
        Business: {
            Friday: 10.90,
            Saturday: 15.60,
            Sunday: 16,
            price: (people, day) => {
                return (people >= 100? people - 10: people) * prices.Business[day]
            }
        },
        Regular: {
            Friday: 15,
            Saturday: 20,
            Sunday: 22.50,
            price: (people, day) => {
                return people * prices.Regular[day] * (people >= 10 && people <= 20 ? 0.95: 1)
            }
        },
    }

    console.log(`Total price: ${prices[groupType].price(people, day).toFixed(2)}`)
}

vacation([30,
    "Students",
    "Sunday"])