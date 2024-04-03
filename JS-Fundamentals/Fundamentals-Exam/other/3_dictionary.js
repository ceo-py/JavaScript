function dictionary(params) {
    const [dict, command] = [{}, params.pop()];
    params
        .shift()
        .split(" | ")
        .forEach((line) => {
            const [word, definition] = line.split(": ");
            if (!dict[word]) dict[word] = [];
            dict[word].push(definition);
        });
    const teacherWords = params.shift().split(" | ");
    if (command === "Hand Over") {
        console.log(Object.keys(dict).join(" "));
    } else if (command === "Test") {
        teacherWords.forEach((word) => {
            if (dict.hasOwnProperty(word)) {
                console.log(`${word}:`);
                Object.values(dict[word]).forEach((definition) => {
                    console.log(` -${definition}`);
                });
            }
        });
    }
}

// dictionary([
//   "programmer: an animal, which turns coffee into code | developer: a magician",
//   "fish | domino",
//   "Hand Over",
// ]);

// dictionary([
//   "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
//   "care | kitchen | flower",
//   "Test",
// ]);

dictionary([
    "tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "Test",
]);
