function rotateArray(list) {
    let rotation = Number(list.pop())
    while (rotation) {
        list.unshift(list.pop())
        rotation -= 1
    }
    console.log(list.join(' '))
}

rotateArray(['1', '2', '3', '4', '2'])