function solve(string) {
    string.split(' ').forEach(w => w.match(/#[A-Za-z]{2,}/) && console.log(w.slice(1)))
}


// function solve(string) {
//     string.split(' ').forEach(w => w.match(/#[A-Za-z]{2,}/) ? console.log(w.slice(1, w.length)) : null)
// }


// function solve(string) {
//     string.split(' ').filter(word => word[0] === "#" && Array.from(word.slice(1)).every(c => (c.toUpperCase() >= 'A' && c.toUpperCase() <= 'Z'))).forEach(w => w.length > 1? console.log(w.slice(1)): null)
// }


// function solve(string){
//     string = string.split(' ')
//     function onlyLettersAndNumbers(str) {
//   return Boolean(str.match(/#[A-Za-z]/));
//     }
//     for (const word of string){
//         if (onlyLettersAndNumbers(word)){
//             console.log(word.slice(1, word.length))
//         }
//     }
// }

solve("Nowadays everyone uses # to tag a #special word in #socialMedia")