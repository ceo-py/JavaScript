function hogwarts(params) {
    let initialString = params.shift();
    const commands = {
        Abjuration: () => {
            initialString = initialString.toUpperCase();
            return initialString;
        },
        Necromancy: () => {
            initialString = initialString.toLowerCase();
            return initialString;
        },
        Illusion: (index, letter) => {
            if (index > initialString.length - 1 || index < 0) {
                return "The spell was too weak.";
            }
            initialString =
                initialString.slice(0, index) + letter + initialString.slice(index + 1);
            return "Done!";
        },
        Divination: (firstSubstring, secondSubstring) => {
            if (!initialString.includes(firstSubstring)) return;

            initialString = initialString.replace(
                new RegExp(firstSubstring, "g"),
                secondSubstring
            );
            return initialString;
        },
        Alteration: (substring) => {
            if (!initialString.includes(substring)) return;
            initialString = initialString.replace(substring, "");
            return initialString;
        },
    };
    let commandsData = params.shift();

    while (commandsData !== "Abracadabra") {
        let [command, ...data] = commandsData
            .split(" ")
            .map((x) => (isNaN(x) ? x : Number(x)));
        if (!commands.hasOwnProperty(command)) {
            console.log("The spell did not work!");
        } else {
            toPrint = commands[command](...data);
            if (toPrint) {
                console.log(toPrint);
            }
        }
        commandsData = params.shift();
    }
    return initialString;
}

// hogwarts([
//   "A7ci0",
//   "Illusion 1 c",
//   "Illusion 4 o",
//   "Abjuration",
//   "Abracadabra",
// ]);

// hogwarts(["TR1GG3R",
// "Necromancy",
// "Illusion 8 m",
// "Illusion 9 n",
// "Abracadabra"])

hogwarts(["SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"])
