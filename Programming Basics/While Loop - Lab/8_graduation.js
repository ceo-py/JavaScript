function averageGrade(array) {
    let [name, currentClass, totalGrade, leftOver, i] = [array.shift(), 0, 0, 0, 0]

    while (currentClass < 12) {
        let currentGrade = Number(array[i])

        if (currentGrade >= 4.00) {
            totalGrade += currentGrade
            currentClass += 1
            leftOver = 0
        } else {
            leftOver += 1
            if (leftOver > 1) {
                break
            }
        }
        i += 1
    }

    if (currentClass !== 12) {
        console.log(`${name} has been excluded at ${currentClass + 1} grade`)
    } else {
        console.log(`${name} graduated. Average grade: ${(totalGrade / 12).toFixed(2)}`)
    }
}

averageGrade(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])
