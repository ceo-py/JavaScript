function arrayManipulations(array) {
    let output = array.shift().split(' ').map(Number)
    const commands = {
        Add: (number) => output.push(number),
        Remove: (number) => output = output.filter(x => x !== number),
        RemoveAt: (index) => output.splice(index, 1),
        Insert: (number, index) => output.splice(index, 0, number),
    }
    array.forEach(x => {
        const [command, ...args] = x.split(' ').map(i => isNaN(i) ? i : Number(i))
        commands[command](...args)
    })
    console.log(output.join(' '))
}

arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2'])