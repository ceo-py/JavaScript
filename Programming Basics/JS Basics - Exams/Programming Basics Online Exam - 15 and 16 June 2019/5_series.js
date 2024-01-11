function series(param) {
    let [serial_budget, serial_numbers] = [Number(param.shift()), Number(param.shift())];

    let serial_count = 0;
    let total_budget = serial_budget;

    while (true) {
        const name_serial = param.shift();
        const price_serial = Number(param.shift());
        serial_count += 1;

        let discountFactor = 1.0;

        switch (name_serial) {
            case "Thrones":
                discountFactor = 0.50;
                break;
            case "Lucifer":
                discountFactor = 0.60;
                break;
            case "Protector":
                discountFactor = 0.70;
                break;
            case "TotalDrama":
                discountFactor = 0.80;
                break;
            case "Area":
                discountFactor = 0.90;
                break;
        }

        total_budget -= discountFactor * price_serial;

        if (serial_numbers === serial_count && total_budget >= 0) {
            console.log(`You bought all the series and left with ${total_budget.toFixed(2)} lv.`);
            break;
        } else if (total_budget < 0 && serial_count === serial_numbers) {
            console.log(`You need ${Math.abs(total_budget).toFixed(2)} lv. more to buy the series!`);
            break;
        }
    }
}

series([])