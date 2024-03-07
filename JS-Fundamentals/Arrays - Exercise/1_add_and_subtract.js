function addAndSubtract(list) {
    const modifiedList = []
    list.forEach((x, i) => modifiedList.push(x % 2 === 0 ? x + i : x - i))
    console.log(modifiedList)
    // console.log(list.reduce((acc, sum) => sum + acc,0))
    console.log(eval(list.join('+')))
    // console.log(modifiedList.reduce((acc, sum) => sum + acc,0))
    console.log(eval(modifiedList.join('+')))
}

addAndSubtract([-5, 11, 3, 0, 2])



// function addAndSubtract(list) {
//     const modifiedList = list.map((x, i) => x % 2 === 0 ? x + i : x - i);
//     console.log(modifiedList);
//     console.log(list.reduce((acc, x) => acc + x, 0));
//     console.log(modifiedList.reduce((acc, x) => acc + x, 0));
// }