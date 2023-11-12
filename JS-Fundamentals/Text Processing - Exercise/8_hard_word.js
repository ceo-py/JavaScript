function hardWord(input) {
    const [letter, wordsToReplace] = [input[0].split(' '), input[1]]
    const findWord = (word) => {
        return wordsToReplace.find(x => x.length === word)
    }
    letter.forEach((x, i) => {
        if (x.includes('_')) {
            const lastSymbol = x[x.length -1]
            letter[i] = lastSymbol !== '_' ? `${findWord(x.length -1)}${lastSymbol}`: findWord(x.length)
        }
    })
    console.log(letter.join(' '))
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more.Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])