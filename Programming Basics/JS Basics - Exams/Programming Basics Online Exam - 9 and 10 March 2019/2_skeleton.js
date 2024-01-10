function sceleton(input) {
    const [minutesControl, secondsControl, lengthChute, secondsPer100Meters] = input.map((Number))
    const controlTime = minutesControl * 60 + secondsControl
    const slowingTime = lengthChute / 120
    const totalSlowingTime = slowingTime * 2.5
    const marinTime = (lengthChute / 100) * secondsPer100Meters - totalSlowingTime
    if (marinTime <= controlTime) {
        console.log(`Marin Bangiev won an Olympic quota!\nHis time is ${marinTime.toFixed(3)}.`)
    } else console.log(`No, Marin failed! He was ${(marinTime - controlTime).toFixed(3)} second slower.`)
}

sceleton(['2', '12', '1200', '10'])