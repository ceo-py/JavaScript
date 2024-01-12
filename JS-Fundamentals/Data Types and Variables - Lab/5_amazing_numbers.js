function amazingNumbers(number) {
    console.log(`${number} Amazing? ${eval(number.toString().split('').join('+')).toString().includes('9')? 'True': 'False'}`)
}

amazingNumbers(999)