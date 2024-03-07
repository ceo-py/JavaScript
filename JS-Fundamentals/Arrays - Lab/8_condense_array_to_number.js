function condenseArrayToNumber(list) {
    while (list.length > 1) {
        let tempArr = []
        for (let i = 0; i < list.length - 1; i++) {
            tempArr[i] = list[i] + list[i + 1]
        }
        list = tempArr
    }
    console.log(list[0])
}

condenseArrayToNumber([1])


// function condenseArrayToNumber(list) {
//     while (list.length > 1) {
//         list = list.map((num, i, arr) => num + (arr[i + 1] || 0)).slice(0, -1);
//     }
//     console.log(list[0]);
// }