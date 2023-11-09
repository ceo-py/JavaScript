function reverseAnArrayOfNumbers(totalElements, list) {
    console.log(list.splice(0, totalElements).reverse().join(' '))
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])