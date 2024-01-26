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