function filmPremiere(param) {
    const [movie_name, movie_extra, movie_tickets] = param.map(x => isNaN(x) ? x : Number(x));

    let extras = 0;
    let total = 0;

    if (movie_name === "John Wick") {
        switch (movie_extra) {
            case "Drink":
                extras += 12;
                break;
            case "Popcorn":
                extras += 15;
                break;
            case "Menu":
                extras += 19;
                break;
        }
    } else if (movie_name === "Star Wars") {
        switch (movie_extra) {
            case "Drink":
                extras += 18;
                break;
            case "Popcorn":
                extras += 25;
                break;
            case "Menu":
                extras += 30;
                break;
        }

    } else if (movie_name === "Jumanji") {
        switch (movie_extra) {
            case "Drink":
                extras += 9;
                break;
            case "Popcorn":
                extras += 11;
                break;
            case "Menu":
                extras += 14;
                break;
        }
    }
    total = extras * movie_tickets;
    if (movie_tickets >= 4 && movie_name === "Star Wars") {
        total *= 0.70;
    }
    else if (movie_tickets === 2 && movie_name === "Jumanji") {
        total *= 0.85
    }

    console.log(`Your bill is ${total.toFixed(2)} leva.`);

}

filmPremiere(['Star Wars', 'Popcorn', '4'])