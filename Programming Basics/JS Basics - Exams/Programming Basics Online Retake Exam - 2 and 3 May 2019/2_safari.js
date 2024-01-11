function safari(param) {
    const [budget, fuel_needed, day_of_the_week] = param.map(x => isNaN(x)? x: Number(x))

    const fuel_price = fuel_needed * 2.10;
    let total_price = fuel_price + 100;

    if (day_of_the_week === "Saturday") {
        total_price *= 0.90;
    } else if (day_of_the_week === "Sunday") {
        total_price *= 0.80;
    }

    const money_left = Math.abs(budget - total_price);

    if (budget >= total_price) {
        console.log(`Safari time! Money left: ${money_left.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${money_left.toFixed(2)} lv.`);
    }
}

safari([])