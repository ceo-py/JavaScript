function oscarWinners(array) {
    let [actorName, startingPoints, numberJury, ...judges] = array.map(x => isNaN(x) ? x : Number(x))
    let output = ''

    for (let i = 0; i < numberJury * 2; i += 2) {
        let judgeName = judges[i].length
        let points = judges[i + 1]

        startingPoints += (judgeName * points) / 2

        if (startingPoints > 1250.5) {
            output = `Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`
            break
        }
    }

    if (!output) {
        let pointsDifference = Math.abs(1250.5 - startingPoints).toFixed(1)
        output = `Sorry, ${actorName} you need ${pointsDifference} more!`
    }

    console.log(output)

}



oscarWinners(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"])

//
// function oscars(input) {
//     let [actor, score, nominated, neededScore] = [input[0], Number(input[1]), false, 1250.5]
//
//     for (let index = 3; index < input.length; index += 2) {
//         const juryName = input[index]
//         const juryScore = Number(input[index + 1])
//
//         const currentScore = (juryName.length * juryScore) / 2
//         score += currentScore
//
//         if (score > neededScore) {
//             nominated = true
//             break
//         }
//     }
//
//     if (nominated) {
//         console.log(`Congratulations, ${actor} got a nominee for leading role with ${score.toFixed(1)}!`);
//     } else {
//         console.log(`Sorry, ${actor} you need ${(neededScore - score).toFixed(1)} more!`);
//     }
//
// }