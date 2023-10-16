function matchTickets(list) {
    const [budget, category, peopleNumber] = list.map(x => isNaN(x) ? x : Number(x))
    let discount = 1

    if (peopleNumber >= 1 && peopleNumber < 5) {
        discount = 0.25
    } else if (peopleNumber < 10) {
        discount = 0.40
    } else if (peopleNumber < 25) {
        discount = 0.50
    } else if (peopleNumber < 50) {
        discount = 0.60
    } else if (peopleNumber >= 50) {
        discount = 0.75
    }

    // if (category === 'VIP') {
    //     ticketPrice = 499.99
    // } else if (category === 'Normal') {
    //     ticketPrice = 249.99
    // }

    const ticketPrice = category === 'VIP' ? 499.99 : 249.99

    const total = (budget * discount) - ticketPrice * peopleNumber

    console.log(total >= 0 ? `Yes! You have ${total.toFixed(2)} leva left.` :
                             `Not enough money! You need ${Math.abs(total).toFixed(2)} leva.`)
}

matchTickets(['30000', 'VIP', '49'])