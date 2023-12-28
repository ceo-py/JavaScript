function oddEvenPosition(input) {
    input.shift()
    let [oddSum, oddMin, oddMax, evenSum, evenMin, evenMax] = [0, 0, 0, 0, 0, 0]
    for (const i in input) {
        let number = Number(input[i])
        if (i % 2 === 0) {
            oddSum += number
            if (oddMin > number || oddMin === 0) {
                oddMin = number
            }
            if (oddMax < number || oddMax === 0) {
                oddMax = number
            }
        } else {
            evenSum += number
            if (evenMin > number || evenMin === 0) {
                evenMin = number
            }
            if (evenMax < number || evenMax === 0) {
                evenMax = number
            }
        }
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`)
    console.log(`OddMin=${oddMin === 0 ? 'No' : oddMin.toFixed(2)},`)
    console.log(`OddMax=${oddMax === 0 ? 'No' : oddMax.toFixed(2)},`)
    console.log(`EvenSum=${evenSum.toFixed(2)},`)
    console.log(`EvenMin=${evenMin === 0 ? 'No' : evenMin.toFixed(2)},`)
    console.log(`EvenMax=${evenMax === 0 ? 'No' : evenMax.toFixed(2)}`)
}

oddEvenPosition([2, -5])