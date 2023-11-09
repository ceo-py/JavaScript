function evenAndOddSubtraction(list) {
    let [odd, even] = [0, 0]
    list.forEach(x => x % 2 === 0 ? even += x : odd += x)
    console.log(even - odd)
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6])