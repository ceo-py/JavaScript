function diagonalAttack(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrix.length - i - 1];
    }

    if (mainDiagonalSum === secondaryDiagonalSum) {
        matrix = matrix.map((row, i) =>
            row.map((e, j) => i === j || i === matrix.length - j - 1 ? e : mainDiagonalSum)
        );
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);