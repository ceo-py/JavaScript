function mergeArrays(listOne, listTwo) {
    const mergeList = []
    listOne.forEach((x, i) => mergeList.push(i % 2 === 0? Number(x) + Number(listTwo[i]): x + listTwo[i]))
    console.log(mergeList.join(' - '))
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])


// function mergeArrays(listOne, listTwo) {
//     const mergedList = [];
//     listOne.forEach((element, index) => {
//         const isEvenIndex = index % 2 === 0;
//         const listTwoElement = Number(listTwo[index]);
//         const listOneElement = isEvenIndex ? Number(element) : element;
//         mergedList.push(listOneElement + listTwoElement);
//     });
//     console.log(mergedList.join(' - '));
// }