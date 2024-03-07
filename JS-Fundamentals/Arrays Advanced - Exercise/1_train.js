function train(array) {
    const waggons = array.shift().split(' ').map(Number)
    const capacity = array.shift()

    array.forEach(x => {
        if (x.includes('Add')) {
            waggons.push(Number(x.split(' ')[1]))
        } else {
            x = Number(x)
            for (const i in waggons) {
                if (waggons[i] + x <= capacity) {
                    waggons[i] += x
                    break
                }
            }
        }
    })
    console.log(waggons.join(' '))
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])

// function train(array) {
//     const waggons = array.shift().split(' ').map(Number);
//     const capacity = Number(array.shift());
//
//     array.forEach(x => {
//         if (x.includes('Add')) {
//             waggons.push(Number(x.split(' ')[1]));
//         } else {
//             const passengers = Number(x);
//             for (let i = 0; i < waggons.length; i++) {
//                 if (waggons[i] + passengers <= capacity) {
//                     waggons[i] += passengers;
//                     break;
//                 }
//             }
//         }
//     });
//
//     console.log(waggons.join(' '));
// }