function rosetta(arr) {
    const linesNumber = Number(arr.shift());
    const template = arr.splice(0, linesNumber).map(el => el.split(' ').map(Number));
    const encodedMatrix = arr.map(row => row.split(' ').map(Number));

    let result = '';

    for (let row = 0; row < encodedMatrix.length; row++) {
        for (let col = 0; col < encodedMatrix[row].length; col++) {
            const column = col % template[0].length;
            const roww = row % linesNumber;
            const letter = String.fromCharCode(((encodedMatrix[row][col] + template[roww][column]) % 27) + 64);
            result += letter === "@" ? " " : letter;
        }
    }

    console.log(result);
}


// function rosetta(arr) {
//   const [linesNumber, ...rest] = arr;
//   const template = rest.splice(0, Number(linesNumber)).map(el => el.split(' ').map(Number));
//   const encodedMatrix = rest.map(row => row.split(' ').map(Number));
//
//   const result = encodedMatrix.flatMap((row, rowIndex) =>
//     row.map((col, colIndex) => {
//       const column = colIndex % template[0].length;
//       const roww = rowIndex % linesNumber;
//       const letter = String.fromCharCode(((col + template[roww][column]) % 27) + 64);
//       return letter === "@" ? " " : letter;
//     })
//   ).join('');
//
//   console.log(result);
// }