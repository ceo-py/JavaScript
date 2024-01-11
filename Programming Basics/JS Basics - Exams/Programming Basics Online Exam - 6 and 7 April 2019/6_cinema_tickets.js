function movieTickets(param) {
    let [movie, student, standard, kid] = [param.shift(), 0, 0, 0]

    while (movie !== 'Finish') {
        let freeSalonSpots = Number(param.shift())
        const totalSpots = freeSalonSpots

        while (freeSalonSpots > 0) {
            const ticketType = param.shift()

            if (ticketType === 'End') {
                break
            }
            freeSalonSpots--

            if (ticketType === 'standard') {
                standard++
            } else if (ticketType === 'student') {
                student++
            } else if (ticketType === 'kid') {
                kid++
            }
        }
        console.log(`${movie} - ${Math.abs(((freeSalonSpots / totalSpots) * 100 - 100)).toFixed(2)}% full.`)
        movie = param.shift()
    }
    const totalTickets = student + standard + kid
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standard / totalTickets * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kid / totalTickets * 100).toFixed(2)}% kids tickets.`)
}

movieTickets([])