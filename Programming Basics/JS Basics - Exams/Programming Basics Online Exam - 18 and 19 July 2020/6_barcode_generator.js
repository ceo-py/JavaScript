function solve(input) {
    let startNumOne = Number(input[0][0]);
    let startNumTwo = Number(input[0][1]);
    let startNumThree = Number(input[0][2]);
    let startNumFour = Number(input[0][3]);

    let endNumOne = Number(input[1][0]);
    let endNumTwo = Number(input[1][1]);
    let endNumThree = Number(input[1][2]);
    let endNumFour = Number(input[1][3]);

    let result = "";

    for (let i = startNumOne % 2 !== 0 ? startNumOne: startNumOne + 1; i <= endNumOne; i += 2) {
        for (let j = startNumTwo % 2 !== 0 ? startNumTwo: startNumTwo + 1; j <= endNumTwo; j +=2) {
            for (let k = startNumThree % 2 !== 0 ? startNumThree: startNumThree + 1; k <= endNumThree; k += 2) {
                for (let l = startNumFour % 2 !== 0 ? startNumFour: startNumFour + 1; l <= endNumFour; l += 2) {
                        result += `${i}${j}${k}${l} `;
                }
            }
        }
    }
    console.log(result);
}