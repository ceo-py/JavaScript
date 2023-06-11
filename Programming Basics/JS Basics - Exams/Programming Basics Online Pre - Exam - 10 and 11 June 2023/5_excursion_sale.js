function solve(list) {
    let [seaVacation, mountainVacation, profit] = [Number(list.shift()), Number(list.shift()), 0]

    for (const x of list) {

        if (x === 'Stop' || seaVacation + mountainVacation === 0) {
            break
        }

        if (seaVacation > 0 && x === 'sea') {
            seaVacation -= 1
            profit += 680
        } else if (mountainVacation > 0 && x === 'mountain') {
            mountainVacation -= 1
            profit += 499
        }
    }

    if (seaVacation + mountainVacation === 0) console.log('Good job! Everything is sold.')
    console.log(`Profit: ${profit} leva.`)

}
