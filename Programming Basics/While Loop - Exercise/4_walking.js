function stepsGoalReach(array) {
    let [i, stepsWalked, output, goalReach] = [0, 0, '', false]

    while (array[i] !== 'Going home') {

        stepsWalked += Number(array[i])

        if (stepsWalked > 10000) {
            break
        }
        i += 1
    }

    if (array[i] === 'Going home') {
        stepsWalked += Number(array.pop())
    }

    let deferenceSteps = Math.abs(stepsWalked - 10000)

    if (stepsWalked >= 10000) {
        output = `Goal reached! Good job!\n${deferenceSteps} steps over the goal!`

    } else {
        output = `${deferenceSteps} more steps to reach goal.`
    }
    console.log(output)
}

stepsGoalReach(["1500",
    "3000",
    "250",
    "1548",
    '2000',
    "Going home",
    "2000"])

