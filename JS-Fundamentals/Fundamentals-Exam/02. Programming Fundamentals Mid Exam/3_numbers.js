function numbers(input) {
    let numbers = input.split(' ').map(Number);

    let average = eval(numbers.join('+')) / numbers.length;
    // let average = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

    let result = numbers.filter(x => x > average).sort((a, b) => b - a);

    if (result.length > 0) {
        console.log(...result.slice(0, 5));
    } else {
        console.log("No");
    }
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')