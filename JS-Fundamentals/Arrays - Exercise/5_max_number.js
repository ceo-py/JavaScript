function maxNumber(list) {
    list.forEach((x , i) => {
        if (x > Math.max(...list.slice(i + 1, list.length))) {
            process.stdout.write(`${x} `)
        }
    })
}

maxNumber([1, 4, 3, 2])



// function maxNumber(list) {
//     let maxSoFar = -Infinity;
//     let result = [];
//     for (let i = list.length - 1; i >= 0; i--) {
//         if (list[i] > maxSoFar) {
//             maxSoFar = list[i];
//             result.unshift(list[i]);
//         }
//     }
//     console.log(result.join(' '));
// }