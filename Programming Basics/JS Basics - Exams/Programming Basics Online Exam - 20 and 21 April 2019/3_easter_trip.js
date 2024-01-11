function easterTrip(param) {
    const [destination, dates, night_numbers] = param.map(x => isNaN(x)? x: Number(x))
    let price = 0;

    if (destination === 'France') {
        if (dates === '21-23') {
            price = 30;
        } else if (dates === '24-27') {
            price = 35;
        } else if (dates === '28-31') {
            price = 40;
        }
    } else if (destination === 'Italy') {
        if (dates === '21-23') {
            price = 28;
        } else if (dates === '24-27') {
            price = 32;
        } else if (dates === '28-31') {
            price = 39;
        }
    } else if (destination === 'Germany') {
        if (dates === '21-23') {
            price = 32;
        } else if (dates === '24-27') {
            price = 37;
        } else if (dates === '28-31') {
            price = 43;
        }
    }

    const total_price = price * night_numbers;

    console.log(`Easter trip to ${destination} : ${total_price.toFixed(2)} leva.`);

}

easterTrip([])