function searchForANumber(initialElements, array) {
    const [takingElements, deletingElements, searchElement] = array
    const taken = initialElements.splice(0, takingElements)
    taken.splice(0, deletingElements)
    console.log(`Number ${searchElement} occurs ${taken.filter(x => x === searchElement).length} times.`)
}

searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])