function paintingEggs(param) {
    const [eggs_size, eggs_color, number_lots] = param.map(x => isNaN(x) ? x : Number(x))

    let price = 0;
    const expenses = 0.65;

    if (eggs_size === 'Large') {
        if (eggs_color === 'Red') {
            price = 16;
        } else if (eggs_color === 'Green') {
            price = 12;
        } else if (eggs_color === 'Yellow') {
            price = 9;
        }
    } else if (eggs_size === 'Medium') {
        if (eggs_color === 'Red') {
            price = 13;
        } else if (eggs_color === 'Green') {
            price = 9;
        } else if (eggs_color === 'Yellow') {
            price = 7;
        }
    } else if (eggs_size === 'Small') {
        if (eggs_color === 'Red') {
            price = 9;
        } else if (eggs_color === 'Green') {
            price = 8;
        } else if (eggs_color === 'Yellow') {
            price = 5;
        }
    }

    const total = price * number_lots * expenses;

    console.log(`${total.toFixed(2)} leva.`);
}

paintingEggs([])