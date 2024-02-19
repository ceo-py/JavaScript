function hairSalon(input) {
    let [sumTarget, total, service, index] = [Number(input[0]), 0, input[1], 2]

    while (service !== "closed" && !total >= sumTarget) {
        let kindService = input[index + 1]
        if (kindService === "mens") total += 15
        else if (kindService === "ladies") total += 20
        else if (kindService === "kids") total += 10
        else if (kindService === "touch up") total += 20
        else if (kindService === "full color") total += 30
        index += 2
        service = input[index]
    }
    console.log(total >= sumTarget ?
        `You have reached your target for the day!`
        : `Target not reached! You need ${sumTarget - total}lv. more.`)
    console.log(`Earned money: ${total}lv.`)
}


//
// function hairSalon(input) {
//     let [sumTarget, total, isTargetReach] = [Number(input[0]), 0, false]
//     for (let index = 1; index < input.length; index += 2) {
//         const service = input[index]
//         if (service === "closed") break
//         let kindService = input[index + 1]
//         switch (kindService) {
//             case "mens":
//                 total += 15
//                 break;
//             case "ladies":
//                 total += 20
//                 break;
//             case "kids":
//                 total += 10
//                 break;
//             case "touch up":
//                 total += 20
//                 break;
//             case "full color":
//                 total += 30
//                 break;
//         }
//         if (total >= sumTarget) {
//             isTargetReach = true;
//             break;
//         }
//     }
//     if (isTargetReach) {
//         console.log(`You have reached your target for the day!`)
//     } else console.log(`Target not reached! You need ${sumTarget - total}lv. more.`)
//     console.log(`Earned money: ${total}lv.`)
// }