function messagesManager(params) {
    let [messagesBook, messageLimit] = [{}, Number(params.shift())];
    const commands = {
        Add: (username, send, receive) => {
            if (messagesBook.hasOwnProperty(username)) return;
            messagesBook[username] = {
                send: send,
                receive: receive,
            };
        },
        Message: (sender, receiver) => {
            if (!messagesBook.hasOwnProperty(sender)) return;
            if (!messagesBook.hasOwnProperty(receiver)) return;
            messagesBook[sender].send += 1;
            messagesBook[receiver].receive += 1;
            if (
                messagesBook[sender].send + messagesBook[sender].receive ===
                messageLimit
            ) {
                delete messagesBook[sender];
                console.log(`${sender} reached the capacity!`);
            }
            if (
                messagesBook[receiver].receive + messagesBook[receiver].send ===
                messageLimit
            ) {
                delete messagesBook[receiver];
                console.log(`${sender} reached the capacity!`);
            }
        },
        Empty: (username) => {
            if (username === "All") messagesBook = {};
            if (!messagesBook.hasOwnProperty(username)) return;
            delete messagesBook[username];
        },
    };

    let commandsData = params.shift();

    while (commandsData !== "Statistics") {
        const [command, username, send, receive] = commandsData
            .split("=")
            .map((x) => (isNaN(x) ? x : Number(x)));
        commands[command](username, send, receive);
        commandsData = params.shift();
    }
    console.log(`Users count: ${Object.keys(messagesBook).length}`);
    Object.entries(messagesBook).forEach(([username, message]) => {
        console.log(`${username} - ${message.send + message.receive}`);
    });
}

// messagesManager([
//   "10",
//   "Add=Berg=9=0",
//   "Add=Kevin=0=0",
//   "Message=Berg=Kevin",
//   "Add=Mark=5=4",
//   "Statistics",
// ]);

// messagesManager([
//   "20",
//   "Add=Mark=3=9",
//   "Add=Berry=5=5",
//   "Add=Clark=4=0",
//   "Empty=Berry",
//   "Add=Blake=9=3",
//   "Add=Michael=3=9",
//   "Add=Amy=9=9",
//   "Message=Blake=Amy",
//   "Message=Michael=Amy",
//   "Statistics",
// ]);

messagesManager([
    "12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics",
]);
