function solve(wordCheck, string){
    console.log(string.split(' ').find(w => w.toLowerCase() === wordCheck.toLowerCase()) ? wordCheck : `${wordCheck} not found!`)
}