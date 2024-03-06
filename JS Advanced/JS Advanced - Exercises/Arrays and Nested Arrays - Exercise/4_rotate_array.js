function rotateArray(input, rotation) {
    for (let i = 0; i < rotation; i++) {
        input.unshift(input.pop())
    }
    console.log(input.join(' '))
}