function neededWaterForAquarium(array) {
    const [length, width, height, percent] = array.map(x => Number(x))

    const aquarium = length * width * height
    const litters = aquarium / 1000

    const neededWater = litters * (1 - (percent / 100))

    console.log(neededWater)
}

neededWaterForAquarium(["85 ",
"75 ",
"47 ",
"17 "])
