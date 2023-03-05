function searchingForBook(array) {
    let [bookToLook, i] = [array.shift(), 0, 0]
    let output = ''
    while (array[i] !== 'No More Books') {
        let book = array[i]

        if (book === bookToLook) {
            output = `You checked ${i} books and found it.`
            break
        }

        i += 1
    }

    if (!output) {
        output = `The book you search is not here!\nYou checked ${i} books.`
    }

    console.log(output)
}

searchingForBook(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])
