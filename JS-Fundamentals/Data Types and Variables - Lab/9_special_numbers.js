function specialNumbers(number) {
    for (let i = 1; i <=number; i++) {
        console.log(`${i} -> ${[5, 7, 11].includes(eval(i.toString().split('').join('+')))? 'True': 'False'}`)
    }
}

specialNumbers(15)


// function specialNumbers(number) {
//   let isSpecialNumber = ''
//
//   for (let i = 1; i <= number; i++) {
//     const test = Math.trunc((i / 10) + (i % 10))
//     if (test == 5 || test == 7 || test == 11) {
//       isSpecialNumber = 'True'
//     } else {
//       isSpecialNumber = 'False'
//     }
//     console.log(`${i} -> ${isSpecialNumber}`);
//   }
// }


// function specialNumbers(number) {
//     const specialNums = [5, 7, 11];
//     for (let i = 1; i <= number; i++) {
//         let sum = Array.from(String(i), Number).reduce((a, b) => a + b, 0);
//         console.log(`${i} -> ${specialNums.includes(sum) ? 'True' : 'False'}`);
//     }
// }