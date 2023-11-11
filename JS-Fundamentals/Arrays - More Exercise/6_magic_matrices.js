function magicMatrices(matrix) {
    for (let i = 0; i < matrix.length - 1; i += 1) {
        let [rowOne, rowTwo] = [0, 0]
        if (eval(matrix[i].join('+')) !== eval(matrix[i + 1].join('+'))) {
            return false
        }
        for (let x = 0; x < matrix[i].length; x += 1) {
            if (matrix[x]) {
                rowOne += matrix[x][i]
                rowTwo += matrix[x][i + 1]
            } else break

        }
        if (rowOne !== rowTwo) {
            return false
        }
    }
    return true
}



// function magicMatrices(arr) {
//      const sumRow = arr.map((col => col.reduce((a,b) => a + b)))
//      const sumCol = arr.reduce((r, a) => r.map((b, i) => a[i] + b))
//      const allEqual = array => array.every( v => v === array[0])
//      return allEqual(sumRow) && allEqual(sumRow) && sumRow.toString() === sumCol.toString();
// }



magicMatrices([[4, 5, 6],
    [6, 5, 4],
])