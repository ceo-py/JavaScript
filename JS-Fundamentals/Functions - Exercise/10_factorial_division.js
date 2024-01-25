function solve(num1, num2) {
    const factorial = (n) => {
        return n <= 1 ? 1 : n * factorial(n - 1)
    }
    console.log((factorial(num1) / factorial(num2)).toFixed(2))
}


solve(5, 2); // Outputs: 40.00