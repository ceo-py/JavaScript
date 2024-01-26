function equalNeighbors(matrix) {
    let counter = 0
    const movement = {
        up: {
            row: -1, col: 0,
        }, down: {
            row: 1, col: 0,
        }, left: {
            row: 0, col: -1,
        }, right: {
            row: 0, col: 1,
        },
    }
    matrix.forEach((row, rowI) => {
        row.forEach((_, eI) => {
            Object.values(movement).forEach(pos => {
                const rowToLook = rowI + pos.row
                const colToLook = eI + pos.col
                if (rowToLook >= 0 && colToLook >= 0 && rowToLook < matrix.length && colToLook < row.length) {
                    counter += matrix[rowToLook][colToLook] === matrix[rowI][eI] ? 1 : 0
                }
            })
        })
    })
    console.log(counter / 2)
}






// function equalNeighbors(arr) {
//   let counter = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//
//     for (let j = 0; j < arr[i].length; j++) {
//       let firstElement = arr[i][j];
//       let sameArrEl = arr[i][j + 1];
//
//       if (firstElement === sameArrEl) {
//         counter++;
//       }
//
//       if (arr[i + 1] === undefined) {
//         continue;
//       }
//
//       for (let k = j; k < arr[i + 1].length; k++) {
//         let secondElement = arr[i + 1][k];
//
//         if (firstElement === secondElement && j == k) {
//           counter++;
//           break;
//         }
//         break;
//       }
//     }
//   }
//   console.log(counter);
// }



equalNeighbors([['test', 'yo', 'yo', 'ho'], ['well', 'done', 'no', '6'], ['not', 'done', 'yet', '5']])