function equalArrays(listOne, listTwo) {
    let foundDifference = null
    for (let i = 0; i < listOne.length; i += 1) {
        if (listOne[i] !== listTwo[i]) {
            foundDifference = `Arrays are not identical. Found difference at ${i} index`
            break
        }
    }
    if (listTwo.length > listOne.length) {
        for (let i = 0; i < listTwo.length; i += 1) {
            if (listTwo[i] !== listOne[i]) {
                foundDifference = `Arrays are not identical. Found difference at ${i} index`
                break
            }
        }
    }
    console.log(!foundDifference ? `Arrays are identical. Sum: ${eval(listOne.join('+'))}`: foundDifference)
}

equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '3', '4', '5', '6'])