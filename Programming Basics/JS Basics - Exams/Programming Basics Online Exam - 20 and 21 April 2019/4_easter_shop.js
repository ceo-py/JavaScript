function easterShop(param) {
    let [egg_starting_number, command, sold_eggs] = [Number(param.shift()), param.shift(), 0]

    while (command !== 'Close') {
        let egg_number = Number(param.shift())

        if (command === 'Buy') {
            egg_starting_number -= egg_number;
            sold_eggs += egg_number;

            if (egg_starting_number < 0) {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${egg_starting_number + egg_number}.`);
                break;
            }

        } else if (command === 'Fill') {
            egg_starting_number += egg_number;
        }

        command = param.shift()
    }

    if (command === 'Close') {
        console.log(`Store is closed!`);
        console.log(`${sold_eggs} eggs sold.`);
    }
}

easterShop([])