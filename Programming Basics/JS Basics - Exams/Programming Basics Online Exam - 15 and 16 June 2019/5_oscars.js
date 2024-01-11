function oscars(param) {
    let [actor_name, points_from_academy, judges_number] = [param.shift(), Number(param.shift()), Number(param.shift())];

    let judges_score = points_from_academy;
    let nominated = false;

    for (let judge = 0; judge < judges_number; judge++) {
        const judge_name = param.shift();
        const judge_points = Number(param.shift());

        judges_score += (judge_name.length * (judge_points / 2));

        if (judges_score > 1250.5) {
            console.log(`Congratulations, ${actor_name} got a nominee for leading role with ${judges_score.toFixed(1)}!`);
            nominated = true;
            break;
        }
    }

    if (!nominated) {
        judges_score = 1250.5 - judges_score;
        console.log(`Sorry, ${actor_name} you need ${judges_score.toFixed(1)} more!`);
    }
}

oscars([])