function integerAndFloat(...numbers) {
    const sum = eval(numbers.join('+'))
    console.log(`${sum} ${sum % 1=== 0? '- Integer': '- Float'}`)
}

integerAndFloat(9, 100, 1.1)