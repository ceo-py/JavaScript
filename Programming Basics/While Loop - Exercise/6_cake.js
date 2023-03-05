function cakePeaces(array) {
    let [i, cakeFullSize] = [0, Number(array.shift()) * Number(array.shift())]

    while (array[i] !== 'STOP' && array[i]) {
        cakeFullSize -= Number(array[i])
        i += 1
    }

    if (cakeFullSize > 0) {
        console.log(`${cakeFullSize} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${Math.abs(cakeFullSize)} pieces more.`)
    }
}

cakePeaces(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])
