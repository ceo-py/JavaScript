function whatsTheWeather(weather) {
    weather= weather[0]
    if (weather === 'sunny') {
        console.log("It's warm outside!")
    } else {
        console.log("It's cold outside!")
    }

}

whatsTheWeather(['sunny'])