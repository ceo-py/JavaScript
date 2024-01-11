function familityTrip(param) {
    let [budget, number_sleeps, price_per_sleep, other_expenses_percentage] = param.map(Number);

    let other_expenses = (other_expenses_percentage / 100) * budget;

    if (number_sleeps > 7) {
        price_per_sleep *= 0.95;
    }

    const total_price = price_per_sleep * number_sleeps;
    const total = other_expenses + total_price;
    const money_left = budget - total;

    if (money_left >= 0) {
        console.log(`Ivanovi will be left with ${money_left.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${Math.abs(money_left).toFixed(2)} leva needed.`);
    }
}

familityTrip([])