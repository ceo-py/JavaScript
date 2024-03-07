function maxSequenceOfEqualElements(list) {
    let [number, sequence, current] = [0, 0, 0]
    for (let i = 0; i < list.length - 1; i += 1) {
        if (list[i] === list[i + 1]) {
            current += 1
        } else if (current > sequence) {
            sequence = current
            current = 0
            number = list[i - 1]
        }
    }
    if (sequence === 1) {
        console.log(`${number} ${number}`)
    } else {
        while (sequence > 0) {
            process.stdout.write(`${number} `)
            sequence -= 1
        }
    }
}

maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])


// function maxSequenceOfEqualElements(list) {
//     let maxSequence = [];
//     let currentSequence = [list[0]];
//
//     for (let i = 1; i < list.length; i++) {
//         if (list[i] === list[i - 1]) {
//             currentSequence.push(list[i]);
//         } else {
//             if (currentSequence.length > maxSequence.length) {
//                 maxSequence = [...currentSequence];
//             }
//             currentSequence = [list[i]];
//         }
//     }
//
//     if (currentSequence.length > maxSequence.length) {
//         maxSequence = [...currentSequence];
//     }
//
//     console.log(maxSequence.join(' '));
// }