function evenPositionElements(input) {
    let result = '';
    for (let i = 0; i < input.length; i += 2) {
        result += input[i] + ' ';
    }
    return result.trim();
}