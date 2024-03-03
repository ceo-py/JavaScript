function arrayModifier(input) {
    let [elements, dataInfo] = [input.shift().split(' ').map(Number), input.shift()];

    while (dataInfo !== "end") {
        if (dataInfo.includes("decrease")) {
            elements = elements.map(x => x - 1);
            dataInfo = input.shift();
            continue;
        }

        let [command, indexOne, indexTwo] = dataInfo.split(' ').map(x => isNaN(x) ? x : parseInt(x));

        if (command === "swap") {
            [elements[indexOne], elements[indexTwo]] = [elements[indexTwo], elements[indexOne]];
        } else if (command === "multiply") {
            elements[indexOne] *= elements[indexTwo];
        }

        dataInfo = input.shift();
    }

    console.log(elements.join(', '));
}

arrayModifier( [
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
])