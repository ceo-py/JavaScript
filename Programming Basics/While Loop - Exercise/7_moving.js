function movingSpace(array) {
    let [i, fullSize] = [0, Number(array.shift()) * Number(array.shift()) * Number(array.shift())]

    while (array[i] !== 'Done' && array[i]) {
        fullSize -= Number(array[i])
        i += 1
    }

    if (fullSize > 0) {
        console.log(`${fullSize} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${Math.abs(fullSize)} Cubic meters more.`)
    }
}

movingSpace(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])
