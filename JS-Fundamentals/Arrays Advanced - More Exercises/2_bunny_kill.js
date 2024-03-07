function bunnyKill(arr) {

    let bombCells = arr.pop().split(' ').map(str => str.split(',').map(Number));
    let matrix = arr.map(row => row.split(' ').map(Number));

    let damage = 0;
    let killCounter = 0;

    for (let i = 0; i < bombCells.length; i++) {
        let bombRow = bombCells[i][0];
        let bombCol = bombCells[i][1];
        let bombValue = matrix[bombRow][bombCol];

        if (bombValue <= 0) {
            continue;
        }

        let startRow = Math.max(0, bombRow - 1);
        let endRow = Math.min(bombRow + 1, arr.length - 1);

        for (let row = startRow; row <= endRow; row++) {
            let startCol = Math.max(0, bombCol - 1);
            let endCol = Math.min(bombCol + 1, arr[row].length - 1);

            for (let col = startCol; col <= endCol; col++) {
                matrix[row][col] -= bombValue;
            }
        }

        killCounter++;
        damage += bombValue;
    }
    console.log(`${eval(matrix.flat().filter(x => x > 0).join('+')) + damage}\n${matrix.flat().filter(x => x > 0).length + killCounter}`)
}



// function bunnyKill(arr) {
//     let bombCells = arr.pop().split(' ').map(str => str.split(',').map(Number));
//     let matrix = arr.map(row => row.split(' ').map(Number));
//     let damage = 0;
//     let killCounter = 0;
//
//     bombCells.forEach(([bombRow, bombCol]) => {
//         let bombValue = matrix[bombRow][bombCol];
//         if (bombValue <= 0) return;
//
//         let startRow = Math.max(0, bombRow - 1);
//         let endRow = Math.min(bombRow + 1, arr.length - 1);
//
//         for (let row = startRow; row <= endRow; row++) {
//             let startCol = Math.max(0, bombCol - 1);
//             let endCol = Math.min(bombCol + 1, arr[row].length - 1);
//
//             for (let col = startCol; col <= endCol; col++) {
//                 matrix[row][col] -= bombValue;
//             }
//         }
//
//         killCounter++;
//         damage += bombValue;
//     });
//
//     let survivors = matrix.flat().filter(x => x > 0);
//     console.log(`${survivors.reduce((a, b) => a + b, 0) + damage}\n${survivors.length + killCounter}`);
// }