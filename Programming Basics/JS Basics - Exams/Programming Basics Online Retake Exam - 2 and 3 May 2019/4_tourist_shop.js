function touristShop(param) {
    let [budget, product, product_counter] = [Number(param.shift()), param.shift(), 0]
    let starting_budget = budget

    while (product !== 'Stop') {
        const price = Number(param.shift());
        product_counter += 1;

        if (product_counter % 3 === 0) {
            budget -= price * 0.50;
        } else {
            budget -= price;
        }

        if (budget < 0) {
            console.log("You don't have enough money!");
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
            return;
        }

        product = param.shift();
    }

    console.log(`You bought ${product_counter} products for ${(Math.abs(budget - starting_budget)).toFixed(2)} leva.`);

}

touristShop([])