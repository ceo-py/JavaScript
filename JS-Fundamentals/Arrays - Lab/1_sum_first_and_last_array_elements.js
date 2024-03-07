function sumFirstAndLastArrayElements(list) {
    console.log(`${list.shift() + list.pop()}`)
}

sumFirstAndLastArrayElements([20, 30, 40])


// function sumFirstAndLastArrayElements(list) {
//     console.log(list[0] + list[list.length - 1]);
// }