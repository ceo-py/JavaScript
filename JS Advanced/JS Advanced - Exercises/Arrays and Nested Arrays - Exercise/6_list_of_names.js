function listOfNames(input) {
    input.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    input.forEach((n, i) => console.log(`${i+1}.${n}`))
}