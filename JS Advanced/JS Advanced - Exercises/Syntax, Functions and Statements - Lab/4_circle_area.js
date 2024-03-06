function circleArea(input) {
    console.log(typeof input != 'number' ?
        `We can not calculate the circle area, because we receive a ${typeof input}.`
        : `${(Math.PI * (input * input)).toFixed(2)}`)
}

// function circleArea(input) {
//     if (typeof input != 'number') {
//         console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
//     } else {
//         console.log(`${(Math.PI * (input * input)).toFixed(2)}`)
//     }
// }