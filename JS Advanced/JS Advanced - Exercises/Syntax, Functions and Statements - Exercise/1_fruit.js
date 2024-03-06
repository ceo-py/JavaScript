function fruit(...input) {
    const [fruit, weight, kilograms] = input.map(x => isNaN(x)? x: Number(x))
    const weightInKg = weight / 1000
    console.log(`I need $${(weightInKg * kilograms).toFixed(2)} to buy ${(weightInKg).toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.80)