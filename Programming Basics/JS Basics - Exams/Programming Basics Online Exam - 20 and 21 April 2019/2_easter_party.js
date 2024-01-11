function easterParty(param) {
    const [number_guests, reservation_one_person, budget] = param.map(Number)

    const cake_price = budget * 0.10;
    let discount = 0;

    if (number_guests < 10) {
        discount = 1;
    } else if (10 <= number_guests && number_guests <= 15) {
        discount = 0.85;
    } else if (number_guests <= 20) {
        discount = 0.80;
    } else if (number_guests > 20) {
        discount = 0.75;
    }

    const expenses = ((number_guests * reservation_one_person) * discount) + cake_price;
    const total_sum = budget - expenses;

    if (total_sum >= 0) {
        console.log(`It is party time! ${total_sum.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${Math.abs(total_sum).toFixed(2)} leva needed.`);
    }
}

easterParty([])