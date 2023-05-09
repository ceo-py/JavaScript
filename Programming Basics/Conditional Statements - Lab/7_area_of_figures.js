function areaOfFigures(array) {
    const [figure, ...data] = array

    let result = 0

    if (figure === 'square') {
        let length = Number(data[0])
        result = length * length

    } else if (figure === 'rectangle') {
        let [length, width] = data.map(x => Number(x))
        result = length * width

    } else if (figure === 'circle') {
        let radius = Number(data[0])
        result = (radius * radius) * Math.PI

    } else if (figure === 'triangle') {
        let [length, width] = data.map(x => Number(x))
        result = length * width / 2
    }

    console.log(result.toFixed(3))
}

areaOfFigures(["triangle",
"4.5",
"20"])



// function areaOfFigures(params) {
//     const [figure, firstParam, secondParam] = params.map(x => isNaN(x) ? x: Number(x))
//
//     const allFigures = {
//         'square': firstParam * firstParam,
//         'rectangle': firstParam * secondParam,
//         'circle': Math.PI * (firstParam ** firstParam),
//         'triangle': (firstParam * secondParam) / 2
//     }
//     console.log(allFigures[figure]);
// }
//
//
// areaOfFigures(["square", "5"])