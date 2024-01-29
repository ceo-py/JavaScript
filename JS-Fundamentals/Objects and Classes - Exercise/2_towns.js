function towns(array) {
    class Town {
        constructor(town, Latitude, Longitude) {
            this.town = town
            this.Latitude = Number(Latitude).toFixed(2)
            this.Longitude = Number(Longitude).toFixed(2)
        }

        toObj() {
            console.log({
                town: this.town, latitude: this.Latitude, longitude: this.Longitude
            })
        }
    }
    array.forEach(x => new Town(...x.split(' | ')).toObj())
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])