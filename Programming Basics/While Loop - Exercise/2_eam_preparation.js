function examPreparation(array) {
    let [i, lastProblem, output, totalScore, badGrades, allowBadGrades, ...exams] = [0, '', '', 0, 0, Number(array.shift()), array]

    while (exams[0][i] !== 'Enough') {

        let grade = Number(exams[0][i + 1])
        lastProblem = exams[0][i]

        totalScore += grade
        if (grade <= 4) {
            badGrades += 1

            if (badGrades === allowBadGrades) {
                output = `You need a break, ${allowBadGrades} poor grades.`
                break
            }
        }

        i += 2
    }

    if (!output) {
        let numberOfProblems = parseInt(i / 2)
        output = `Average score: ${(totalScore / numberOfProblems).toFixed(2)}\nNumber of problems: ${numberOfProblems}\nLast problem: ${lastProblem}`
    }
    console.log(output)

}

examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])
