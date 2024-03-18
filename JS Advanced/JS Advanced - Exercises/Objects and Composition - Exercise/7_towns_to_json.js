function townsToJSON(towns) {
    const output = []
    const town = (Town, Latitude, Longitude) => {
        return {
            Town, Latitude, Longitude
        }
    }
    towns.splice(1).map(x => output.push(town(...x.slice(2, -2).split(' | ').map(d => isNaN(d) ? d : Number(parseFloat(d).toFixed(2))))))
    console.log(JSON.stringify(output))
}

townsToJSON(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |'])