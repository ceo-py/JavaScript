function verParking(param) {
    const [number_days, hours_per_day] = param.map(Number)

    let total_tax = 0;

    for (let day = 1; day <= number_days; day++) {
        let day_tax = 0;

        for (let hour = 1; hour <= hours_per_day; hour++) {
            let price;

            if (day % 2 === 0 && hour % 2 !== 0) {
                price = 2.50;
            } else if (day % 2 !== 0 && hour % 2 === 0) {
                price = 1.25;
            } else {
                price = 1;
            }

            total_tax += price;
            day_tax += price;
        }

        console.log(`Day: ${day} - ${day_tax.toFixed(2)} leva`);
    }

    console.log(`Total: ${total_tax.toFixed(2)} leva`);

}

verParking([])