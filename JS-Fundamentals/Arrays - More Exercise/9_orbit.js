function orbit(input) {
    let [rows, cols, starRow, starCol] = input
    const matrix = []
    for(let i=0; i<rows; i++) {
        matrix.push([])
    }
    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1
        }
    }
    matrix.forEach(x => console.log(x.join(' ')))
}


orbit([5, 5, 0, 0])