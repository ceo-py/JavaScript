function weatherDependOnDegree(temperature) {
    temperature = parseFloat(temperature)
    let output = 'unknown'
    if (temperature >= 5.00 && temperature <= 11.9) {
        output = 'Cold'
    } else if (temperature <= 14.9) {
        output = 'Cool'
    } else if (temperature <= 20.00) {
        output = 'Mild'
    } else if (temperature <= 25.90) {
        output = 'Warm'
    } else if (temperature <= 35.00) {
        output = 'Hot'
    }

    console.log(output)
}

weatherDependOnDegree(["16.5"])