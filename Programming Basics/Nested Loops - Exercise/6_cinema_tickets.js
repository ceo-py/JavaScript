function cinemaCapacity(array) {
    let [i, movie, capacity, ticket, studentTicket, standardTicket, kidTicket] = [0, array[0], 0, 0, 0, 0, 0]

    while (movie !== 'Finish') {
        i += 1
        capacity = Number(array[i])
        let [currentCapacity] = [0]
        i += 1

        while (capacity !== currentCapacity) {

            ticket = array[i]
            if (ticket === 'End') {
                break
            }

            currentCapacity += 1
            i += 1

            if (ticket === 'student') {
                studentTicket += 1
            } else if (ticket === 'standard') {
                standardTicket += 1
            } else if (ticket === 'kid') {
                kidTicket += 1
            }
        }
        console.log(`${movie} - ${((currentCapacity / capacity) * 100).toFixed(2)}% full.`)
        movie = array[i]

        if (movie === 'Finish') {
            break
        }
        i += 1
        movie = array[i]
    }
    let totalTickets = studentTicket + standardTicket + kidTicket
    console.log(`Total tickets: ${totalTickets + kidTicket}`)
    console.log(`${((studentTicket / totalTickets) * 100).toFixed(2)}% student tickets.`)
    console.log(`${((standardTicket / totalTickets) * 100).toFixed(2)}% standard tickets.`)
    console.log(`${((kidTicket / totalTickets) * 100).toFixed(2)}% kids tickets.`)
}


cinemaCapacity(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])


