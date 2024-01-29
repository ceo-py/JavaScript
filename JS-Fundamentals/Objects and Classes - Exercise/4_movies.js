function Movies(array) {
    const allMovies = []

    class Movie {
        constructor(name) {
            this.name = name
        }
        details() {
            if (!this.director || !this.date) return
            console.log(JSON.stringify(this))
        }
    }

    array.forEach(x => {
        if (x.includes('addMovie')) {
            allMovies.push(new Movie(x.replace('addMovie ', '')))
        } else if (x.includes('directedBy')) {
            const [movieName, directedBy] = x.split(' directedBy ')
            const found = allMovies.find(x => x.name === movieName)
            if (found) found.director = directedBy
        } else if (x.includes('onDate')) {
            const [movieName, onDate] = x.split(' onDate ')
            const found = allMovies.find(x => x.name === movieName);
            if (found) found.date = onDate
        }
    })
    allMovies.forEach(x => x.details())
}

Movies([
'addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo'
]
)