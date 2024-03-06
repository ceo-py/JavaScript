function ExtractIncreasingSubsequenceFromArray(input) {
    return input.reduce((acc, curr) => {
        if (curr >= acc[acc.length - 1] || acc.length === 0) {
            acc.push(curr);
        }
        return acc;
    }, []);
}


// function ExtractIncreasingSubsequenceFromArray(input) {
//     let [result, currentMax] = [[], -Infinity];
//
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] >= currentMax) {
//             result.push(input[i]);
//             currentMax = input[i];
//         }
//     }
//     return result;
// }