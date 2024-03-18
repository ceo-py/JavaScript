function carFactory({model, power, color, carriage, wheelsize}) {
    const car = {}

    function chooseEngine(power) {
        if (power <= 90) return {power: 90, volume: 1800}
        else if (power <= 120) return {power: 120, volume: 2400}
        else if (power <= 200) return {power: 200, volume: 3500}
    }

    car.model = model
    car.engine = chooseEngine(power)
    car.carriage = {type: carriage, color}
    car.wheels = Array.from({length: 4}, () => wheelsize % 2 === 0 ? wheelsize - 1 : wheelsize)

    return (car)
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})