function solve(array) {
    const output = []
    array.forEach(x => x >= 0 ? output.push(x) : output.unshift(x))
    console.log(output.join('\n'))
}

solve(['7', '-2', '8', '9'])