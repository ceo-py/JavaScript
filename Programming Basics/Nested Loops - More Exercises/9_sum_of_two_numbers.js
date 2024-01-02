function sumTwoNumbers(param) {
    const [staringPoint, endPoint, lookingForNumber] = param.map(Number)
    let [combinationsCounter, resul] = [0, null]
    outerLoop:
    for (let n1 = staringPoint; n1 <= endPoint; n1++) {
        for (let n2 = staringPoint; n2 <= endPoint; n2++) {
            combinationsCounter++
            const currentSum = n1 + n2
            if (currentSum === lookingForNumber) {
                resul = `Combination N:${combinationsCounter} (${n1} + ${n2} = ${currentSum})`
                break outerLoop;
            }
        }
    }
    console.log(resul? resul:`${combinationsCounter} combinations - neither equals ${lookingForNumber}`)
}

sumTwoNumbers([1,10,5])