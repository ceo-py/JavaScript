function stringManipulator(input) {
    let initialString = input.shift();
    const commands = {
        Translate: (char, replacement) => {
            initialString = initialString.replace(new RegExp(char, "g"), replacement);
            console.log(initialString);
        },
        Includes: (substring) => {
            console.log(initialString.includes(substring) ? "True" : "False");
        },
        Start: (substring) => {
            console.log(initialString.startsWith(substring) ? "True" : "False");
        },
        Lowercase: () => {
            initialString = initialString.toLowerCase();
            console.log(initialString);
        },
        FindIndex: (char) => {
            console.log(initialString.lastIndexOf(char));
        },

        Remove: (startIndex, count) => {
            initialString = initialString.replace(initialString.substring(startIndex, startIndex + count), '');
            console.log(initialString);
        },
    };
    let commandsData = input.shift();
    while (commandsData !== "End") {
        const [command, ...data] = commandsData
            .split(" ")
            .map((x) => (isNaN(x) ? x : Number(x)));
        commands[command](...data);
        commandsData = input.shift();
    }
}

// stringManipulator([
//   "//Thi5 I5 MY 5trING!//",
//   "Translate 5 s",
//   "Includes string",
//   "Start //This",
//   "Lowercase",
//   "FindIndex i",
//   "Remove 0 10",
//   "End",
// ]);

stringManipulator(["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"])
