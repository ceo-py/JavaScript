function secretChat(list) {
    let message = list.shift()
    list.pop()

    const commands = {
        'InsertSpace': (index) => {
            message = message.slice(0, index) + " " + message.slice(index)
        },
        'Reverse': (substring) => {
            if (!message.includes(substring)) return true

            const word_find = message.indexOf(substring)
            message = message.slice(0, word_find) + message.slice(word_find + substring.length)
            message += substring.split("").reverse().join("")
        },
        'ChangeAll': (substring, replacement) => {
            message = message.split(substring).join(replacement)
        }
    }

    list.forEach(x => {
        const [command, ...data] = x.split(':|:')
        console.log(commands[command](...data) ? 'error' : message)
    })
    console.log(`You have a new text message: ${message}`)
}