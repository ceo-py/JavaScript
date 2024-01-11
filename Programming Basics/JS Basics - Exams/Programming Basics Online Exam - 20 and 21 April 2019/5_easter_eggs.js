function easterEggs(param) {
    const egg_colored_numbers = Number(param.shift())

    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;

    for (let egg = 0; egg < egg_colored_numbers; egg++) {
        const color = param.shift()

        if (color === 'red') {
            red += 1;
        } else if (color === 'orange') {
            orange += 1;
        } else if (color === 'blue') {
            blue += 1;
        } else if (color === 'green') {
            green += 1;
        }
    }

    let max_color = 'red';
    let max_number = red;

    if (orange > max_number) {
        max_number = orange;
        max_color = 'orange';
    }

    if (blue > max_number) {
        max_number = blue;
        max_color = 'blue';
    }

    if (green > max_number) {
        max_number = green;
        max_color = 'green';
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${max_number} -> ${max_color}`);
}

easterEggs([])