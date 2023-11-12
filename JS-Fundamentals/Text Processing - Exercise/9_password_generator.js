function passwordGenerator(input) {
    const [password, word, vowels] = [(input[0] + input[1]).split(''), input[2].toUpperCase(), ['a', 'e', 'i', 'o', 'u']]
    let index = 0
    password.forEach((x, i) => {
        index = index % word.length
        vowels.includes(x.toLowerCase()) ? [password[i] = word[index], index += 1]: null
    })
    console.log(`Your generated password is ${password.reverse().join('')}`)
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange'])