function easterCompetition(param) {
    const cozunak_numbers = Number(param.shift())

    let baker_best_name = '';
    let baker_best_score = 0;

    for (let cozunak_number = 0; cozunak_number < cozunak_numbers; cozunak_number++) {
        const baker_name = param.shift();

        let score = param.shift();
        let current_baker_score = 0;

        while (score !== 'Stop') {
            score = parseInt(score);
            current_baker_score += score;
            score = param.shift();
        }

        console.log(`${baker_name} has ${current_baker_score} points.`);

        if (current_baker_score > baker_best_score) {
            baker_best_name = baker_name;
            baker_best_score = current_baker_score;
            console.log(`${baker_best_name} is the new number 1!`);
        }
    }

    console.log(`${baker_best_name} won competition with ${baker_best_score} points!`);

}

easterCompetition([])