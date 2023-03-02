function movieTicketPrice(day) {
    day = day[0]
    let output = 16

    if ('Monday, Tuesday, Friday'.includes(day)) {
        output = 12
    } else if ('Wednesday, Thursday'.includes(day)) {
        output = 14
    }

    console.log(output)
}

movieTicketPrice(["Monday"])
