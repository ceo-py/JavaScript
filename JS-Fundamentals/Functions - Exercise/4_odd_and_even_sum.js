function oddAndEvenSum(number) {
    const totalSum = eval(number.toString().split('').join('+'))
    const oddSum = eval(number.toString().split('').filter(x => x % 2 !== 0).join('+'))
    console.log(`Odd sum = ${oddSum}, Even sum = ${totalSum - oddSum}`)
}

oddAndEvenSum(1000435)