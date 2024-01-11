function favoriteMovie(param) {
    let current_movie_score = 0;
    let best_movie_score = 0;
    let best_movie_name = "";
    let small_letter_count = 0;
    let big_letters_count = 0;
    const lower_letters = 'abcdefghijklmnopqrstuvwxyz';
    const upper_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let movie_counter = 0;

    while (true) {
        movie_counter += 1;
        const movie_name = param.shift();

        if (movie_name === "STOP") {
            console.log(`The best movie for you is ${best_movie_name} with ${best_movie_score} ASCII sum.`);
            break;
        } else {
            for (let i = 0; i < movie_name.length; i++) {
                const letter = movie_name[i];

                if (lower_letters.includes(letter)) {
                    small_letter_count += 1;
                    current_movie_score += letter.charCodeAt(0) - movie_name.length * 2;
                } else if (upper_letters.includes(letter)) {
                    big_letters_count += 1;
                    current_movie_score += letter.charCodeAt(0) - movie_name.length;
                } else {
                    current_movie_score += letter.charCodeAt(0);
                }
            }

            if (current_movie_score > best_movie_score) {
                best_movie_name = movie_name;
                best_movie_score = current_movie_score;
            }

            if (movie_counter === 7) {
                console.log(`The limit is reached.\nThe best movie for you is ${best_movie_name} with ${best_movie_score} ASCII sum.`);
                break;
            }

            small_letter_count = 0;
            big_letters_count = 0;
            current_movie_score = 0;
        }
    }
}

favoriteMovie([])