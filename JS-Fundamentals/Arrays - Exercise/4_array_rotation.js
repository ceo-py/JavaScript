function arrayRotation(list, rotation) {
    while (rotation > 0) {
        rotation -= 1
        list.push(list.shift())
    }
    console.log(list.join(' '))
}

arrayRotation([51, 47, 32, 61, 21], 2 )


// function arrayRotation(list, rotation) {
//     rotation %= list.length;
//     const rotatedList = list.slice(-rotation).concat(list.slice(0, -rotation));
//     console.log(rotatedList.join(' '));
// }