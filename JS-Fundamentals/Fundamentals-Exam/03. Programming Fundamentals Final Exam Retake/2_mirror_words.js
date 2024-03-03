function mirrorWords(mainString) {
    const patterns = /([@#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let [resultList, result, found] = [[], null, 0];

    while ((result = patterns.exec(mainString)) !== null) {
        const word = result[2];
        const word2 = result[3];
        found++
        if (word === word2.split('').reverse().join('')) {
            resultList.push(`${word} <=> ${word2}`);
        }
    }

    if (found) {
        console.log(`${found} word pairs found!`);
        if (resultList.length === 0) {
            console.log("No mirror words!");
        } else {
            console.log("The mirror words are:");
            console.log(resultList.join(', '));
        }
    } else {
        console.log("No word pairs found!");
        console.log("No mirror words!");
    }
}

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])