function timeToWalk(steps, footprint, speed) {
    let distance = steps * footprint
    let speedMetersSec = speed / 3.6
    let time = distance / speedMetersSec
    let rest = Math.floor(distance / 500)

    let timeMin = Math.floor(time / 60)
    let timeSec = Math.round(time - (timeMin * 60))
    let timeHr = Math.floor(timeMin / 60)

    timeMin -= timeHr * 60
    timeMin += rest

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin < 10 ? "0" : "") + timeMin + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}