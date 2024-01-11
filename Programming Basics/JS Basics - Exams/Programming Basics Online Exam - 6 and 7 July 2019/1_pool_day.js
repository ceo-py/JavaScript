function poolDay(param) {
    const [number_people, entry_tax, price_deck_chair, price_umbrella] = param.map(x => isNaN(x)? x: Number(x));

    const total_entry_tax = number_people * entry_tax;
    const deck_chair_money = Math.ceil(number_people * 0.75) * price_deck_chair;
    const umbrella_money = Math.ceil(number_people / 2) * price_umbrella;

    const total = total_entry_tax + deck_chair_money + umbrella_money;

    console.log(`${total.toFixed(2)} lv.`);

}

poolDay([])