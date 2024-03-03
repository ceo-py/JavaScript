function theImitationGame(input) {
    let [encryptedMessage, data] = [input.shift(), input.shift()]
    const commands = {
        Move: (numberOfLetter) => {return encryptedMessage.slice(numberOfLetter) + encryptedMessage.slice(0, numberOfLetter)},
        Insert: (index, value) => {return encryptedMessage.slice(0, index) + value + encryptedMessage.slice(index)},
        ChangeAll: (substring, replacement) => { return encryptedMessage.split(substring).join(replacement)}
    }
    while (data !== 'Decode') {
        const [command, ...values] = data.split('|')
        encryptedMessage = commands[command](...values)
        data = input.shift()
    }
    console.log(`The decrypted message is: ${encryptedMessage}`)
}


//
// function theImitationGame(input) {
//     let message = input.shift();
//
//     let line = input.shift();
//
//     while (line != "Decode") {
//         let tokens = line.split("|");
//
//         let command = tokens[0];
//
//         switch (command) {
//             case "Move": {
//                 let index = Number(tokens[1]);
//
//                 let firstPart = message.substring(0, index);
//                 let secondPart = message.substring(index);
//
//                 message = secondPart + firstPart;
//
//                 break;
//             }
//             case "Insert": {
//                 let index = Number(tokens[1]);
//
//                 let firstPart = message.substring(0, index);
//                 let secondPart = message.substring(index);
//                 let value = tokens[2];
//
//                 message = firstPart + value + secondPart;
//
//                 break;
//             }
//             case "ChangeAll": {
//                 let subString = tokens[1];
//                 let replacement = tokens[2];
//
//                 message = message.split(subString).join(replacement);
//
//                 break;
//             }
//         }
//
//         line = input.shift();
//    }
//
//    console.log(`The decrypted message is: ${message}`);
// }