function chessBoard(size) {
    let [output, divOpen, divClose] = ['<div class="chessboard">', '<div>', '</div>']

    for (let i = 0; i < size; i++) {
        output += `\n  ${divOpen}`
        for (let j = 0; j < size; j++) {
            output += `\n    <span class="${j % 2 === 0 ? `${i % 2 === 0 ? 'black' : 'white'}` : `${i % 2 !== 0 ? 'black' : 'white'}`}"></span>`
        }
        output += `\n  ${divClose}`
    }
    output += `\n${divClose}`
    return output
}

console.log(chessBoard(6))