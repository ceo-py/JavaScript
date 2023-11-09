function commonElements(listOne, listTwo) {
    listOne.forEach(x => listTwo.includes(x)? console.log(x): null)
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])