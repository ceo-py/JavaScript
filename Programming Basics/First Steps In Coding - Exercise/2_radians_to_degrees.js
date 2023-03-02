function convertRadianToDegrees(radians) {
    radians = Number(radians)
    let degrees = radians * 180 / Math.PI
    console.log(degrees)
}

convertRadianToDegrees(["3.1416"])
