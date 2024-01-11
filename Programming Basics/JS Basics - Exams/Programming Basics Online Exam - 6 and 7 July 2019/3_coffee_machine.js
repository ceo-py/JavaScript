function coffeMachine(param) {
    const [type_of_drink, sugar_amount, count_drinks] = param.map(x => isNaN(x) ? x : Number(x));
    let price_per_drink = 0;

    if (type_of_drink === "Espresso") {
        price_per_drink = 0.9;
        if (sugar_amount === "Normal") {
            price_per_drink = 1;
        } else if (sugar_amount === "Extra") {
            price_per_drink = 1.2;
        }
    }

    if (type_of_drink === "Cappuccino") {
        price_per_drink = 1;
        if (sugar_amount === "Normal") {
            price_per_drink = 1.2;
        } else if (sugar_amount === "Extra") {
            price_per_drink = 1.6;
        }
    }

    if (type_of_drink === "Tea") {
        price_per_drink = 0.5;
        if (sugar_amount === "Normal") {
            price_per_drink = 0.6;
        } else if (sugar_amount === "Extra") {
            price_per_drink = 0.7;
        }
    }

    let bill = price_per_drink * count_drinks;

    if (sugar_amount === "Without") {
        bill *= 0.65;
    }

    if (type_of_drink === "Espresso" && count_drinks >= 5) {
        bill *= 0.75;
    }

    if (bill > 15) {
        bill *= 0.8;
    }

    console.log(`You bought ${count_drinks} cups of ${type_of_drink} for ${bill.toFixed(2)} lv.`);

}

coffeMachine([])