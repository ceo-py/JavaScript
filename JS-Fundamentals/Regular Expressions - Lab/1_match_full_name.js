function matchFullName(namesString) {
    console.log(namesString.match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g).join(' '))
}


// function matchFullName(namesString) {
//     const findNameRegex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
//     const matchFind = namesString.match(findNameRegex)
//     console.log(matchFind.join(' '));
// }


matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan    Ivanov"
)