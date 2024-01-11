function divisionWithoutReminder(param) {
    const full_numbers = Number(param.shift());

    let divide_two = 0;
    let divide_three = 0;
    let divide_four = 0;

    for (let i = 0; i < full_numbers; i++) {
        const number = Number(param.shift());

        if (number % 2 === 0) {
            divide_two += 1;
        }

        if (number % 3 === 0) {
            divide_three += 1;
        }

        if (number % 4 === 0) {
            divide_four += 1;
        }
    }

    divide_two = (divide_two / full_numbers) * 100;
    divide_three = (divide_three / full_numbers) * 100;
    divide_four = (divide_four / full_numbers) * 100;

    console.log(`${divide_two.toFixed(2)}%`);
    console.log(`${divide_three.toFixed(2)}%`);
    console.log(`${divide_four.toFixed(2)}%`);
}


// function divisionWithoutReminder(param) {
//     const full_numbers = Number(param.shift());
//
//     const numbers = [];
//     for (let i = 0; i < full_numbers; i++) {
//         const number = Number(param.shift());
//         numbers.push(number);
//     }
//
//     const countEven = numbers.filter(n => n % 2 === 0).length;
//     const countMultipleOf3 = numbers.filter(n => n % 3 === 0).length;
//     const countMultipleOf4 = numbers.filter(n => n % 4 === 0).length;
//
//     const percentageEven = (countEven / full_numbers) * 100;
//     const percentageMultipleOf3 = (countMultipleOf3 / full_numbers) * 100;
//     const percentageMultipleOf4 = (countMultipleOf4 / full_numbers) * 100;
//
//     console.log(`${percentageEven.toFixed(2)}%`);
//     console.log(`${percentageMultipleOf3.toFixed(2)}%`);
//     console.log(`${percentageMultipleOf4.toFixed(2)}%`);
// }

divisionWithoutReminder([])