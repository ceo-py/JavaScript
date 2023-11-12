function lettersChangeNumbers(input) {
    const letters = input.split(' ')
    const totalResult = []

    for (let x of letters) {
        if (x.length === 0) continue
        x = x.split('')
        const [startLetter, endLetter, number] = [x.shift(), x.pop(), Number(x.join(''))]
        const operatorFirst = startLetter === startLetter.toUpperCase() ? '/' : '*'
        const operatorSecond = endLetter === endLetter.toUpperCase() ? '-' : '+'
        const letterFirstPosition = startLetter.toLowerCase().charCodeAt(0) - 96
        const letterSecondPosition = endLetter.toLowerCase().charCodeAt(0) - 96
        totalResult.push(eval(`${number}${operatorFirst}${letterFirstPosition}${operatorSecond}${letterSecondPosition}`))
    }
    console.log(`${eval(totalResult.join('+')).toFixed(2)}`)
}

lettersChangeNumbers('P34562Z q2576f          H456z')