function emojiDetector(input) {
    const mainString = input.shift();

    let coolThreshold = 1;
    const allDigits = mainString.replace(/\D/g, '');
    for (const digit of allDigits) {
        coolThreshold *= parseInt(digit);
    }

    console.log(`Cool threshold: ${coolThreshold}`);

    const patterns = /(::)([A-Z][a-z]{2,})(::)|(\*\*)([A-Z][a-z]{2,})(\*\*)/g;
    let match;
    const emojis = [];
    while ((match = patterns.exec(mainString)) !== null) {
        emojis.push(match[0]);
    }
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    for (const emoji of emojis) {
        let emojiText = emoji.slice(2, -2);
        let findCool = emojiText.split('').reduce((sum, letter) => sum + letter.charCodeAt(0), 0);
        if (findCool >= coolThreshold) {
            console.log(emoji);
        }
    }

}