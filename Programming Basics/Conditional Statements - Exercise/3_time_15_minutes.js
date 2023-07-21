function addedMinutes(input) {
    const [InitialHours, InitialMinutes] = input.map(x => Number(x))
    const totalMinutes = (InitialHours * 60) + InitialMinutes + 15;
    const hour = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60;
    console.log(`${hour === 24 ? 0: hour}:${minutes >= 10? '': '0'}${minutes}`);
}

addedMinutes(["0", "56"]);


// function addedMinutes(array) {
//     const [hours, minutes] = array.map(x => Number(x))
//     let minutes_added = 15;
//     let total_minutes = minutes_added + minutes;
//
//     if (total_minutes > 59) {
//         let over_sixty_minutes = total_minutes - 60;
//         let total_time = hours + 1;
//         if (total_time >= 24) {
//             total_time = 0;
//             if (over_sixty_minutes < 10) {
//                 console.log(total_time + ":0" + over_sixty_minutes);
//             } else {
//                 console.log(total_time + ":" + over_sixty_minutes);
//             }
//         } else {
//             if (over_sixty_minutes < 10) {
//                 console.log(total_time + ":0" + over_sixty_minutes);
//             } else {
//                 console.log(total_time + ":" + over_sixty_minutes);
//             }
//         }
//         total_minutes = minutes_added + minutes;
//     } else if (total_minutes < 10) {
//         console.log(hours + ":0" + total_minutes);
//     } else {
//         console.log(hours + ":" + total_minutes);
//     }
// }
//
// addedMinutes(["11", "08"])