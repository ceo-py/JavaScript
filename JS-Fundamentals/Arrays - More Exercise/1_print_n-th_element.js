function printNthElement(list) {
    const nElement = Number(list.pop())
    for (let x = 0; x < list.length; x += nElement) {
        process.stdout.write(`${list[x]} `)
    }
}

printNthElement(['5', '20', '31', '4', '20', '2'])


// function printNthElement(list) {
//     const n = Number(list.pop());
//     list.filter((_, i) => i % n === 0).forEach(el => process.stdout.write(`${el} `));
// }
// printNthElement(['5', '20', '31', '4', '20', '2']);