function solve(list) {
    let output = {}

    function joinNames(name) {
        return name.join(' ')
    }

    list.forEach(item => {
        if (item.includes(' -> ')) {
            let [shelfID, ...shelfGenre] = item.split(' -> ')
            if (!output.hasOwnProperty(shelfID)) {
                output[shelfID] = {}
                output[shelfID].genre = joinNames(shelfGenre)
                output[shelfID].books = []
            }

        } else {
            let [bookTitle, data] = item.split(': ')
            let [bookAuthor, bookGenre] = data.split(', ')
            for (let shelf in output) {
                if (output[shelf].genre === bookGenre) {
                    output[shelf].books.push(
                        {
                            name: bookTitle,
                            author: bookAuthor
                        }
                    )
                }
            }
        }
    })

    const sortedShelves = Object.entries(output).sort((a, b) => {
        const aCount = a[1].books.length
        const bCount = b[1].books.length
        return bCount - aCount;
    });

    sortedShelves.forEach(shelf => {
        const shelfNumber = shelf[0]
        const genre = shelf[1].genre
        const books = shelf[1].books

        console.log(`${shelfNumber} ${genre}: ${books.length}`);

        books.sort((a, b) => a.name.localeCompare(b.name)).forEach(book => {
            console.log(`--> ${book.name}: ${book.author}`)
        })
    })
}