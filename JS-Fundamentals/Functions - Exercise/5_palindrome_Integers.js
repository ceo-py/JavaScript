function palindromeIntegers(numbers) {
    numbers.forEach(x => console.log(String(x) === String(x).split('').reverse().join('')))
}

palindromeIntegers([123,323,421,121])