function printNthElement(list) {
    const nElement = Number(list.pop())
    for (let x = 0; x < list.length; x += nElement) {
        process.stdout.write(`${list[x]} `)
    }
}

printNthElement(['5', '20', '31', '4', '20', '2'])