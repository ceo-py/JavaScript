function calculateCircleArea(r) {
    r = Number(r)
    console.log(`${(Math.PI * r * r).toFixed(2)}`)
    console.log(`${(2 * Math.PI * r).toFixed(2)}`)
}

calculateCircleArea(['35.875'])