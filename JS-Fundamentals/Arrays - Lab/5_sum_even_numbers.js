function sumEvenNumbers(list) {
    let evenSum = 0
    list.forEach(x => evenSum += Number(x) % 2 === 0? Number(x): 0)
    console.log(evenSum)
}

sumEvenNumbers(['1','2','3','4','5','6'])


// function sumEvenNumbers(list) {
//     let evenSum = list.reduce((sum, x) => sum + (x % 2 === 0 ? x : 0), 0);
//     console.log(evenSum);
// }