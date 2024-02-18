function workout(input) {
    let totalDistance = Number(input[1])
    let total = totalDistance;
    for (let index = 2; index < input.length; index++) {
        totalDistance += (Number(input[index]) * totalDistance) / 100;
        total += totalDistance
    }
    console.log(total >= 1000 ? `You've done a great job running ${Math.ceil(total - 1000)} more kilometers!` : `Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - total)} more kilometers`)
}