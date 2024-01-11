function movieRating(param) {
    const totalMovies = Number(param.shift())
    let [bestMovieName, bestMovieRating, worstMovieName, worstMovieRating, averageRating] = ['', -10, '', 10, 0]
    for (let movie = 0; movie < totalMovies; movie++) {
        const currentMovieName = param.shift()
        const currentMovieRating = Number(param.shift())

        if (currentMovieRating > bestMovieRating) {
            bestMovieName = currentMovieName
            bestMovieRating = currentMovieRating
        } else if (currentMovieRating < worstMovieRating) {
            worstMovieName = currentMovieName
            worstMovieRating = currentMovieRating
        }
        averageRating += currentMovieRating
    }
    console.log(`${bestMovieName} is with highest rating: ${bestMovieRating.toFixed(1)}`)
    console.log(`${worstMovieName} is with lowest rating: ${worstMovieRating.toFixed(1)}`)
    console.log(`Average rating: ${(averageRating / totalMovies).toFixed(1)}`)
}

movieRating([])