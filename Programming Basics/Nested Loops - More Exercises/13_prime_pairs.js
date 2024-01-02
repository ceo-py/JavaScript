function primePairs(param) {
    const [n1, n2, n3, n4] = param.map(Number)
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181]
    for (let firstPair = n1; firstPair <= n1 + n3; firstPair++) {
        for (let secondPair = n2; secondPair <= n2 + n4; secondPair++) {
            if (primeNumbers.includes(firstPair) && primeNumbers.includes(secondPair)) {
                console.log(`${firstPair}${secondPair}`)
            }
        }
    }
}


// function primePairs([firstNum, secondNum, increaseFirst, increaseSecond]) {
// firstNum = Number(firstNum);
// secondNum = Number(secondNum);
// increaseFirst = Number(increaseFirst);
// increaseSecond = Number(increaseSecond);
//
// let maxFirst = firstNum + increaseFirst;
// let maxSecond = secondNum + increaseSecond;
//
// for (let i = firstNum; i <= maxFirst; i++) {
//     for (let j = secondNum; j <= maxSecond; j++) {
//         let isFirstNumPrime = true;
//         let isSecondNumPrime = true;
//         for (let k = 2; k <= Math.sqrt(i); k++) {
//             if ( i % k == 0) {
//                 isFirstNumPrime = false;
//                 break;
//             }
//         }
//         for (let k = 2; k <= Math.sqrt(j); k++) {
//             if ( j % k == 0) {
//                 isSecondNumPrime = false;
//                 break;
//             }
//         }
//         if (isFirstNumPrime && isSecondNumPrime) {
//             console.log(`${i}${j}`)
//         }
//     }
// }
// }

primePairs([10, 20, 5, 5])