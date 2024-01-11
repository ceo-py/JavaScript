function movieStars(param) {
    let [budget, command] = [Number(param.shift()), param.shift()]
    while (command !== 'ACTION' && budget > 0) {

        const actorName = command

        if (actorName.length > 15) {
            budget -= budget * 0.20
        } else budget -= Number(param.shift())

        command = param.shift()
    }
    if (budget > 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`)
    } else {
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`)
    }
}

movieStars(["90000",
    "Christian Bale",
    "70000.50",
    "Leonard DiCaprio",
    "Kevin Spacey",
    "24000.99"])
