function solve(string, word){
    console.log(string.replace(new RegExp(word, 'g'), '*'.repeat(word.length)))
}