function frame(param) {
    const number = Number(param)
    for (let row = 1; row <= number; row++) {
        if (row === 1 || row === number) {
            console.log("+ " + "- ".repeat(number - 2) + "+ ");
        } else {
            console.log("| " + "- ".repeat(number - 2) + "| ");
        }
    }
}

frame([])