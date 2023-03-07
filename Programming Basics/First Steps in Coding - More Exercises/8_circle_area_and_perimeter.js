function calculateCircleArea(r) {
    r = parseFloat(r)
    const pi = Math.PI;
    const area = pi * r * r;
    const parameter = 2 * pi * r;
    console.log(area.toFixed(2));
    console.log(parameter.toFixed(2));
}

calculateCircleArea(['35.875'])