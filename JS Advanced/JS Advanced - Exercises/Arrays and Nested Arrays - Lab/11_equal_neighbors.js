function equalNeighbors(matrix) {
    let count = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length - 1 && matrix[row][col] === matrix[row + 1][col]) {
                count++;
            }
            if (col < matrix[row].length - 1 && matrix[row][col] === matrix[row][col + 1]) {
                count++;
            }
        }
    }
    return count;
}