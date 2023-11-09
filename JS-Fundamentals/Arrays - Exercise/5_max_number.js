function maxNumber(list) {
    list.forEach((x , i) => {
        if (x === Math.max(...list.slice(i, list.length))) {
            process.stdout.write(`${x} `)
        }
    })
}

maxNumber([1, 4, 3, 2])