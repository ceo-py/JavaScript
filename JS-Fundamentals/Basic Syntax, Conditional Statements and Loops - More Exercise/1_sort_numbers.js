function sortNumbers(...input) {
    // input.sort((a, b) => b - a)
    console.log(input.sort((a, b) => b - a).join('\n'))
}

sortNumbers(2,1,3)