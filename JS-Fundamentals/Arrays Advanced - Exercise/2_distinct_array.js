function distinctArray(array) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (!array.slice(0, i).includes(array[i])) {
            result.push(array[i])
        }
    }
    console.log(result.join(' '))
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])