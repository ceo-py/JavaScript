function convertSecondsToMinutes(array) {
    const [timeFirst, timeSecond, timeThird] = array.map(x => Number(x))
    let totalTime = timeFirst + timeSecond + timeThird


    let minutes = parseInt(totalTime / 60)
    totalTime -= minutes * 60
    let seconds = totalTime

    if (totalTime <= 9) {
        seconds = `0${totalTime}`
    }

    console.log(`${minutes}:${seconds}`)

}

convertSecondsToMinutes(["14", "12",
    "10"])


// function convertSecondsToMinutes(array) {
//     const totalTime = array.map(Number).reduce((a, b) => a + b, 0);
//     const minutes = Math.floor(totalTime / 60);
//     const seconds = totalTime % 60;
//     console.log(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
// }