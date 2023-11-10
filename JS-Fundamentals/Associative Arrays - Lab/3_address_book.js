function addressBook(list) {
    const output = {}

    for (const item of list) {
        const [name, address] = item.split(':')
        output[name] = address
    }
    for (const key of Object.keys(output).sort()) {
        console.log(`${key} -> ${output[key]}`)
    }
}

addressBook()