function movieProfit(param) {
    const [movie_name, number_days, number_tickets, price_ticket, cinema_percent] = param.map(x => isNaN(x)? x: Number(x));

    const tickets_for_one_day = number_tickets * price_ticket;
    const total_revenue = number_days * tickets_for_one_day;
    const cinema_profit = (total_revenue * cinema_percent) / 100;
    const total = total_revenue - cinema_profit;

    console.log(`The profit from the movie ${movie_name} is ${total.toFixed(2)} lv.`);

}

movieProfit([])