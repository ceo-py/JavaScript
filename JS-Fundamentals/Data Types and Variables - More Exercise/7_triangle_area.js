function findTriangleArea(...numbers) {
    const [a,b,c] = numbers
    let s = (eval(numbers.join('+'))) / 2;
    console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)))
}


findTriangleArea(2, 3.5, 4)