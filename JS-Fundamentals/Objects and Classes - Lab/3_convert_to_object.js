function convertToObject(string) {
    Object.entries(JSON.parse(string)).forEach(x => console.log(`${x[0]}: ${x[1]}`))
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')