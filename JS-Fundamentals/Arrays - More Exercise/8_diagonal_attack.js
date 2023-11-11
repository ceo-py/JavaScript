function diagonalAttack(list) {
    let matrix = []
    list.forEach(x => matrix.push(x.split(' ').map(Number)))
    let [lDiag, rDiag, lNumbers, rNumbers] = [0, 0, [], []]
    for (let i = 0; i < matrix.length; i += 1) {
        lDiag += matrix[i][i]
        lNumbers.push(matrix[i][i])
        rDiag += matrix[i][[matrix.length - 1 - i]]
        rNumbers.push(matrix[i][[matrix.length - 1 - i]])
    }
    if (lDiag === rDiag) {
        matrix = Array.from({length: matrix.length}, () => Array(matrix.length).fill(rDiag))
        for (let i = 0; i < matrix.length; i += 1) {
            matrix[i][i] = lNumbers.shift()
            matrix[i][[matrix.length - 1 - i]] = rNumbers.shift()
        }
    }
    matrix.forEach(x => console.log(x.join(' ')))
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)