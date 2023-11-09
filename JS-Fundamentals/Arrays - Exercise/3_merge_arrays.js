function mergeArrays(listOne, listTwo) {
    const mergeList = []
    listOne.forEach((x, i) => mergeList.push(i % 2 === 0? Number(x) + Number(listTwo[i]): x + listTwo[i]))
    console.log(mergeList.join(' - '))
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])