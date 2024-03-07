function equalArrays(listOne, listTwo) {
    let foundDifference = null
    for (let i = 0; i < listOne.length; i += 1) {
        if (listOne[i] !== listTwo[i]) {
            foundDifference = `Arrays are not identical. Found difference at ${i} index`
            break
        }
    }
    if (listTwo.length > listOne.length) {
        for (let i = 0; i < listTwo.length; i += 1) {
            if (listTwo[i] !== listOne[i]) {
                foundDifference = `Arrays are not identical. Found difference at ${i} index`
                break
            }
        }
    }
    console.log(!foundDifference ? `Arrays are identical. Sum: ${eval(listOne.join('+'))}`: foundDifference)
}

equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '3', '4', '5', '6'])


// function equalArrays(listOne, listTwo) {
//     if (listOne.length !== listTwo.length) {
//         console.log(`Arrays are not identical. Different lengths.`);
//         return;
//     }
//
//     let differenceIndex = listOne.findIndex((value, index) => value !== listTwo[index]);
//
//     if (differenceIndex !== -1) {
//         console.log(`Arrays are not identical. Found difference at ${differenceIndex} index`);
//         return;
//     }
//
//     let sum = listOne.reduce((a, b) => a + b, 0);
//     console.log(`Arrays are identical. Sum: ${sum}`);
// }