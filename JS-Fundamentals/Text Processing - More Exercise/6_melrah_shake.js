function melrahShake(input) {
    let [text, pattern] = [input.shift(), input.shift()]

    while (pattern.length > 0) {
        let firstMatch = text.indexOf(pattern)
        let lastMatch = text.lastIndexOf(pattern)

        if (!(firstMatch !== -1 && firstMatch !== lastMatch)) break
        text = text.slice(0, firstMatch) + text.slice(firstMatch + pattern.length)
        text = text.slice(0, lastMatch - pattern.length) + text.slice(lastMatch)
        const removeFromPatt = pattern[parseInt(pattern.length / 2)]
        pattern = pattern.replace(removeFromPatt, '')
        console.log('Shaked it.')
    }

    console.log('No shake.');
    console.log(text);
}


// function melrahShake(input) {
//     let text = input.shift()
//     let pattern = input.shift()
//
//     while (pattern.length > 0) {
//
//         let firstMatch = text.indexOf(pattern);
//         let lastMatch = text.lastIndexOf(pattern);
//
//         if ((firstMatch > -1 && lastMatch > -1) && firstMatch !== lastMatch) {
//
//             text = text.split('');
//             text.splice(firstMatch, pattern.length);
//             text = text.join('');
//             lastMatch = text.lastIndexOf(pattern);
//             text = text.split('')
//             text.splice(lastMatch, pattern.length)
//             let removeFromPatt = pattern[Math.floor(pattern.length / 2)]
//             pattern = pattern.replace(removeFromPatt, '');
//             text = text.join('')
//
//             console.log('Shaked it.')
//         } else break
//     }
//     console.log('No shake.')
//     console.log(text)
// }

melrahShake(['##mtm!!mm.mm*mtm.#',
'mtm']
)