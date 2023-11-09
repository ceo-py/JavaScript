function arrayRotation(list, rotation) {
    while (rotation > 0) {
        rotation -= 1
        list.push(list.shift())
    }
    console.log(list.join(' '))
}

arrayRotation([51, 47, 32, 61, 21], 2 )