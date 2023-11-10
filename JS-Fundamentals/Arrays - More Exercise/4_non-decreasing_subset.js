function nonDecreasingSubset(list) {
    const result = [Number(list.shift())]
    list.map(Number).forEach(x => x >= result[result.length - 1]? result.push(x): null)
    console.log(result.join(' '))
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])