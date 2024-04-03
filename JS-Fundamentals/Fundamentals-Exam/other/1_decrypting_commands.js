function decryptingCommands(input) {
    let initialString = input.shift();
    const commands = {
        Replace: (currentChat, newChar) => {
            initialString = initialString.replace(
                new RegExp(currentChat, "g"),
                newChar
            );
            console.log(initialString);
        },
        Cut: (startIndex, endIndex) => {
            endIndex++;
            if (
                startIndex < 0 ||
                startIndex > endIndex ||
                endIndex > initialString.length
            ) {
                console.log("Invalid indexes!");
                return;
            }
            initialString = initialString.replace(
                initialString.slice(startIndex, endIndex),
                ""
            );
            console.log(initialString);
        },
        Make: (type) => {
            initialString =
                type === "Upper"
                    ? initialString.toUpperCase()
                    : initialString.toLowerCase();
            console.log(initialString);
        },
        Check: (string) => {
            console.log(
                `Message ${
                    initialString.includes(string) ? "contains" : "doesn't contain"
                } ${string}`
            );
        },
        Sum: (startIndex, endIndex) => {
            endIndex++;
            if (
                startIndex < 0 ||
                startIndex > endIndex ||
                endIndex > initialString.length
            ) {
                console.log("Invalid indexes!");
                return;
            }
            console.log(
                eval(
                    initialString
                        .slice(startIndex, endIndex)
                        .split("")
                        .map((char) => char.charCodeAt(0))
                        .join("+")
                )
            );
        },
    };
    let commandsData = input.shift();
    while (commandsData !== "Finish") {
        const [command, ...data] = commandsData.split(" ");
        commands[command](...data);
        commandsData = input.shift();
    }
}

// decryptingCommands([
//   "ILikeSoftUni",
//   "Replace I We",
//   "Make Upper",
//   "Check SoftUni",
//   "Sum 1 4",
//   "Cut 1 4",
//   "Finish",
// ]);

decryptingCommands([
    "HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish",
]);
