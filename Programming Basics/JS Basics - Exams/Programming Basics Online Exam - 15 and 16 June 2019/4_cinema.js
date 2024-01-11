function cinema(param) {
    const capacity_hall = Number(param.shift());

    const ticket_price = 5;
    let total_price_tickets = 0;
    let total_tickets_sell = 0;
    let tickets_left = capacity_hall;

    while (true) {
        const people_in_cinema = param.shift();
        total_tickets_sell += 1;

        if (people_in_cinema === "Movie time!") {
            console.log(`There are ${tickets_left} seats left in the cinema.\nCinema income - ${total_price_tickets} lv.`);
            break;
        }

        const peopleCount = parseInt(people_in_cinema);
        tickets_left -= peopleCount;

        if (tickets_left < 0) {
            console.log(`The cinema is full.\nCinema income - ${total_price_tickets} lv.`);
            break;
        }

        if (peopleCount % 3 === 0) {
            total_price_tickets += (peopleCount * ticket_price) - 5;
        } else {
            total_price_tickets += peopleCount * ticket_price;
        }
    }
}

cinema([])