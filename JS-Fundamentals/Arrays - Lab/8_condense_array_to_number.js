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