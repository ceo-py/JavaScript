function easterGuests(param) {
    const [numbers_guests, budget] = param.map(Number)

    const easter_bread_price = 4;
    const egg_price = 0.45;

    const easter_bread_needed = 3;
    const egg_needed = 2;

    const easter_bread_bought = Math.ceil(numbers_guests / easter_bread_needed);
    const eggs_bread_bought = numbers_guests * egg_needed;

    const total_sum = budget - ((easter_bread_bought * easter_bread_price) + (eggs_bread_bought * egg_price));

    if (total_sum >= 0) {
        console.log(`Lyubo bought ${easter_bread_bought} Easter bread and ${eggs_bread_bought} eggs.`);
        console.log(`He has ${total_sum.toFixed(2)} lv. left.`);
    } else {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${Math.abs(total_sum).toFixed(2)} lv. more.`);
    }
}

easterGuests([])