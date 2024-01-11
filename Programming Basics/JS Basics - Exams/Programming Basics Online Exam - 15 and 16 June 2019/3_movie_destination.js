function movieDestination(param) {
    const [movie_budget, movie_destination, season, number_days] = param.map(x => isNaN(x) ? x : Number(x));

    let price = 0;
    let money_left = 0;

    if (movie_destination === "Dubai" && season === "Winter") {
        price += 45000;
    } else if (movie_destination === "Dubai" && season === "Summer") {
        price += 40000;
    } else if (movie_destination === "Sofia" && season === "Summer") {
        price += 12500;
    } else if (movie_destination === "Sofia" && season === "Winter") {
        price += 17000;
    } else if (movie_destination === "London" && season === "Winter") {
        price += 24000;
    } else if (movie_destination === "London" && season === "Summer") {
        price += 20250;
    }

    if (movie_destination === "Dubai") {
        price = price - (price * 0.30);
    } else if (movie_destination === "Sofia") {
        price = price + (price * 0.25);
    }

    const total = price * number_days;
    money_left = movie_budget - total;

    if (movie_budget >= total) {
        console.log(`The budget for the movie is enough! We have ${money_left.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${Math.abs(money_left).toFixed(2)} leva more!`);
    }
}

movieDestination([])