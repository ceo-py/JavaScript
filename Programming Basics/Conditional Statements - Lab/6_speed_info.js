function speedInformation(speed) {
    speed = Number(speed)
    let result = 'extremely fast'


    if (speed <= 10) {
        result = 'slow'
    } else if (speed <= 50) {
        result = 'average'
    } else if (speed <= 150) {
        result = 'fast'
    } else if (speed <= 1000) {
        result = 'ultra fast'
    }

    console.log(result)
}

speedInformation(["1001"])
