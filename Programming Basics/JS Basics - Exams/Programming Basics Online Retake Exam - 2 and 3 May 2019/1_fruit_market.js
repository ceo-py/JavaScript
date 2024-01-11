function fruitMarket(param) {
    const [strawberries_price_lv, quantity_bananas_in_kg, quantity_oranges_in_kg, quantity_raspberries_in_kg, quantity_strawberries_in_kg ] = param.map(Number)

    const raspberries_price = strawberries_price_lv / 2;
    const oranges_price = raspberries_price * 0.60;
    const bananas_price = raspberries_price * 0.20;

    const raspberries_total = raspberries_price * quantity_raspberries_in_kg;
    const oranges_total = oranges_price * quantity_oranges_in_kg;
    const bananas_total = bananas_price * quantity_bananas_in_kg;
    const strawberries_total = quantity_strawberries_in_kg * strawberries_price_lv;

    const total = raspberries_total + oranges_total + bananas_total + strawberries_total;

    console.log(`${total.toFixed(2)}`);
}

fruitMarket([])