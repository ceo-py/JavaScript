function diagonalSums(matrix) {
    let [mainDiagonalSum, secondaryDiagonalSum, matrixLength] = [0, 0, matrix.length];

    for (let i = 0; i < matrixLength; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrixLength - i - 1];
    }

    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}