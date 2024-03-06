function aggregateElements(input) {
    console.log(eval(input.join('+')))
    let sumInverse = 0;

    for (let i = 0; i < input.length; i++) {
        sumInverse += 1 / input[i];
    }
    console.log(sumInverse)
    console.log(input.join(''))
}

aggregateElements([1, 2, 3])