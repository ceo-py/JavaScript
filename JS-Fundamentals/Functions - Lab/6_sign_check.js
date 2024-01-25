function signCheck(...numbers) {
    console.log(numbers.filter(x => x < 0).length % 2 === 0 ? 'Positive' : 'Negative')
}

signCheck(5, 12, -15)