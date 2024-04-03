function decryptMessages(input) {
    const n = Number(input.shift()); // First line is the number of inputs
    const messageRegex =
        /^(%|\$)([A-Z][a-z]{2,})\1: \[([0-9]+)\]\|\[([0-9]+)\]\|\[([0-9]+)\]\|$/;

    for (let i = 0; i < n; i++) {
        const message = input[i];
        const match = message.match(messageRegex);

        if (match) {
            const tag = match[2];
            const charCodes = [match[3], match[4], match[5]].map(Number);
            const decryptedMessage = charCodes
                .map((code) => String.fromCharCode(code))
                .join("");
            console.log(`${tag}: ${decryptedMessage}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}

decryptMessages(["3",
    "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true"])
