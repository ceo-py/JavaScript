function stringGame(input) {
  let initialString = input.shift();
  const commands = {
    Change: (char, replacement) => {
      initialString = initialString.replace(new RegExp(char, "g"), replacement);
      console.log(initialString);
    },
    Includes: (substring) => {
      console.log(initialString.includes(substring) ? "True" : "False");
    },
    End: (substring) => {
      console.log(initialString.endsWith(substring) ? "True" : "False");
    },
    Uppercase: () => {
      initialString = initialString.toUpperCase();
      console.log(initialString);
    },
    FindIndex: (char) => {
      console.log(initialString.indexOf(char));
    },
    Cut: (startIndex, count) => {
      initialString = initialString.substring(startIndex, startIndex + count);
      console.log(initialString);
    },
  };
  let commandsData = input.shift();
  while (commandsData !== "Done") {
    const [command, ...data] = commandsData
      .split(" ")
      .map((x) => (isNaN(x) ? x : Number(x)));
    commands[command](...data);
    commandsData = input.shift();
  }
}

// stringGame([
//   "//Th1s 1s my str1ng!//",
//   "Change 1 i",
//   "Includes string",
//   "End my",
//   "Uppercase",
//   "FindIndex I",
//   "Cut 5 5",
//   "Done",
// ]);

stringGame(["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])
