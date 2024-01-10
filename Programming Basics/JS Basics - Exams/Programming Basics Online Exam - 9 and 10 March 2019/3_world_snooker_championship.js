function worldSnookerChampionship(input) {
    const [event, ticketType, numberTickets, pictureWithTrophy] = input.map(e => isNaN(e) ? e : Number(e))
    let [ticketPrice, pictureWithTrophyPrice] = [0, 40]

    if (ticketType === 'Standard') {
        if (event === 'Quarter final') {
            ticketPrice = 55.50
        } else if (event === 'Semi final') {
            ticketPrice = 75.88
        } else if (event === 'Final') {
            ticketPrice = 110.10
        }
    } else if (ticketType === 'Premium') {
        if (event === 'Quarter final') {
            ticketPrice = 105.20
        } else if (event === 'Semi final') {
            ticketPrice = 125.22
        } else if (event === 'Final') {
            ticketPrice = 160.66
        }
    } else if (ticketType === 'VIP') {
        if (event === 'Quarter final') {
            ticketPrice = 118.90
        } else if (event === 'Semi final') {
            ticketPrice = 300.40
        } else if (event === 'Final') {
            ticketPrice = 400
        }
    }
    let totalSum = ticketPrice * numberTickets

    if (totalSum > 4000) {
        totalSum *= 0.75
        pictureWithTrophyPrice = 0
    } else if (totalSum > 2500) {
        totalSum *= 0.90
    }

    if (pictureWithTrophy === 'Y') {
        totalSum += numberTickets * pictureWithTrophyPrice
    }
    console.log(`${totalSum.toFixed(2)}`)
}

worldSnookerChampionship(['Quarter final', 'Standard', '11', 'N'])