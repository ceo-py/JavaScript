function easterBake(param) {
    let [cozunak_number, sugar_max_spend, flour_max_spend, sugar_total, flour_total] = [Number(param.shift()), 0, 0, 0, 0]

    for (let cozunak = 0; cozunak < cozunak_number; cozunak++) {
        const sugar_spend = Number(param.shift());
        const flour_spend = Number(param.shift());
        sugar_total += sugar_spend;
        flour_total += flour_spend;

        if (sugar_spend > sugar_max_spend) {
            sugar_max_spend = sugar_spend;
        }

        if (flour_spend > flour_max_spend) {
            flour_max_spend = flour_spend;
        }
    }

    const sugar_used = Math.ceil(sugar_total / 950);
    const flour_used = Math.ceil(flour_total / 750);

    console.log(`Sugar: ${sugar_used}`);
    console.log(`Flour: ${flour_used}`);
    console.log(`Max used flour is ${flour_max_spend} grams, max used sugar is ${sugar_max_spend} grams.`);

}

easterBake([])