function easterDecoration(param) {
    const customer_in_shop = Number(param.shift())

    const egg_basket = 1.50;
    const easter_wreath = 3.80;
    const chocolate_rabbit = 7;

    let total_revenue = 0;

    for (let customer = 0; customer < customer_in_shop; customer++) {
        let product = param.shift();
        let current_bill = 0;
        let current_items = 0;

        while (product !== 'Finish') {
            current_items += 1;
            let price = 0;

            if (product === 'basket') {
                price = egg_basket;
            } else if (product === 'wreath') {
                price = easter_wreath;
            } else if (product === 'chocolate bunny') {
                price = chocolate_rabbit;
            }

            current_bill += price;
            product = param.shift();
        }

        if (current_items % 2 === 0) {
            current_bill *= 0.80;
        }

        total_revenue += current_bill;
        console.log(`You purchased ${current_items} items for ${current_bill.toFixed(2)} leva.`);
    }

    console.log(`Average bill per client is: ${(total_revenue / customer_in_shop).toFixed(2)} leva.`);

}

easterDecoration([])