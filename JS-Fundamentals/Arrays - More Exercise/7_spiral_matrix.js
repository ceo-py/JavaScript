function spiralMatrix(rows, cols) {
    const matrix = Array.from({length: rows}, () => Array(cols).fill(0));
    let [top, bottom, left, right, counter] = [0, rows - 1, 0, cols - 1, 1]

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) matrix[top][i] = counter++; top++
        for (let i = top; i <= bottom; i++) matrix[i][right] = counter++; right--
        for (let i = right; i >= left; i--) matrix[bottom][i] = counter++; bottom--
        for (let i = bottom; i >= top; i--) matrix[i][left] = counter++; left++
    }
  matrix.forEach(x => console.log(x.join(' ')))
}

spiralMatrix('5', '5')